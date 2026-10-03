export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Clone Builders Wiki",
  shortName: "Clone Builders",
  logoText: "CB",
  tagline: "Building Guides, Clone Mechanics & Sandbox Tips",
  description: "Your ultimate guide to Clone Builders on Roblox! Explore clone building mechanics, construction tips, build ideas, controls, updates, and community information for creating better structures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://clonebuilders-wiki.top",
  supportEmail: "support@clonebuilders-wiki.top",
  gameUrl: "https://www.roblox.com/games/98456203230140/CLONE-BUILDERS",
  heroVideoId: "16mBB-KKPWA", // How to Play Clone Builders Roblox Full Guide (gameplay tutorial)
  social: {
    discord: "#",
    youtube: "#",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
