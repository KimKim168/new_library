import MyNoData from '@/components/my-no-data'; 
import { MySearchTableData } from '@/components/my-search-table-data';
import { Head, Link, usePage } from '@inertiajs/react';
import { MyPaginationNew } from '../components/my-pagination-new';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Layout from '../Layout';

const Index = () => {
    const { tableData } = usePage().props;

    return (
        <Layout>
            <Head title="News" />
            <div className="container mx-auto mt-5 mb-16 max-w-screen-2xl px-3 lg:px-20">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <h2 className="text-foreground my-5 animate-bounce text-center text-2xl font-semibold tracking-wide after:mx-auto after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-20 md:text-2xl lg:text-3xl">
                        News
                    </h2>
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
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                            {tableData?.data?.map((item) => (
                                <Link href={`/news/${item.id}`} key={item.id} className="flex justify-center">
                                    <CardContainer className="inter-var h-full w-full">
                                        <CardBody className="group/card relative flex h-full w-full flex-col justify-between rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                                            <div>
                                                <CardItem
                                                    translateZ="50"
                                                    className="line-clamp-2 text-[16px] font-bold text-black sm:text-[18px] md:text-[20px] dark:text-white"
                                                >
                                                    {item.title}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="line-clamp-2 text-[14px] text-neutral-600 dark:text-neutral-300"
                                                >
                                                    {item.short_description}
                                                </CardItem>
                                            </div>
                                            <CardItem translateZ="100" className="mt-2 aspect-[16/9] w-full">
                                                <img
                                                    src={`/assets/images/posts/${item?.images[0].image}`}
                                                    height={350}
                                                    width={350}
                                                    className="aspect-[16/9] w-full rounded-xl object-cover group-hover/card:shadow-xl"
                                                    alt="image"
                                                />
                                                <div className="flex items-center justify-end">
                                                    <CardItem
                                                        translateZ={20}
                                                        as="button"
                                                        className="rounded-xl px-4 py-2 text-[14px] font-bold text-blue-500 hover:underline hover:underline-offset-4"
                                                    >
                                                        <a href={`/news/${item.id}`}>Read More</a>
                                                    </CardItem>
                                                </div>
                                            </CardItem>
                                        </CardBody>
                                    </CardContainer>
                                </Link>
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
