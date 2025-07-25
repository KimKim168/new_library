import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios'; // ✅ Make sure axios is imported
import MyHeadingStyle1 from './my-heading-style-1';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import MyNoData from '@/components/my-no-data';

export default function MyVideoGallery() {
    const { videos, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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

    const onVideoClick = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);

        const videoId = videos[index].id;

        axios.post(`/videos/${videoId}/increment-view`).catch((err) => {
            console.error('Failed to increment view count', err);
        });
    };

    if (!videos || videos.length === 0) {
        return (
            <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300">
                <MyNoData />
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20">
                <div className="flex">
                    <MyHeadingStyle1 title={t('Videos')} />
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-4">
                    {videos.map((item, index) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer"
                            onClick={() => onVideoClick(index)}
                        >
                            <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-xl">
                                <img
                                    width={400}
                                    height={400}
                                    src={`/assets/images/items/thumb/${item.images?.[0]?.image ?? 'default.jpg'}`}
                                    alt={item.name}
                                    className="aspect-video w-full transform object-cover transition-all duration-300 group-hover:scale-105"
                                />
                                <span className="group-hover:bg-true-primary bg-true-primary/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 p-2 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                    <Play size={24} />
                                </span>
                            </div>
                            <div className={`text-foreground mt-2 text-start text-base font-medium dark:text-white ${fontClass}`}>
                                {t(locale === 'kh' ? item.name_kh ?? item.name : item.name)}
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="flex h-full w-full flex-col border-none bg-black px-14">
                        <DialogTitle className="hidden" />
                        <DialogDescription className="hidden" />
                        <div className="relative flex-grow">
                            {videos[currentIndex]?.link ? (
                                <iframe
                                    src={`${getVideoUrl(videos[currentIndex].link)}?&autoplay=1`}
                                    className="h-full w-full rounded-2xl"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <p className="text-center text-white">No video available</p>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="group absolute top-1/2 left-2 -translate-y-1/2 transform"
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="text-white group-hover:text-black" size={28} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="group absolute top-1/2 right-2 -translate-y-1/2 transform"
                            onClick={nextSlide}
                            disabled={currentIndex === videos.length - 1}
                        >
                            <ChevronRight className="text-white group-hover:text-black" size={28} />
                        </Button>
                    </DialogContent>
                </Dialog>

                {videos.length >= 8 && (
                    <Link
                        href="/videos"
                        className="group relative bottom-0 z-10 mx-auto mt-10 flex w-max cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-red-500 bg-red-500 px-4 py-2 font-black text-[#FFF] duration-700 ease-in-out hover:bg-[#FFF] hover:text-red-500"
                    >
                        <span className="absolute top-0 left-0 -z-10 h-full w-0 rounded-xl bg-[#FFF] transition-all duration-700 group-hover:w-full"></span>
                        <span className={`z-10 truncate duration-300 ease-in-out ${fontClass}`}>
                            {t('See More')}
                        </span>
                        <div className="absolute z-10 flex -translate-x-96 items-center justify-center gap-2 duration-300 ease-in-out group-hover:translate-x-0">
                            <div className="size-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent"></div>
                        </div>
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                )}
            </div>
        </>
    );
}
