import MyNoData from '@/components/my-no-data';
import { MySearchTableData } from '@/components/my-search-table-data';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MyPaginationNew } from '../components/my-pagination-new';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../components/ui/dialog';
import Layout from '../Layout';
import MyHeadingStyle1 from '../components/my-heading-style-1';

const Index = () => {
    const { tableData } = usePage().props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    const videos = tableData?.data;

    useEffect(() => {
        if (isOpen) {
            console.log(`Currently displaying: ${videos[currentIndex]?.name}`);
        }
    }, [currentIndex, isOpen]);

    const getVideoUrl = (src) => {
        const iframeRegex = /<iframe.*?src="(.*?)"/;
        const match = src?.match?.(iframeRegex);
        return match ? match[1] : src;
    };

    const nextSlide = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <Layout>
            <Head title="Videos" />
            <div className="container mx-auto mt-5 mb-16 max-w-screen-2xl px-3 lg:px-20">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div >
                        <MyHeadingStyle1 title={t('Videos')} />
                    </div>
                    <div className="mb-2 md:mb-0">
                        <MySearchTableData />
                    </div>
                </div>

                {/* Video Cards */}
                {videos.length === 0 ? (
                    <div className="my-10">
                        <MyNoData />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-4">
                        {videos.map((item, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsOpen(true);
                                }}
                            >
                                <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-xl">
                                    <img
                                        width={400}
                                        height={400}
                                        src={`/assets/images/items/thumb/${item.images[0]?.image}`}
                                        alt={item.name}
                                        className="aspect-video w-full transform object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                    <span className="group-hover:bg-true-primary bg-true-primary/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 p-2 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <Play size={24} />
                                    </span>
                                </div>
                                <div className={`text-foreground mt-2 text-start text-base font-medium dark:text-white ${fontClass}`}>{t(locale === 'kh' ? item.name_kh ?? item.name : item.name)}</div>
                            </div>
                        ))}
                    </div>
                )}

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="flex h-full w-full flex-col border-none bg-black px-14">
                        <DialogTitle className="hidden" />
                        <DialogDescription className="hidden" />
                        <div className="relative flex-grow">
                            <iframe
                                src={`${getVideoUrl(videos[currentIndex]?.link)}?&autoplay=1`}
                                className="h-full w-full rounded-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group absolute top-1/2 left-2 -translate-y-1/2 transform"
                            onClick={prevSlide}
                            aria-label="Previous video"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="text-white group-hover:text-black" size={28} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group absolute top-1/2 right-2 -translate-y-1/2 transform"
                            onClick={nextSlide}
                            aria-label="Next video"
                            disabled={currentIndex === videos.length - 1}
                        >
                            <ChevronRight className="text-white group-hover:text-black" size={28} />
                        </Button>
                    </DialogContent>
                </Dialog>

                <MyPaginationNew />
            </div>
        </Layout>
    );
};

export default Index;
