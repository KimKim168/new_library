import MyNoData from '@/components/my-no-data';
import { usePage } from '@inertiajs/react';

const MyItemTableData = () => {
  const { tableData } = usePage().props;

   if (!tableData?.data || tableData?.data?.length === 0) {
  return (
    <MyNoData/>
  );
}

  return (
    <section className="mx-auto max-w-screen-2xl px-4 pb-14 lg:px-20">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tableData?.data?.map((item) => (
          <a
            key={item.id}
            href={item?.link ?? `/detail/${item.id}`}
            className="group relative flex flex-col overflow-hidden rounded-xl  bg-white shadow transition duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            aria-label={`Read more about ${item.name}`}
          >
            {/* Image section */}
            <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
              <img
                src={`/assets/images/items/thumb/${item.images?.[0]?.image ?? 'placeholder.jpg'}`}
                alt={item.title ?? item.name}
               className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay button */}
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                <span
                  className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm transition-colors hover:bg-yellow-400 hover:text-white"
                  role="button"
                  tabIndex={-1}
                >
                  Read Now
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 px-4 py-4">
              <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="line-clamp-2 text-sm text-gray-700 dark:text-gray-300">
                {item.short_description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyItemTableData;
