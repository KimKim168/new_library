import { usePage } from '@inertiajs/react';
import MyHeadingStyle1 from './my-heading-style-1';

const MyHeroAbout = () => {
    const { aboutPage } = usePage().props;
    // console.log(aboutPage);
    if (!aboutPage || aboutPage?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <section className="bg-background px-6 pt-16 md:px-20">
            {aboutPage?.map((item) => (
                <div key={item.id} className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    {/* Left: Images */}
                    <div className="relative h-[32rem] w-full">
                        {' '}
                        {/* Increased height */}
                        <img
                            src={`/assets/images/pages/${item?.images[0].image}`}
                            alt="Library Interior"
                            className="absolute top-0 -left-1 h-[85%] w-2/4 object-cover"
                        />
                        <img
                            src={`/assets/images/pages/${item?.images[1].image}`}
                            alt="Bookshelves"
                            className="absolute -right-1 bottom-0 h-[85%] w-2/4 object-cover"
                        />
                    </div>
                    {/* Right: Text */}
                    <div>
                        <MyHeadingStyle1 title={item.title} />
                        <p className="mb-4 text-foreground prose whitespace-pre-line prose-strong:dark:text-white" dangerouslySetInnerHTML={{ __html: item.short_description || '---' }}>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MyHeroAbout;
