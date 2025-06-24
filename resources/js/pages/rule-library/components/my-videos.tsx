import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import MyHeadingStyle1 from './my-heading-style-1';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { usePage } from '@inertiajs/react';

// const videos = [
//     // Url MP4
//     {
//         id: 1,
//         src: 'https://www.youtube.com/embed/1VdS89qP3O8?si=lebWECMrb577Mn0e',
//         title: 'Video 1',
//         thumb: '/assets/rule-library/images/video.jpg',
//     },
//     // Iframe
//     {
//         id: 2,
//         src: 'https://www.youtube.com/embed/1VdS89qP3O8?si=lebWECMrb577Mn0e',
//         title: 'Video 2',
//         thumb: '/assets/rule-library/images/video.jpg',
//     },
//     // Youtube Embed
//     {
//         id: 3,
//         src: 'https://www.youtube.com/embed/1VdS89qP3O8?si=lebWECMrb577Mn0e',
//         title: 'Video 3',
//         thumb: '/assets/rule-library/images/video.jpg',
//     },
//     // Locale
//     {
//         id: 3,
//         src: 'https://www.youtube.com/embed/1VdS89qP3O8?si=lebWECMrb577Mn0e',
//         title: 'Video 4',
//         thumb: '/assets/rule-library/images/video.jpg',
//     },
// ];

export default function MyVideoGallery() {
    const { videos } = usePage().props;
    // console.log(videos);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {   
        if (isOpen) {
            console.log(`Currently displaying: ${videos[currentIndex].name}`);
        }
    }, [currentIndex, isOpen]);

    const getVideoUrl = (src: string) => {
        // Check if the src is an iframe HTML string
        const iframeRegex = /<iframe.*?src="(.*?)"/;
        const match = src.match(iframeRegex);
        return match ? match[1] : src; // Return the extracted URL or the original src
    };

    const nextSlide = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    

    if (!videos || videos?.length === 0) {
    return (
        <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20 text-center text-gray-500 dark:text-gray-300">
        </div>
    );
}
    return (
        <>
            <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20">
                <div className="flex">
                    <MyHeadingStyle1 title="Videos" />
                </div>
                <div>
                    <div className={`grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-4`}>
                        {videos?.map((item, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setCurrentIndex(index); // Set current video index
                                    setIsOpen(true); // Open the lightbox
                                }}
                            >
                                <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-xl bg-black">
                                    <img
                                        width={400}
                                        height={400}
                                        src={`/assets/images/items/${item.images[0].image}`} // Replace with dynamic thumbnail if available
                                        className="aspect-video w-full transform object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                    <span className="group-hover:bg-true-primary bg-true-primary/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 p-2 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <Play size={24} />
                                    </span>
                                </div>
                                <div className="text-foreground mt-2 text-start text-base font-medium">{item.name}</div>
                            </div>
                        ))}
                    </div>

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogContent className="flex h-full w-full flex-col border-none bg-black px-14">
                            <DialogTitle className="hidden" />
                            <DialogDescription className="hidden" />
                            <div className="relative flex-grow">
                                <iframe
                                    src={`${getVideoUrl(videos[currentIndex].link)}?&autoplay=1`} // Ensure autoplay works on YouTube
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
                                disabled={currentIndex === 0} // Disable button if on the first video
                            >
                                <ChevronLeft className="text-white group-hover:text-black" size={28} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="group absolute top-1/2 right-2 -translate-y-1/2 transform"
                                onClick={nextSlide}
                                aria-label="Next video"
                                disabled={currentIndex === videos.length - 1} // Disable button if on the last video
                            >
                                <ChevronRight className="text-white group-hover:text-black" size={28} />
                            </Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    );
}
