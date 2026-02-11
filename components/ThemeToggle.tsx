"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="size-10" />
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative size-9 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary transition-colors group overflow-hidden"
            aria-label="Toggle theme"
        >
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <div className="relative z-10">
                {theme === "dark" ? (
                    <Sun className="size-5 group-hover:text-primary-foreground transition-colors" />
                ) : (
                    <Moon className="size-5 group-hover:text-primary-foreground transition-colors" />
                )}
            </div>
        </button>
    )
}
