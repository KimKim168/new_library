import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, LoaderIcon } from 'lucide-react';
import MyHeadingStyle1 from './my-heading-style-1';

const MyHeroSection = () => {
    const { heroSection } = usePage().props;

    const { t } = useTranslation();
    const { locale } = usePage().props;
  
    // console.log(heroSection);
    if (!heroSection || heroSection?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <section className="bg-background mx-auto max-w-screen-2xl px-4 pt-10 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                {/* Left: Image */}
                <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-md">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={`/assets/images/pages/thumb/${heroSection?.images?.[0]?.image}`}
                        alt="Hero Image"
                    />
                </div>
                {/* Right: Content */}
                <div>
                    <MyHeadingStyle1 title={t(locale === 'kh' ? heroSection?.title_kh ?? heroSection?.title : heroSection?.title)} />
                    <div
                        className={`text-foreground prose prose-strong:dark:text-white mb-6 leading-relaxed whitespace-pre-line `}
                        dangerouslySetInnerHTML={{
                            __html: t((locale === 'kh' ? heroSection?.short_description_kh : heroSection?.short_description) || ''),
                        }}
                    />

                    <div className="flex justify-start">
                        <Link
                            href={`/introduction`}
                            prefetch
                            className="group relative mt-2 w-42 cursor-pointer overflow-hidden rounded-full border bg-[#263381] p-2 text-center font-semibold text-white"
                        >
                            <span
                                className={`inline-block transition-all duration-300 ${false ? 'opacity-0' : 'translate-x-1 group-hover:translate-x-12 group-hover:opacity-0'}`}
                            >
                                {t('Read More')}
                            </span>
                            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#263381] opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                                {t('Read More')}
                                {false ? <LoaderIcon className="animate-spin" /> : <ArrowRight />}
                            </div>
                            <div className="absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyHeroSection;
