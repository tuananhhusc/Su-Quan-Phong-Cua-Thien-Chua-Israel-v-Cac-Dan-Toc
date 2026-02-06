import { Reference } from "@/data/report";

export function ReferenceList({ references }: { references: Reference[] }) {
    return (
        <footer id="references" className="bg-ink/5 border-t border-gold/30 py-16 px-4 md:px-12 mt-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl text-burgundy mb-12 text-center decoration-gold/30 decoration-1 underline-offset-8">
                    Tài Liệu Tham Khảo
                </h2>

                <div className="space-y-6 font-serif">
                    {references.map((ref) => (
                        <div key={ref.id} id={`ref-${ref.id}`} className="flex gap-4 group">
                            <span className="flex-shrink-0 w-8 text-right font-sans text-xs text-gold font-bold pt-1 select-none">
                                [{ref.id}]
                            </span>
                            <div className="text-ink break-words pl-4 -indent-4 md:pl-8 md:-indent-8">
                                <p className="leading-relaxed">
                                    {ref.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center border-t border-gold/10 pt-8">
                    <p className="font-heading text-sm text-ink/60 uppercase tracking-widest">
                        2026 Sự Quan Phòng Của Thiên Chúa: Israel và Các Dân Tộc
                    </p>
                </div>
            </div>
        </footer>
    );
}
