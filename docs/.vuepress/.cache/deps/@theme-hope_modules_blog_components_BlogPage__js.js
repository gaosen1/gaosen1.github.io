import {
  ArticleList_default,
  InfoPanel_default
} from "./chunk-SC6OPPDK.js";
import "./chunk-MI5LLHVC.js";
import {
  CategoryList_default,
  TagList_default
} from "./chunk-SX46DV6N.js";
import "./chunk-D3W7TJL4.js";
import {
  useArticles,
  useBlogOptions,
  useCategoryMap,
  useEncryptedArticles,
  useSlides,
  useStars,
  useTagMap,
  useTimelines
} from "./chunk-GXCDEJBR.js";
import {
  DropTransition_default
} from "./chunk-64OA3ILV.js";
import {
  TOC_default
} from "./chunk-A2COW76L.js";
import "./chunk-ZJEZNDVQ.js";
import "./chunk-BDKPZIAK.js";
import {
  useThemeLocaleData
} from "./chunk-6XTULYFI.js";
import "./chunk-GPV43ANE.js";
import "./chunk-MOAPKBNV.js";
import {
  client_exports
} from "./chunk-ANKY43RT.js";
import {
  RouterLink,
  useRoute
} from "./chunk-3PS27LUP.js";
import "./chunk-5OCNPY23.js";
import {
  computed,
  defineComponent,
  h,
  resolveComponent
} from "./chunk-Q5ZHDAOU.js";
import "./chunk-5WH6ZM22.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/components/ArticleType.js
import "D:/CodingForFun/Vue/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/article-type.scss";
var ArticleType_default = defineComponent({
  name: "ArticleType",
  setup() {
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
    const articles = useArticles();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        { text: locale.slides, path: slides.value.path },
        { text: locale.encrypt, path: encryptedArticles.value.path }
      ];
    });
    return () => h("ul", { class: "article-type-wrapper" }, types.value.map((type) => h("li", {
      class: ["article-type", { active: type.path === route.path }]
    }, h(RouterLink, { to: type.path }, () => type.text))));
  }
});

// node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/components/TimelineItems.js
import "D:/CodingForFun/Vue/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/timeline-items.scss";
var TimelineItems_default = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h("div", { class: "timeline-wrapper" }, h("ul", { class: "timeline-content" }, [
      h(DropTransition_default, () => h("li", { class: "motto" }, hint.value)),
      h(TOC_default, { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index) => h(DropTransition_default, { appear: true, delay: 0.08 * (index + 1), type: "group" }, () => [
        h("h3", { key: "title", id: year, class: "timeline-year-title" }, h("span", year)),
        h("li", { key: "content", class: "timeline-year-list" }, [
          h("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h("li", { class: "timeline-item" }, [
            h("span", { class: "timeline-date" }, date),
            h(RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info.title)
          ])))
        ])
      ]))
    ]));
  }
});

// node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BlogPage.js
import "D:/CodingForFun/Vue/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.104/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/page.scss";
var BlogPage_default = defineComponent({
  name: "BlogPage",
  components: {
    ArticleType: ArticleType_default,
    CategoryList: CategoryList_default,
    TagList: TagList_default
  },
  setup() {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const route = useRoute();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const tagMap = useTagMap();
    const componentName = computed(() => {
      const { key } = frontmatter.value.blog || {};
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : key === "timeline" ? "" : "ArticleType";
    });
    const items = computed(() => {
      const { name = "", key = "" } = frontmatter.value.blog || {};
      return key === "encrypted" ? encryptedArticles.value.items : key === "star" ? stars.value.items : key === "slide" ? slides.value.items : key === "timeline" ? [] : key === "category" ? name ? categoryMap.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : articles.value.items;
    });
    return () => h("div", { class: "page blog" }, h("div", { class: "blog-page-wrapper" }, [
      h("main", { class: "blog-main", id: "main-content" }, [
        h(DropTransition_default, () => componentName.value ? h(resolveComponent(componentName.value)) : null),
        h(DropTransition_default, { appear: true, delay: 0.24 }, () => {
          var _a;
          return ((_a = frontmatter.value.blog) == null ? void 0 : _a.key) === "timeline" ? h(TimelineItems_default) : h(ArticleList_default, { key: route.path, items: items.value });
        })
      ]),
      h(DropTransition_default, { delay: 0.16 }, () => h(InfoPanel_default))
    ]));
  }
});

// dep:@theme-hope_modules_blog_components_BlogPage__js
var theme_hope_modules_blog_components_BlogPage_js_default = BlogPage_default;
export {
  theme_hope_modules_blog_components_BlogPage_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_blog_components_BlogPage__js.js.map
