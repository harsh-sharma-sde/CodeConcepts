import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Learn Code,
          <span className="block text-blue-600 dark:text-blue-400">
            Chapter by Chapter
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Clear explanations of JavaScript, React, and Next.js concepts
          with real-world examples and clean code.
        </p>

        <div className="flex gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-black text-white dark:bg-white dark:text-black
              px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
          >
            Start Reading →
          </Link>
        </div>
      </div>
    </section>
  )
}
