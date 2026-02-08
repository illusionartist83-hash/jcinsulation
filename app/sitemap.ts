import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.jcinsulation.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.jcinsulation.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.jcinsulation.in/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.jcinsulation.in/contact",
      lastModified: new Date(),
    },
  ];
}
