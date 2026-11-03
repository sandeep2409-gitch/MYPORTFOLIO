#!/usr/bin/env bash
set -euo pipefail

# Locate the root of the repository
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

README_FILE="README.md"
if [ ! -f "$README_FILE" ]; then
    echo "Error: $README_FILE not found in $REPO_ROOT" >&2
    exit 1
fi

PYTHON_BIN=""
if [ -x "/usr/bin/python3" ]; then
    PYTHON_BIN="/usr/bin/python3"
elif command -v python3 >/dev/null 2>&1; then
    PYTHON_BIN="$(command -v python3)"
else
    echo "Error: python3 not found" >&2
    exit 1
fi

"$PYTHON_BIN" - << 'EOF'
import os

readme_path = "README.md"
with open(readme_path, "r", encoding="utf-8") as f:
    content = f.read()

marker_with_space = "<!-- daily-activity: [ ] -->"
marker_without_space = "<!-- daily-activity: [] -->"

if marker_with_space not in content and marker_without_space not in content:
    content = content.rstrip() + f"\n\n{marker_with_space}\n"
    print("Added marker with a space to README.md")
elif marker_with_space in content:
    content = content.replace(marker_with_space, marker_without_space)
    print("Toggled marker: removed space from README.md")
else:
    content = content.replace(marker_without_space, marker_with_space)
    print("Toggled marker: added space to README.md")

with open(readme_path, "w", encoding="utf-8") as f:
    f.write(content)
EOF

echo "Done updating $README_FILE."

# Optional commit and push if requested
DO_COMMIT=false
DO_PUSH=false

for arg in "$@"; do
    case "$arg" in
        --commit)
            DO_COMMIT=true
            ;;
        --push)
            DO_COMMIT=true
            DO_PUSH=true
            ;;
        *)
            ;;
    esac
done

if [ "$DO_COMMIT" = true ]; then
    git add "$README_FILE"
    if git diff --staged --quiet; then
        echo "No changes to commit."
    else
        TODAY=$(date -u +"%Y-%m-%d")
        git commit -m "chore(activity): daily readme update ${TODAY} [skip ci]"
        echo "Committed daily update."
        if [ "$DO_PUSH" = true ]; then
            git push
            echo "Pushed changes to remote."
        fi
    fi
fi
