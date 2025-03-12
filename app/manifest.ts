import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Build Sync",
    short_name: "BuildSync",
    description:
      "A collaborative chat platform for developers, designers, and product teams to connect, discuss, and build together seamlessly.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
