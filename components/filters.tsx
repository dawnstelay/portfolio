'use client'

type Props = {
    tags: string[]
    active: string
    setActive: (tag: string) => void
}

export default function FilterBar({ tags, active, setActive }: Props) {
    return (
        <div className="flex flex-wrap gap-3 mb-8 ml-5 text-center justify-center">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setActive(tag)}
                    className={`px-4 py-1 border rounded-full font-space text-sm transition-all duration-200
                ${active === tag
                            ? "bg-(--cornell) text-(--ivory) border-dashed"
                            : "hover:bg-(--sky)"}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    )
}