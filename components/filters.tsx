'use client'

type Props = {
    tags: string[]
    active: string
    setActive: (tag: string) => void
}

export default function FilterBar({ tags, active, setActive }: Props) {
    return (
        <div className="flex flex-wrap gap-3 mb-8 ml-5">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setActive(tag)}
                    className={`px-4 py-1 border rounded-full text-sm font-figtree transition-all duration-200
                ${active === tag
                            ? "bg-violet-200 text-lime-700 border-violet-200"
                            : "hover:bg-indigo-300"}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    )
}