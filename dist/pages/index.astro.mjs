/* empty css                                  */
import { c as createComponent, f as renderComponent, e as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_xKypHrCT.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_jZOFgtci.mjs';
import { $ as $$Layout } from '../chunks/Layout_CpBBRv8o.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "記事一覧" }, { "main": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-start max-w-[950px] mx-auto pl-2 pr-8"> <ul class="space-y-8"> ${articles.map((article) => {
    const thumb = `${"/toriscript-site/"}${article.data.introImage || "images/blank.jpg"}`;
    return renderTemplate`<li> <!-- ✅ ボーダーの幅を限定 --> <div class="border-b border-gray-200 pb-6 max-w-[700px]"> <a${addAttribute(`${"/toriscript-site/"}articles/${article.slug}`, "href")} class="flex items-start gap-[20px] hover:opacity-80 transition"> <!-- ✅ サムネイル --> <img${addAttribute(thumb, "src")}${addAttribute(`${article.data.title} のサムネイル`, "alt")} class="w-[220px] h-auto object-cover rounded-md flex-shrink-0" loading="lazy" decoding="async"> <!-- ✅ テキスト --> <div class="flex flex-col justify-start w-full max-w-[460px]"> <h2 class="text-xl font-bold text-[#6a6a6a] mb-4 break-jp break-words max-w-full overflow-hidden line-clamp-2 leading-snug"> ${article.data.title} </h2> ${article.data.intro && renderTemplate`<p class="text-sm text-[#888888] leading-snug line-clamp-3"> ${article.data.intro} </p>`} </div> </a> </div> </li>`;
  })} </ul> </div>`, "sidebar": async ($$result2) => renderTemplate`<div> <aside class="text-sm text-[#66544E] leading-relaxed space-y-4"> <div> <h2 class="text-base font-bold">カテゴリー</h2> <p class="text-xs text-gray-400">カテゴリ一覧から記事を探す</p> </div> <ul class="divide-y divide-gray-200 border-t border-b"> <li> <a${addAttribute(`${"/toriscript-site/"}category/screenwriting`, "href")} class="flex items-center justify-between py-2 hover:underline"> <span>脚本術・理論</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> <li> <a${addAttribute(`${"/toriscript-site/"}category/genre-guide`, "href")} class="flex items-center justify-between py-2 hover:underline"> <span>映画ジャンル別ガイド</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> <li> <a${addAttribute(`${"/toriscript-site/"}category/column`, "href")} class="flex items-center justify-between py-2 hover:underline"> <span>コラム</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#82A0AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </li> </ul> </aside> </div>` })}`;
}, "C:/Users/rei/Documents/tori/new tori/src/pages/index.astro", void 0);
const $$file = "C:/Users/rei/Documents/tori/new tori/src/pages/index.astro";
const $$url = "/toriscript-site";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
