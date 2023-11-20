import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CDU Document",
  description: "A Document",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Background", link: "/background/" },
          { text: "Clear Debt USD", link: "/clear-debt-usd/" },
        ],

        sidebar: [
          {
            text: "Clear Debt USD (CDU)",
            items: [
              { text: "Background", link: "/background/" },
              { text: "Clear Debt USD", link: "/clear-debt-usd/" },
              { text: "CDU Mechanism", link: "/mechanism/" },
              { text: "CDU Mint Process", link: "/mint-process/" },
              { text: "Pain Points of MEME", link: "/pain-meme/" },
              { text: "CDU Prospect Analysis", link: "/prospect-analysis/" },
              { text: "Roadmap", link: "/roadmap/" },
              {
                text: "Security Test Results",
                link: "/security-test-results/",
              },
            ],
          },
          {
            text: "Two",
            items: [{ text: "some text", link: "/why/" }],
          },
        ],

        socialLinks: [
          { icon: "twitter", link: "https://twitter.com/CDU_money" },
        ],
      },
    },
    cn: {
      label: "繁体中文",
      // lang: "cn", // optional, will be added  as `lang` attribute on `html` tag
      link: "/cn/background/", // default /fr/ -- shows on navbar translations menu, can be external

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "背景", link: "/cn/background/" },
          { text: "Clear Debt USD", link: "/cn/clear-debt-usd/" },
        ],

        sidebar: [
          {
            text: "Clear Debt USD (CDU)",
            items: [
              { text: "背景", link: "/cn/background/" },
              { text: "Clear Debt USD", link: "/cn/clear-debt-usd/" },
              { text: "CDU 机制", link: "/cn/mechanism/" },
              { text: "CDU 铸造过程", link: "/cn/mint-process/" },
              { text: "MEME 痛点", link: "/cn/pain-meme/" },
              { text: "CDU 前景分析", link: "/cn/prospect-analysis/" },
              { text: "路线图", link: "/cn/roadmap/" },
              {
                text: "安全报告",
                link: "/cn/security-test-results/",
              },
            ],
          },
          {
            text: "第二章",
            items: [{ text: "备用", link: "/no/" }],
          },
        ],

        socialLinks: [
          { icon: "twitter", link: "https://twitter.com/CDU_money" },
        ],
      },
    },
  },
});
