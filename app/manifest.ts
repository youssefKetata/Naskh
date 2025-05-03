import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نسخ ناب - مولد النص العربي",
    short_name: "نسخ ناب",
    description: "أداة مجانية لتوليد نص عربي للتصميم والنماذج",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF6E3",
    theme_color: "#B45309",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    orientation: "portrait",
    lang: "ar",
    dir: "rtl",
    categories: ["utilities", "productivity", "design"],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        label: "نسخ ناب على سطح المكتب",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "720x1280",
        type: "image/png",
        label: "نسخ ناب على الجوال",
      },
    ],
  }
}
