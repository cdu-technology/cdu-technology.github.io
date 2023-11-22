import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CDU Document",
  description: "A Document",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    i18nRouting: true,
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      // link: "/",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          // { text: "Background", link: "/background/" },
          { text: "Clear Debt USD", link: "/clear-debt-usd/" },
        ],

        sidebar: [
          {
            text: "Clear Debt USD (CDU)",
            items: [
              { text: "Background", link: "/background/" },
              { text: "Clear Debt USD", link: "/clear-debt-usd/" },
              { text: "CDU Mechanism", link: "/mechanism/" },
              { text: "Appreciation Theory", link: "/appreciation-theory/" },
              { text: "Pain Points of MEME", link: "/pain-meme/" },
              { text: "CDU White Paper", link: "/white-paper/" },
              { text: "CDU Prospect Analysis", link: "/prospect-analysis/" },
              {
                text: "Security Test Results",
                link: "/security-test-results/",
              },
            ],
          },
        ],

        socialLinks: [
          { icon: "twitter", link: "https://twitter.com/CDU_money" },
        ],
      },
    },
    cn: {
      label: "繁体中文",
      lang: "cn", // optional, will be added  as `lang` attribute on `html` tag
      // link: "/cn/background/", // default /fr/ -- shows on navbar translations menu, can be external

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          // { text: "", link: "/cn/background/" },
          { text: "Clear Debt USD", link: "/cn/clear-debt-usd/" },
        ],

        sidebar: [
          {
            text: "Clear Debt USD (CDU)",
            items: [
              { text: "背景", link: "/cn/background/" },
              { text: "Clear Debt USD", link: "/cn/clear-debt-usd/" },
              { text: "CDU 機制", link: "/cn/mechanism/" },
              { text: "升值理論", link: "/cn/appreciation-theory/" },
              { text: "MEME 痛點", link: "/cn/pain-meme/" },
              { text: "CDU 前景分析", link: "/cn/prospect-analysis/" },
              { text: "CDU 白皮書", link: "/cn/white-paper/" },
              {
                text: "安全報告",
                link: "/cn/security-test-results/",
              },
            ],
          },
        ],

        socialLinks: [
          { icon: "twitter", link: "https://twitter.com/CDU_money" },
        ],
      },
    },
  },
});
