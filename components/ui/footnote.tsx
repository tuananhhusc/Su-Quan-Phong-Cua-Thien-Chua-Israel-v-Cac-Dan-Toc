import Link from 'next/link';

interface FootnoteProps {
    id: number | string;
}

export function Footnote({ id }: FootnoteProps) {
    return (
        <sup className="ml-0.5 inline-block align-top text-xs font-bold text-burgundy hover:text-gold transition-colors cursor-pointer select-none">
            <Link href={`#ref-${id}`} className="no-underline">
                [{id}]
            </Link>
        </sup>
    );
}
