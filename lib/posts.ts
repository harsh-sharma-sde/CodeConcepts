import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  chapter: string
  title: string
  description: string
  order: number
}

const CONTENT_PATH = path.join(process.cwd(), 'content')

function isDirectory(source: string) {
  return fs.lstatSync(source).isDirectory()
}

export function getAllPosts(): PostMeta[] {
  const chapters = fs
    .readdirSync(CONTENT_PATH)
    .map((name) => path.join(CONTENT_PATH, name))
    .filter(isDirectory)

  return chapters.flatMap((chapterPath) => {
    const chapter = path.basename(chapterPath)

    const files = fs
      .readdirSync(chapterPath)
      .filter((file) => file.endsWith('.mdx'))

    return files.map((file) => {
      const slug = file.replace('.mdx', '')
      const source = fs.readFileSync(
        path.join(chapterPath, file),
        'utf8'
      )

      const { data } = matter(source)

      return {
        slug,
        chapter,
        title: data.title,
        description: data.description,
        order: data.order,
      }
    })
  })
}

export function getPostBySlug(slug: string) {
  const chapters = fs
    .readdirSync(CONTENT_PATH)
    .map((name) => path.join(CONTENT_PATH, name))
    .filter(isDirectory)

  for (const chapterPath of chapters) {
    const filePath = path.join(chapterPath, `${slug}.mdx`)

    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf8')
      return {
        source,
        chapter: path.basename(chapterPath),
      }
    }
  }

  throw new Error(`Post not found: ${slug}`)
}
