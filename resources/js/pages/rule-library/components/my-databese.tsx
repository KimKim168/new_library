import { usePage } from '@inertiajs/react';
import MyHeadingStyle1 from './my-heading-style-1';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

// const items = [
//   { name: "Theses", image: "/assets/demo-images/rule-images/image2.webp" },
//   { name: "E-Publications", image: "/assets/demo-images/rule-images/image3.webp" },
//   { name: "Audios", image: "/assets/demo-images/rule-images/image2.webp" },
//   { name: "Journals", image: "/assets/demo-images/rule-images/image3.webp" },
//   { name: "Videos", image: "/assets/demo-images/rule-images/image2.webp" },
//   // Add more items here if needed
// ]

const MyDatabase = () => {
    const { dataBase } = usePage().props;
   
    if (!dataBase || dataBase?.length === 0) {
    return (
        <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20 text-center text-gray-500 dark:text-gray-300">
        </div>  
    );
}
    return (
        <div className="mx-auto mt-10 max-w-screen-2xl px-3 lg:px-20">
            <div className="flex">
                <MyHeadingStyle1 title="Our Databases" />
            </div>
            <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent className="p-2">
                    {dataBase?.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                            <a target='_blank' href={item.link}>
                                <Card className="border-primary bg-background flex cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed px-1 py-4 transition-all duration-300 hover:-translate-2 hover:border-solid hover:shadow-[5px_5px_rgba(104,_96,_255,_0.4),_10px_10px_rgba(104,_96,_255,_0.3),_15px_15px_rgba(104,_96,_255,_0.2)]">
                                    <CardContent className="flex flex-col items-center justify-center ">
                                        <img
                                            src={`/assets/images/links/${item.image}`}
                                            className="mb-2 h-[50px] w-[50px] object-contain md:h-[60px] md:w-[60px]"
                                            alt={item.title}
                                        />
                                        <p className="text-center text-sm font-bold whitespace-nowrap lg:text-lg">{item.title}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className={`${dataBase?.length <= 5 ? 'lg:hidden' : ''}`}>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
};

export default MyDatabase;
