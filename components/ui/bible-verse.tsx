import { cn } from "@/lib/utils";

interface BibleVerseProps {
    text: string;
    source?: string;
    className?: string;
}

export function BibleVerse({ text, source, className }: BibleVerseProps) {
    return (
        <blockquote className={cn("my-8 pl-6 border-l-4 border-gold italic text-lg text-ink/90 font-serif leading-relaxed", className)}>
            <p className="mb-2">"{text}"</p>
            {source && (
                <cite className="block text-sm font-sans text-burgundy font-semibold not-italic text-right mt-2">
                    — {source}
                </cite>
            )}
        </blockquote>
    );
}
