import { MetadataRoute } from "next";

const baseUrl = "https://tristanhourtoulle.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}/`,
    },
  ];
}
