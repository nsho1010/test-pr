import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import Pagination from "@/components/ui/pagination";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import config from "@/config";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
    title: "お知らせ | " + config.appName,
    description: config.appName + "のお知らせ一覧ページです。",
    openGraph: {
        title: "お知らせ | " + config.appName,
        description: config.appName + "のお知らせ一覧ページです。",
    },
});

const NewsListPage = async ({
    searchParams,
}: {
    searchParams: { page: number; pageSize: number };
}) => {
    const page = Number(searchParams.page) || 1;
    const pageSize = Number(searchParams.pageSize) || 6;
    const offset = (page - 1) * pageSize;
    const data = await getNewsList({ offset, limit: pageSize });
    const totalPages = Math.ceil(data.totalCount / pageSize);
    return (
        <main className="flex flex-col max-w-3xl mx-auto gap-4 lg:gap-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>お知らせ</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold tracking-tight underline decoration-primary decoration-1 underline-offset-8">
                お知らせ
            </h1>
            <section className="w-full">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.contents.map((news) => (
                        <Link key={news.id} href={`/news/${news.id}`}>
                            <Card key={news.id}>
                                <CardHeader>
                                    <time
                                        className="text-sm text-muted-foreground"
                                        dateTime={
                                            news.publishedAt || news.createdAt
                                        }
                                    >
                                        {formatDate(
                                            news.publishedAt || news.createdAt
                                        )}
                                    </time>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="mb-2 text-xl font-semibold leading-snug group-hover:underline">
                                        {news.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {news.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    );
};

export default NewsListPage;
