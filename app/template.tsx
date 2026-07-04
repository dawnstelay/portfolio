'use client'

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Template({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut",}}
        >
            {children}
        </motion.div>
    )
}




