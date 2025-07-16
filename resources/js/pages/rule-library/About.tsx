import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import { SlashIcon } from 'lucide-react';
import Layout from './Layout';
import MyHeroAbout from './components/my-hero-about';
import MyOurValues from './components/my-our-values';
import MySearch from './components/my-search';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './components/ui/breadcrumb';

const About = () => {
    const { banner } = usePage().props;
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    // console.log(banner);
    return (
        <Layout>
            <Head title={t('About')} />
            <div className="relative flex aspect-[21/5] w-full flex-col items-center justify-center overflow-hidden text-white">
                {/* Background Image with Dark Overlay */}
                <img src={`/assets/images/banner_positions/thumb/${banner?.banner}`} className="absolute inset-0 z-0 h-full w-full object-cover" />
                <div className="absolute inset-0 z-10 bg-black/50" />
                {/* Title and Breadcrumb */}
                <div className="relative z-20 px-4 text-center">
                    <h1 className={`font-noto-san-extra-light text-xl md:text-6xl ${fontClass}`}>{t('About')}</h1>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList className={`flex justify-center gap-2 ${fontClass}`}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white hover:text-gray-400 hover:underline">
                                        {t('Home')}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon className="h-4 w-4 text-gray-400" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#/about" className="text-gray-400">
                                        {t('About')}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <MySearch />
            <MyHeroAbout />
            <MyOurValues />
        </Layout>
    );
};

export default About;
