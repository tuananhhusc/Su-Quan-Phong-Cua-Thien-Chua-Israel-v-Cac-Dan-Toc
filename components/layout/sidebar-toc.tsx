"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Chapter } from "@/data/report";
import { Menu, X } from "lucide-react";

interface SidebarTOCProps {
    chapters: Chapter[];
}

export function SidebarTOC({ chapters }: SidebarTOCProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    // Handle intersection observer to highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -50% 0px" } // Adjust trigger zone
        );

        chapters.forEach((chapter) => {
            observer.observe(document.getElementById(chapter.id) as HTMLElement);
            chapter.sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) observer.observe(el);
            });
        });

        return () => observer.disconnect();
    }, [chapters]);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-3 bg-burgundy text-parchment rounded-full shadow-lg lg:hidden"
                aria-label="Toggle Table of Contents"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-72 bg-parchment border-r border-gold/20 overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <nav className="p-8">
                    <h2 className="font-heading text-lg text-burgundy mb-6 tracking-widest border-b border-burgundy/10 pb-2">
                        Mục Lục
                    </h2>
                    <ul className="space-y-4 font-serif text-sm">
                        {chapters.map((chapter) => (
                            <li key={chapter.id}>
                                <a
                                    href={`#${chapter.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block transition-colors duration-200 font-bold mb-2",
                                        activeId === chapter.id || chapter.sections.some(s => s.id === activeId)
                                            ? "text-burgundy"
                                            : "text-ink/60 hover:text-burgundy"
                                    )}
                                >
                                    {chapter.title}
                                </a>

                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
