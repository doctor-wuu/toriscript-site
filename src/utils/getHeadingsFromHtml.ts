import { JSDOM } from 'jsdom'

export async function getHeadingsFromHtml(html: string) {
  const dom = new JSDOM(html)
  const document = dom.window.document

  const headings = Array.from(document.querySelectorAll('h2, h3, h4')).map((el) => {
    return {
      depth: parseInt(el.tagName.charAt(1) || '2'), // h2 → 2, h3 → 3
      text: el.textContent?.trim() || '',
      id: el.id || '',
    }
  })
  // console.log('🐣 extracted headings:', headings); // 👈 ← これを追記！
  return { headings }
}
