import { reportData } from "@/data/report";
import { Hero } from "@/components/layout/hero";
import { SidebarTOC } from "@/components/layout/sidebar-toc";
import { ChapterRenderer } from "@/components/ui/chapter-renderer";
import { ReferenceList } from "@/components/ui/reference-list";

export default function Home() {
    return (
        <main className="min-h-screen relative">
            {/* 1. Hero Section */}
            <Hero
                title="Sự Quan Phòng Của Thiên Chúa: Israel và Các Dân Tộc"
                subtitle="Thần Học Về Sự Tuyển Chọn Israel Và Sự Quan Phòng Phổ Quát Của Thiên Chúa"
            />

            <div className="flex flex-col lg:flex-row">
                {/* 2. Sidebar Table of Contents (Sticky) */}
                <SidebarTOC chapters={reportData.chapters} />

                {/* 3. Main Content Area */}
                <div className="flex-1 w-full px-4 md:px-8 lg:px-12 py-8 md:py-16">
                    <article className="max-w-3xl mx-auto">
                        {reportData.chapters.map((chapter) => (
                            <ChapterRenderer key={chapter.id} chapter={chapter} />
                        ))}
                    </article>

                    {/* 4. References */}
                    <ReferenceList references={reportData.references} />
                </div>
            </div>
        </main>
    );
}
