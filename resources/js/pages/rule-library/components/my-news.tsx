import { Link, usePage } from '@inertiajs/react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

// const newsItems = [
//     {
//         id: 1,
//         name: 'Becoming good at reading',
//         short_decription: 'Tips and strategies to improve your reading skills effectively.',
//         image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=350&q=80',
//     },
//     {
//         id: 2,
//         name: 'Cambodia Book Fair',
//         short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
//         image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=350&q=80',
//     },
//     {
//         id: 3,
//         name: 'Cambodia to Make E-Invoicing Mandatory Next Year',
//         short_decription: 'Important updates on new e-invoicing regulations coming soon.',
//         image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=350&q=80',
//     },
// ];

const MyNews = () => {
    const { newPost } = usePage().props;
    // console.log(newPost);
    return (
        <div className="container mx-auto my-16 max-w-screen-2xl px-3 lg:px-20">
            <h2 className="text-foreground my-5 animate-bounce text-center text-xl font-semibold tracking-wide after:mx-auto after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-20 md:text-2xl lg:text-3xl">
                News
            </h2>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {newPost?.map((item) => (
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
                                    <CardItem as="p" translateZ="60" className="line-clamp-2 text-[14px] text-neutral-600 dark:text-neutral-300">
                                        {item.short_description}
                                    </CardItem>
                                </div>
                                <CardItem translateZ="100" className="mt-2 aspect-[16/9] w-full">
                                    <img
                                        src={`/assets/images/posts/${item?.images[0].image}`}
                                        height={350}
                                        width={350}
                                        className="aspect-[16/9] w-full rounded-xl object-cover group-hover/card:shadow-xl"
                                        alt={`image`}
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
            {newPost?.length >= 6 && (
                // <Link
                //     href="/news"
                //     className="group relative mx-auto mt-10 mb-5 flex w-max items-center gap-2 rounded-full border border-red-500 bg-red-500 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-red-500 dark:border-red-400 dark:bg-red-500 dark:hover:bg-transparent dark:hover:text-red-400"
                // >
                //     See More
                //     <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                // </Link>
                <Link
                    href="/news"
                    className="group relative bottom-0 z-10 mx-auto mt-10 flex w-max cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-red-500 bg-red-500 px-4 py-2 font-black text-[#FFF] duration-700 ease-in-out hover:bg-[#FFF] hover:text-red-500 focus:bg-[#FFF] focus:text-red-500 active:scale-95 active:duration-0"
                >
                    <span className="absolute top-0 left-0 -z-10 h-full w-0 rounded-xl bg-[#FFF] transition-all duration-700 group-hover:w-full"></span>
                    <span className="z-10 truncate duration-300 ease-in-out group-focus:translate-x-96 group-active:-translate-x-96">See More</span>
                    <div className="absolute z-10 flex -translate-x-96 flex-row items-center justify-center gap-2 duration-300 ease-in-out group-focus:translate-x-0 group-active:translate-x-0">
                            {/* Spinner animation */}
                            <div className="size-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent"></div>
                        </div>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            )}
        </div>
    );
};

export default MyNews;
