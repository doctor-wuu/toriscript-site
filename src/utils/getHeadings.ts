// /src/utils/getHeadings.ts
import { parse } from 'node-html-parser'

export async function getHeadingsFromHtml(content: any) {
  const html = content?.html || ''
  const root = parse(html)

  const headings = root.querySelectorAll('h2, h3, h4').map((el) => ({
    id: el.getAttribute('id') || '',
    text: el.text.trim(),
    level: el.tagName.toLowerCase(),
  }))

  return { headings }
}
