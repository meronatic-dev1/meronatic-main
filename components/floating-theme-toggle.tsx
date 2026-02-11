"use client"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function FloatingThemeToggle() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
            <AnimatedThemeToggler />
        </div>
    )
}
