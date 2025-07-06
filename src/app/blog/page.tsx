import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());
  const [latest, ...rest] = sortedPosts;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="flex flex-col items-center justify-center mb-8">
          <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-800 dark:text-neutral-100 text-center mb-2">
            Blog
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 text-center font-normal mb-2">
            Sharing thoughts on software, medicine, and building things in Africa. Dive into stories, lessons, and inspiration from my journey.
          </p>
        </header>
      </BlurFade>
      {latest ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Link href={`/blog/${latest.slug}`} className="block group mb-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center rounded-xl border bg-white dark:bg-neutral-900/60 shadow-md hover:shadow-lg transition-all overflow-hidden p-3 sm:p-4">
              {latest.metadata.image ? (
                <div className="w-full sm:w-48 h-32 sm:h-56 relative flex-shrink-0">
                  <Image src={latest.metadata.image} alt={latest.metadata.title} fill className="object-cover w-full h-full" />
                </div>
              ) : (
                <div className="w-full sm:w-48 h-32 sm:h-56 bg-muted flex items-center justify-center text-3xl sm:text-4xl text-muted-foreground font-bold">📝</div>
              )}
              <div className="flex-1 flex flex-col gap-2 p-0 sm:p-2">
                <h2 className="text-lg sm:text-2xl font-bold group-hover:underline mb-1 leading-tight">{latest.metadata.title}</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 line-clamp-2">{latest.metadata.summary}</p>
                <div className="flex flex-wrap gap-2 items-center mt-1">
                  <span className="text-xs text-neutral-500">{latest.metadata.publishedAt}</span>
                  {latest.metadata.tags && Array.isArray(latest.metadata.tags) && latest.metadata.tags.map((tag: string) => (
                    <Badge key={tag} className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 text-xs font-medium">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>
      ) : null}
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
          {rest.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group rounded-xl border bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-all overflow-hidden p-3 sm:p-4">
                {post.metadata.image ? (
                  <div className="w-full h-32 sm:h-40 relative">
                    <Image src={post.metadata.image} alt={post.metadata.title} fill className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="w-full h-32 sm:h-40 bg-muted flex items-center justify-center text-2xl sm:text-3xl text-muted-foreground font-bold">📝</div>
                )}
                <div className="flex flex-col gap-1 p-0 sm:p-2">
                  <h3 className="text-base sm:text-lg font-semibold group-hover:underline mb-1 leading-tight">{post.metadata.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 line-clamp-2">{post.metadata.summary}</p>
                  <div className="flex flex-wrap gap-2 items-center mt-1">
                    <span className="text-xs text-neutral-500">{post.metadata.publishedAt}</span>
                    {post.metadata.tags && Array.isArray(post.metadata.tags) && post.metadata.tags.map((tag: string) => (
                      <Badge key={tag} className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 text-xs font-medium">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      ) : latest ? null : (
        <div className="text-center text-muted-foreground mt-12">No blog posts yet. Check back soon!</div>
      )}
    </section>
  );
}
