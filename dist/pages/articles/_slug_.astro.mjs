/* empty css                                     */
import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate, f as renderComponent, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_xKypHrCT.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_jZOFgtci.mjs';
import { JSDOM } from 'jsdom';
import 'clsx';
import { c as categoryMap } from '../../chunks/categoryMap_CPiG5rlq.mjs';
import { t as tagMap } from '../../chunks/tagMap_BpbKxcov.mjs';
export { renderers } from '../../renderers.mjs';

async function getHeadingsFromHtml(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const headings = Array.from(document.querySelectorAll("h2, h3, h4")).map((el) => {
    return {
      depth: parseInt(el.tagName.charAt(1) || "2"),
      // h2 → 2, h3 → 3
      text: el.textContent?.trim() || "",
      id: el.id || ""
    };
  });
  return { headings };
}

const $$Astro$1 = createAstro();
const $$ArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { title, headings } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet"${addAttribute(`${"/toriscript-site/"}src/styles/global.css`, "href")}>${renderHead()}</head> <body class="article-page font-sans text-[#4a4a4a] bg-white"> <!-- ✅ ヘッダー --> <header class="py-4 flex flex-col items-center"> <a href="/" class="block"> <img${addAttribute(`${"/toriscript-site/"}/images/tori-logo2.png`, "src")} alt="Tori Script ロゴ" class="h-[69px] mx-auto"> </a> </header> <!-- ✅ ロゴ下のライン（パンくずとは分離） --> <div class="w-full border-t border-gray-200"></div> <!-- ✅ パンくずリスト：中央揃え --> <!-- ✅ パンくずリスト：中央揃え --> <div class="w-full py-1"> <div class="max-w-7xl mx-auto flex px-4"> <!-- 左の空き --> <aside class="hidden lg:block w-[6rem] 0"></aside> <!-- パンくず本体 --> <div class="flex-1 flex justify-center"> <div class="w-full max-w-[48rem]"> ${renderSlot($$result, $$slots["breadcrumbs"])} </div> </div> <!-- 右の空き --> <aside class="hidden lg:block w-[20rem] "></aside> </div> </div> <!-- ✅ タイトルバー：本文と同じ位置に中央揃え --> <!-- ✅ タイトルバー：灰色の帯だけにする --> <div class="w-full bg-[#f5f5f5] min-h-[281px] flex flex-col justify-center"> ${renderSlot($$result, $$slots["titleBlock"])} </div> <!-- ✅ 3カラムレイアウト：本文と右カラム --> <main class="max-w-7xl mx-auto flex px-4 py-8 gap-8"> <!-- ⬅️ 左の見えないプレースホルダ --> <aside class="hidden lg:block w-[6rem] "></aside> <!-- 🎯 中央の本文エリア --> <div class="flex-1 max-w-[48rem]"> ${renderSlot($$result, $$slots["intro"])} ${renderSlot($$result, $$slots["toc"])} ${renderSlot($$result, $$slots["default"])} </div> <!-- ➡️ 右カラム --> <aside class="hidden lg:block w-[20rem] "> ${renderSlot($$result, $$slots["sidebar"])} </aside> </main> </body></html>`;
}, "C:/Users/rei/Documents/tori/new tori/src/layouts/ArticleLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("articles");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("articles", slug);
  const content = post ? await post.render() : null;
  const html = content?.html ?? post?.rendered?.html ?? "";
  const { headings } = await getHeadingsFromHtml(html);
  const authorMap = {
    1: "\u9CE5\u7FBD\u624D\u4E00",
    2: "\u5C71\u7530\u811A\u672C\u90CE",
    3: "\u30B7\u30CA\u30EA\u30AA\u82B1\u5B50"
  };
  const categoryId = post?.data.category;
  const categoryData = categoryMap[categoryId];
  const categorySlug = categoryData?.slug;
  const categoryLabel = categoryData?.label;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": post?.data.title, "headings": headings }, { "breadcrumbs": async ($$result2) => renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center text-sm text-gray-500 "> <a href="/" class="hover:underline flex items-center gap-1"><span>Home</span></a> <span class="mx-1">＞</span> ${categoryLabel && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`/category/${categorySlug}`, "href")} class="hover:underline"> ${categoryLabel} </a> <span class="mx-1">＞</span> ` })}`} <span class="text-[#4a4a4a] inline-block max-w-[15em] overflow-hidden text-ellipsis whitespace-nowrap align-middle"${addAttribute(post?.data.title, "title")}> ${post?.data.title} </span> </div> </div>`, "default": async ($$result2) => renderTemplate`          <div class="prose prose-h2:border-t prose-h2:border-b prose-h2:border-[#828282] prose-h2:pt-2 prose-h2:pb-2 mx-auto max-w-[48rem] mt-8"> ${unescapeHTML(html)} </div>   `, "header": async ($$result2) => renderTemplate`<div> <!-- 上段：カテゴリ・日付（左）＋著者（右） --> <div class="flex justify-between items-start mb-4 text-sm text-gray-500"> <div class="flex items-center gap-4"> ${categoryLabel && renderTemplate`<span class="bg-[#8C82AA] text-white text-xs font-semibold px-2 py-1 rounded"> ${categoryLabel} </span>`} <span>${post?.data.date.toLocaleDateString("ja-JP")}</span> </div> <span class="text-xs mt-1">Written by ${authorMap[post?.data.author] ?? "Unknown"}</span> </div> <!-- 下段：タイトル --> <h1 class="text-[2.25rem] font-bold leading-[1.3] text-[#A1A1A1] mb-0 border-none break-jp text-left"> ${post?.data.title} </h1> </div>`, "intro": async ($$result2) => renderTemplate`<div class="prose mx-auto article-page max-w-[48rem]"> ${post?.data.introImage && renderTemplate`<img${addAttribute(post.data.introImage, "src")}${addAttribute(`${post.data.title} \u306E\u30B5\u30E0\u30CD\u30A4\u30EB`, "alt")} width="1280" height="960" class="mx-auto mb-6 rounded shadow" loading="lazy" decoding="async">`} ${post?.data.intro && renderTemplate`<p class="text-[#808080]">${post.data.intro}</p>`} </div>`, "sidebar": async ($$result2) => renderTemplate`<div> <aside class="text-sm text-[#66544E] leading-relaxed space-y-4"> <!-- 見出し --> <div> <h2 class="text-base font-bold">カテゴリー</h2> <p class="text-xs text-gray-400">カテゴリ一覧から記事を探す</p> </div> <!-- リスト --> <ul class="divide-y divide-gray-200 border-t border-b"> <li> <a href="/category/screenwriting" class="flex items-center justify-between py-2 hover:underline"> <span>脚本術・理論</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> <li> <a href="/category/genre-guide" class="flex items-center justify-between py-2 hover:underline"> <span>映画ジャンル別ガイド</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> <li> <a href="/category/column" class="flex items-center justify-between py-2 hover:underline"> <span>コラム</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> </ul> </aside> <!-- ✅ タグセクション（新規） --> ${post?.data.tags && post.data.tags.length > 0 && renderTemplate`<aside class="text-sm text-[#66544E] leading-relaxed mt-8"> <div> <h2 class="text-base font-bold"></h2> </div> <ul class="flex flex-wrap gap-2 mt-3"> ${post.data.tags.map((tag) => renderTemplate`<li> <a${addAttribute(`/tag/${tag}`, "href")} class="text-xs text-[#82A0AA] border border-[#82A0AA] px-2 py-1 rounded hover:bg-[#f5f5f5] transition"> ${tagMap[tag] ?? tag} </a> </li>`)} </ul> </aside>`} </div>`, "toc": async ($$result2) => renderTemplate`<div> ${headings.length > 0 && renderTemplate`<section class="toc mb-6 mx-auto max-w-[42rem] text-left"> <h2 class="text-lg font-semibold text-[#66544E] mb-2">Contents</h2> <ul> ${headings.filter((h) => h.depth <= 3).map((h) => renderTemplate`<li${addAttribute(`depth-${h.depth}`, "class")}> <a${addAttribute(`#${h.id}`, "href")}>${h.text}</a> </li>`)} </ul> </section>`} </div>` })}`;
}, "C:/Users/rei/Documents/tori/new tori/src/pages/articles/[slug].astro", void 0);

const $$file = "C:/Users/rei/Documents/tori/new tori/src/pages/articles/[slug].astro";
const $$url = "/toriscript-site/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
