import { HomeFeature } from "@/components/home/home-feature";
import { HomeFeaturedGame } from "@/components/home/home-featured-game";
import { HomeReached } from "@/components/home/home-reached";
import { HomeStart } from "@/components/home/home-start";
import { HomeStory } from "@/components/home/home-story";
import { LayoutRoot } from "@/components/layout/layout-root";

export default function Home() {
  return (
    <LayoutRoot>
      <HomeStart />
      <HomeFeature />
      <HomeFeaturedGame />
      <HomeReached />
      <HomeStory />
    </LayoutRoot>
  );
}
