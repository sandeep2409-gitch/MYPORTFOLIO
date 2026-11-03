import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/lib/github";

export const revalidate = 3600; // 1 hour cache

export async function GET() {
  const stats = await fetchGitHubStats();
  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
