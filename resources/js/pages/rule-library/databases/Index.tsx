import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import { SlashIcon } from 'lucide-react';
import Layout from '../Layout';
import MyItemTableData from '../components/my-item-table-data';
import MySearch from '../components/my-search';

const Databases = () => {
    const { banner, heading } = usePage().props;
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <Layout>
            <Head title={t('Databases')} />
            <div className="relative flex aspect-[21/4] w-full flex-col items-center justify-center overflow-hidden text-white">
                {/* Background Image with Dark Overlay */}
                <img src={`/assets/images/banner_positions/thumb/${banner?.banner}`} className="absolute inset-0 z-0 h-full w-full object-cover" />
                <div className="absolute inset-0 z-10 bg-black/50" />

                {/* Title and Breadcrumb */}
                <div className="relative z-20 px-4 text-center">
                    <h1 className={`font-noto-san-extra-light text-xl md:text-6xl ${fontClass}`}>{t('Databases')}</h1>
                    <div className="mt-2 lg:mt-4">
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
                                    <BreadcrumbLink href="#/databases" className="text-gray-400">
                                        {t('Databases')}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <MySearch />

            <div className="mx-auto my-10 max-w-4xl px-6 text-center lg:px-0">
                <h2 className={`text-3xl font-bold text-gray-900 dark:text-white ${fontClass}`}>
                    {locale === 'kh' ? (heading?.title_kh ?? heading?.title) : heading?.title}
                </h2>
                <p className={`mt-2 text-gray-500 dark:text-gray-300 ${fontClass}`}>
                    {locale === 'kh' ? (heading?.short_description_kh ?? heading?.short_description) : heading?.short_description}
                </p>
            </div>

            <MyItemTableData />
        </Layout>
    );
};

export default Databases;
