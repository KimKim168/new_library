import { MySearchTableData } from '@/components/my-search-table-data';
import { Head, usePage } from '@inertiajs/react';
import MyHeadingStyle1 from '../components/my-heading-style-1';
import { MyPaginationNew } from '../components/my-pagination-new';
import Layout from '../Layout';
import MyNoData from '@/components/my-no-data';
import useTranslation from '@/hooks/use-translation';

const Index = () => {
    const { tableData } = usePage().props;
    const { locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <Layout>
            <Head title={t('Research Papers')} />

            <div className="container mx-auto mt-5 mb-16 max-w-screen-2xl px-3 lg:px-20">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <MyHeadingStyle1 title={t('Research Papers')} />
                    <div className="mb-2 md:mb-0">
                        <MySearchTableData />
                    </div>
                </div>

                {tableData?.data?.length === 0 ? (
                    <div className="my-10">
                        <MyNoData />
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
                            {tableData?.data?.map((item) => (
                                <a
                                    href={item.link ?? `/detail/${item.id}`}
                                    key={item.id}
                                    className="overflow-hidden rounded-lg transition-all duration-300 hover:scale-95 hover:cursor-pointer"
                                >
                                    <img
                                        src={`/assets/images/items/${item?.images[0]?.image}`}
                                        alt={locale === 'kh' ? item.name_kh ?? item.name : item.name}
                                        width={200}
                                        height={300}
                                        className="aspect-[6/9] w-full rounded-lg border object-cover"
                                    />
                                    <h3 className={`text-foreground mt-2 line-clamp-3 text-base ${fontClass}`}>
                                        {locale === 'kh' ? item.name_kh ?? item.name : item.name}
                                    </h3>
                                </a>
                            ))}
                        </div>

                        <MyPaginationNew />
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Index;
