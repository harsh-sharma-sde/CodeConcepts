type Props = {
  title: string
  problem: string
  solution: string
  role: string
  tech: string[]
}

export default function ProjectCard({
  title,
  problem,
  solution,
  role,
  tech,
}: Props) {
  return (
    <div className="rounded-xl border p-6 hover:shadow-md transition-shadow bg-white dark:bg-transparent">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-medium">Problem:</span> {problem}
        </p>
        <p>
          <span className="font-medium">Solution:</span> {solution}
        </p>
        <p>
          <span className="font-medium">Role:</span> {role}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
