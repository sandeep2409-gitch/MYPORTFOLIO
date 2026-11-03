import { GitHubStats } from "@/types";

export const fallbackGitHubStats: GitHubStats = {
  publicRepos: 70,
  followers: 18,
  stars: 42,
  recentActivity: "Active daily commits on 30 Python Projects in 30 Days",
  lastUpdated: new Date().toISOString(),
};

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const username = "sandeep2409-gitch";
  
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-sandeep-manchinasetti",
      },
    });

    if (!userRes.ok) {
      console.warn(`GitHub API returned status ${userRes.status}. Using fallback stats.`);
      return fallbackGitHubStats;
    }

    const userData = await userRes.json();

    // Fetch recent events for live activity status
    let activityText = "Pushed code recently to public repositories";
    try {
      const eventsRes = await fetch(
        `https://api.github.com/users/${username}/events/public?per_page=5`,
        {
          next: { revalidate: 1800 },
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "portfolio-sandeep-manchinasetti",
          },
        }
      );
      if (eventsRes.ok) {
        const events = await eventsRes.json();
        if (Array.isArray(events) && events.length > 0) {
          const pushEvent = events.find((e: { type: string }) => e.type === "PushEvent");
          if (pushEvent && pushEvent.repo?.name) {
            const repoClean = pushEvent.repo.name.replace(`${username}/`, "");
            activityText = `Latest push to repo '${repoClean}'`;
          }
        }
      }
    } catch {
      // Ignore event failure; fallback string remains
    }

    return {
      publicRepos: userData.public_repos ?? fallbackGitHubStats.publicRepos,
      followers: userData.followers ?? fallbackGitHubStats.followers,
      stars: 42, // Estimate or aggregate
      recentActivity: activityText,
      lastUpdated: userData.updated_at ?? new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Failed to reach GitHub API, using graceful fallback:", error);
    return fallbackGitHubStats;
  }
}
