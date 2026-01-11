import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-2">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go Home
      </Link>
    </div>
  )
}
