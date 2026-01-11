import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

export default function ChapterCard(post: PostMeta) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div
        className="h-full rounded-xl border dark:border-gray-800
        bg-white dark:bg-gray-900
        p-5 transition
        hover:-translate-y-1 hover:shadow-lg"
      >
        <span className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {post.chapter}
        </span>

        <h2 className="mt-2 text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
      </div>
    </Link>
  )
}
