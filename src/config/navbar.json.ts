import type { navbar } from "@src-types/types.ts";

/**
 * array of navigation links and dropdowns.
 * updated to match user's custom architecture.
 */

const navbarsettings: navbar[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Topics",
    dropdown: [
      { text: "Learning", link: "/topics/learning/" },
      { text: "Perspectives", link: "/topics/perspectives/" },
      { text: "Digital", link: "/topics/digital/" },
      { text: "Leisure", link: "/topics/leisure/" },
      { text: "Reflections", link: "/topics/reflections/" },
    ],
  },
  {
    text: "Archive",
    dropdown: [
      { text: "By Year", link: "/archive/year/" },
      { text: "By Tag", link: "/tags/" },
      { text: "By Author", link: "/authors/" },
      { text: "By Series", link: "/archive/series/" },
      { text: "All Posts", link: "/archive/" },
    ],
  },
  {
    text: "About",
    link: "/about/",
  },
  {
    text: "Site",
    dropdown: [
      { text: "Subscribe", link: "/subscribe/" },
      { text: "Account", link: "/account/" },
      { text: "Membership", link: "/membership/" },
      { text: "Contact", link: "/contact/" },
      { text: "RSS Feed", link: "/rss.xml" },
      { text: "FAQ", link: "/faq/" },
    ],
  },
];

export default navbarsettings;