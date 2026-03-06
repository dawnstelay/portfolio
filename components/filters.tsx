'use client'

type Props = {
    tags: string[]
    active: string
    setActive: (tag: string) => void
}

export default function FilterBar({ tags, active, setActive }: Props) {
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag) => (
                <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-1 border rounded-full text-sm font-figtree transition-all duration-200
                ${active === tag
                ? "bg-purple-500 text-white border-purple-500"
                : "hover:bg-purple-100"}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    )
}