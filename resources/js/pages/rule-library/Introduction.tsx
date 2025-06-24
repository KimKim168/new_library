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

export default function Introduction() {
  const { heroSection } = usePage().props;

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
              <BreadcrumbLink href={`/${heroSection?.category?.name?.toLowerCase()}`}>
                {heroSection?.category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {heroSection?.name && (
              <>
                <BreadcrumbSeparator>
                  <ChevronsRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" aria-current="page">
                    {heroSection.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Layout */}
        <div>
          {/* Content Area */}
          <article >
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {heroSection?.name}
            </h1>

            {heroSection?.images?.[0]?.image && (
              <img
                 src={`/assets/images/pages/${heroSection?.images?.[0]?.image}`}
                alt={heroSection.name}
                className="mb-8 w-full h-auto rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            )}

            <section className="prose dark:prose-invert max-w-full ck-content">
              <div dangerouslySetInnerHTML={{ __html: heroSection?.long_description }} />
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
}
