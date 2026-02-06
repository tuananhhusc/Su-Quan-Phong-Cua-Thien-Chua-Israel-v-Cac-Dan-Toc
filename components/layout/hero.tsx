import { cn } from "@/lib/utils";

interface HeroProps {
    title: string;
    subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
    return (
        <div className="relative w-full min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center py-12 md:py-20 px-4 text-center overflow-hidden bg-parchment">
            {/* Background Texture Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    filter: "contrast(120%) brightness(100%)"
                }}
            />

            {/* Decorative Elements */}
            <div className="w-16 md:w-24 h-1 bg-burgundy mb-6 md:mb-8 mx-auto shadow-sm" aria-hidden="true" />

            <h1 className="relative z-10 max-w-5xl mx-auto font-heading text-3xl md:text-6xl lg:text-7xl text-burgundy mb-4 md:mb-8 leading-tight tracking-wide uppercase drop-shadow-md">
                {title}
            </h1>

            <p className="relative z-10 max-w-3xl mx-auto font-serif text-lg md:text-3xl text-ink font-semibold italic drop-shadow-sm leading-relaxed px-2">
                {subtitle}
            </p>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </div>
    );
}
