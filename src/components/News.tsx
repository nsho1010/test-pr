import Link from "next/link";
import { getNewsList } from '@/lib/microcms';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const News = async () => {
  const data= await getNewsList({
    limit: 3,
  })
  return (
    <section id="news">
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
        <Link href="/news">
          <div className="flex items-center justify-between  gap-4">
            <h2 className="text-3xl font-bold tracking-tighter underline decoration-primary decoration-1 underline-offset-8">お知らせ</h2>
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.contents.map((news, id) => (
            <Card key={id}>
              <Link href={`/news/${news.id}`}>
                <CardHeader>
                  <time className="text-sm text-muted-foreground" dateTime={news.publishedAt}>
                    {formatDate(news.publishedAt ?? news.createdAt)}
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
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

