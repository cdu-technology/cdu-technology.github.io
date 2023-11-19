// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from "vue";
import { useData } from "vitepress";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      if (window) {
        document.cookie = `nf_lang=${lang.value}; path=/`;
      }
    });
  },
} satisfies Theme;
