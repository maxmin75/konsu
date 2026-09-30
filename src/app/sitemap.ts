import type { MetadataRoute } from "next";
import { konsuPages, localPages } from "./konsu-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://konsu.it/" },
    ...konsuPages.map((page) => ({ url: `https://konsu.it/${page.slug}` })),
    ...localPages.map((page) => ({ url: `https://konsu.it/${page.slug}` })),
  ];
}
