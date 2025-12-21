import type { Footer } from "@src-types/types.ts";

/**
 * array of footer links.
 * matched to user architecture: Now / Recommendations / Elsewhere.
 * removed kusa projects as requested.
 */

const footersettings: Footer[] = [
  {
    text: "Now",
    dropdown: [
      {
        text: "Current Focus",
        link: "/now/",
      },
      {
        text: "In Progress",
        link: "/projects/in-progress/",
      },
      {
        text: "Next",
        link: "/projects/next/",
      },
    ],
  },
  {
    text: "Recommendations",
    dropdown: [
      {
        text: "Books",
        link: "/recommendations/books/",
      },
      {
        text: "Tools",
        link: "/recommendations/tools/",
      },
      {
        text: "Media",
        link: "/recommendations/media/",
      },
    ],
  },
  {
    text: "Elsewhere",
    dropdown: [
      {
        text: "Projects",
        link: "/projects/",
      },
      {
        text: "GitHub",
        link: "https://github.com/",
        new_tab: true,
      },
      {
        text: "Links",
        link: "/links/",
      },
    ],
  },
];

export default footersettings;