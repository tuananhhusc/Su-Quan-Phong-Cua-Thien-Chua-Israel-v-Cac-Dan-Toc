import { Chapter, ContentBlock, Section } from "@/data/report";
import { BibleVerse } from "./bible-verse";
import { Footnote } from "./footnote";
import { cn } from "@/lib/utils";

// Regex to capture [1], [2], etc.
const FOOTNOTE_REGEX = /\[(\d+)\]/g;

// Helper to parse text with footnotes
function TextWithFootnotes({ text }: { text: string }) {
    const parts = text.split(FOOTNOTE_REGEX);

    if (parts.length === 1) return <>{text}</>;

    return (
        <>
            {parts.map((part, index) => {
                // Even indices are text, odd are footnote IDs
                if (index % 2 === 0) {
                    return <span key={index}>{part}</span>;
                } else {
                    return <Footnote key={index} id={part} />;
                }
            })}
        </>
    );
}

function SectionRenderer({ section }: { section: Section }) {
    return (
        <div id={section.id} className="mb-8 md:mb-12 scroll-mt-24 md:scroll-mt-32">
            {section.title && (
                <h3 className="font-heading text-xl md:text-2xl text-burgundy mb-3 md:mb-4 mt-6 md:mt-8">
                    {section.title}
                </h3>
            )}

            <div className="space-y-4 md:space-y-6">
                {section.content.map((block, idx) => {
                    switch (block.type) {
                        case 'paragraph':
                            return (
                                <p key={idx} className="font-serif text-base md:text-lg leading-loose text-ink/90 text-justify hyphens-auto">
                                    <TextWithFootnotes text={block.text} />
                                </p>
                            );
                        case 'quote':
                            return (
                                <BibleVerse key={idx} text={block.text} source={block.source} />
                            );
                        case 'list':
                            return (
                                <ul key={idx} className="list-disc pl-5 md:pl-6 space-y-2 font-serif text-base md:text-lg text-ink/90 marker:text-gold">
                                    {block.items.map((item, i) => (
                                        <li key={i}>
                                            <TextWithFootnotes text={item} />
                                        </li>
                                    ))}
                                </ul>
                            );
                        case 'table':
                            return (
                                <div key={idx} className="my-8 overflow-x-auto rounded-lg border border-gold/30 shadow-sm">
                                    <table className="w-full text-left text-sm font-sans">
                                        <thead className="bg-parchment/50 border-b border-gold/30">
                                            <tr>
                                                {block.headers.map((h, i) => (
                                                    <th key={i} className="p-4 font-bold text-burgundy uppercase tracking-wider">
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gold/10 bg-white/40">
                                            {block.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="hover:bg-gold/5 transition-colors">
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="p-4 align-top text-ink">
                                                            <TextWithFootnotes text={cell} />
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}

export function ChapterRenderer({ chapter }: { chapter: Chapter }) {
    return (
        <section id={chapter.id} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24 border-b border-gold/20 pb-12 md:pb-16 last:border-0">
            <h2 className="font-heading text-2xl md:text-4xl text-burgundy mb-6 md:mb-8 text-center decoration-gold/30 decoration-1 underline-offset-8">
                {chapter.title}
            </h2>

            {chapter.intro && (
                <div className="font-serif text-lg md:text-xl leading-relaxed text-ink italic opacity-90 mb-8 md:mb-10 border-b border-gold/10 pb-6 md:pb-8 px-2 md:px-12 text-center text-balance">
                    <TextWithFootnotes text={chapter.intro} />
                </div>
            )}

            {chapter.sections.map((section) => (
                <SectionRenderer key={section.id} section={section} />
            ))}
        </section>
    );
}
