import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, usePage } from '@inertiajs/react';
import { ChevronsRight } from 'lucide-react';
import Layout from './Layout';

export default function ResourceDetail() {
  const { showData, relatedPosts } = usePage().props;

  return (
    <Layout>
      <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-20">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronsRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${showData?.category?.name?.toLowerCase()}`}>
                {showData?.category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {showData?.name && (
              <>
                <BreadcrumbSeparator>
                  <ChevronsRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" aria-current="page">
                    {showData.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Layout */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Content Area */}
          <article className="w-full lg:w-3/4">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {showData?.name}
            </h1>

            {showData?.images?.[0]?.image && (
              <img
                src={`/assets/images/items/${showData.images[0].image}`}
                alt={showData.name}
                className="mb-8 w-full h-auto rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            )}

            <section className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none ck-content">
              <div dangerouslySetInnerHTML={{ __html: showData?.long_description }} />
            </section>
          </article>

          {/* Related Posts Sidebar */}
          {relatedPosts?.length > 0 && (
            <aside className="sticky top-8 w-full lg:w-1/4">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-gray-200">
                {showData.category.name}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                {relatedPosts.map((item) => (
                  <Link
                    href={`/detail/${item.id}`}
                    key={item.id}
                    className="group block h-full transition-shadow hover:shadow-md hover:rounded-xl"
                  >
                    <div className="flex flex-col h-full gap-3 overflow-hidden rounded-xl bg-white shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:flex-row">
                      {/* Thumbnail */}
                      <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden bg-gray-100 lg:w-28 dark:bg-gray-700">
                        <img
                          src={`/assets/images/items/${item.images?.[0]?.image ?? 'placeholder.jpg'}`}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-2 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                          <span
                            className="rounded-full bg-white px-5 py-1.5 text-xs lg:text-[10px] font-semibold text-blue-600 shadow-sm transition-colors hover:bg-yellow-400 hover:text-white"
                            role="button"
                            tabIndex={-1}
                          >
                            Read Now
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex flex-col gap-2 p-4 lg:py-4 lg:px-0">
                        <h3 className="line-clamp-2 text-base font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="line-clamp-2 text-xs text-gray-700 dark:text-gray-300">
                          {item.short_description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </Layout>
  );
}
