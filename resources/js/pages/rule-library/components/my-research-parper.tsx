import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import MyHeadingStyle1 from './my-heading-style-1';

// const books = [
//   {
//     id: 1,
//     title: "Deep Work: Rules for Focused Success in a Distracted World",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
//   {
//     id: 2,
//     title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
//   {
//     id: 3,
//     title: "The Lean Startup: How Today’s Entrepreneurs Use Continuous Innovation",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
//   {
//     id: 4,
//     title: "The Psychology of Money: Timeless Lessons on Wealth",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
//   {
//     id: 5,
//     title: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
//   {
//     id: 6,
//     title: "The 7 Habits of Highly Effective People",
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80",
//   },
// ];

const MyResearchPaper = () => {
    const { researchPaper } = usePage().props;
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    return (
        <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20">
            <div className="flex">
                <MyHeadingStyle1 title={t('Research Papers')} />
            </div>
            <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
                {researchPaper?.map((item) => (
                    <a
                        href={`${item.link ? item.link : '/detail/' + item.id}`}
                        key={item.id}
                        className="overflow-hidden rounded-lg transition-all  duration-300 hover:scale-95 hover:cursor-pointer"
                    >
                        <img
                            src={`/assets/images/items/thumb/${item?.images[0].image}`}
                            alt="image"
                            width={200}
                            height={300}
                            className="aspect-[6/9] w-full rounded-lg border object-cover"
                        />
                        <h3 className={`text-foreground line-clamp-3 pt-2 text-base ${fontClass}`}>{locale === 'kh' ? item.name_kh ?? item.name : item.name}</h3>
                    </a>
                ))}
            </div>
            {researchPaper?.length >= 12 && (
                // <Link
                //     href="/research_papers"
                //     className="group relative mx-auto mt-10 mb-5 flex w-max items-center gap-2 rounded-full border border-red-500 bg-red-500 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-red-500 dark:border-red-400 dark:bg-red-500 dark:hover:bg-transparent dark:hover:text-red-400"
                // >
                //     See More
                //     <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                // </Link>
                <Link
                    href="/research_papers"
                    className="group relative bottom-0 z-10 mx-auto mt-10 flex w-max cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-red-500 bg-red-500 px-4 py-2 font-black text-[#FFF] duration-700 ease-in-out hover:bg-[#FFF] hover:text-red-500 focus:bg-[#FFF] focus:text-red-500 active:scale-95 active:duration-0"
                >
                    <span className="absolute top-0 left-0 -z-10 h-full w-0 rounded-xl bg-[#FFF] transition-all duration-700 group-hover:w-full"></span>
                    <span className={`z-10 truncate duration-300 ease-in-out group-focus:translate-x-96 group-active:-translate-x-96 ${fontClass}`}>
                        {t('See More')}
                    </span>
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

export default MyResearchPaper;
