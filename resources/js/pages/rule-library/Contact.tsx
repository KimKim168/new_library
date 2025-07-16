import { Head, usePage } from '@inertiajs/react';
import { Mail, MapPinCheck, PhoneCall } from 'lucide-react';
import { MyFooterSocialTooltip } from './components/my-footer-social-tooltip';
import Layout from './Layout';
import useTranslation from '@/hooks/use-translation';

// const socialMedia = [
//     {
//         id: 1,
//         image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg',
//         name: 'Facebook',
//         alt: 'Facebook',
//         link: 'https://facebook.com',
//         hoverColor: 'hover:bg-[#1877F2]', // Facebook Blue
//     },
//     {
//         id: 2,
//         image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg',
//         name: 'Telegram',
//         alt: 'Telegram',
//         link: 'https://telegram.org',
//         hoverColor: 'hover:bg-[#0088cc]', // Telegram Blue
//     },
//     {
//         id: 3,
//         image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg',
//         name: 'YouTube',
//         alt: 'YouTube',
//         link: 'https://youtube.com',
//         hoverColor: 'hover:bg-[#FF0000]', // YouTube Red
//     },
//     {
//         id: 4,
//         image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tiktok.svg',
//         name: 'TikTok',
//         alt: 'TikTok',
//         link: 'https://www.tiktok.com',
//         hoverColor: 'hover:bg-[#010101]', // TikTok Black
//     },
// ];

const Contact = () => {
    const { application_info, socialMedia, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <Layout>
            <Head title={t('Contact Us')} />
            <section className="mb-32">
                {/* Map Section */}
                <a href={application_info?.google_map} id="map" className="relative h-[480px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        src={application_info?.google_map}
                        width="100%"
                        height="480"
                        title="Map to RULE Library"
                        aria-label="Map to RULE Library"
                    ></iframe>
                </a>

                {/* Info Section */}
                <div className="container mx-auto px-6 md:px-12">
                    <div className="bg-background/50  -mt-[80px] block rounded-lg border-gray-300 px-6 py-12 shadow-xl backdrop-blur-md md:px-12 md:py-16">
                        <div className="grid justify-center">
                            <div className="grid w-full gap-12 md:grid-cols-2 xl:grid-cols-2">
                                {/* Contact Details */}
                                <div className="space-y-8">
                                    {/* Phone */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 group-hover:bg-sky-300">
                                                <PhoneCall />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className={`mb-2 font-semibold text-foreground group-hover:text-neutral-800 ${fontClass}`}>
                                                {t('Phone Number')}
                                            </p>
                                            <p className={`text-foreground text-sm group-hover:text-neutral-800 ${fontClass}`}>
                                                {application_info?.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 group-hover:bg-sky-300">
                                                <MapPinCheck />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className={`mb-2 font-semibold text-foreground group-hover:text-neutral-800 ${fontClass}`}>
                                                {t('Address')}
                                            </p>
                                            <p className={`text-foreground text-sm group-hover:text-neutral-800 ${fontClass}`}>
                                                {locale === 'kh' ? application_info?.address_kh ?? application_info?.address : application_info?.address}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 group-hover:bg-sky-300">
                                                <Mail />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className={`mb-2 font-semibold text-foreground group-hover:text-neutral-800 ${fontClass}`}>
                                                {t('Email')}
                                            </p>
                                            <p className={`text-foreground text-sm group-hover:text-neutral-800 ${fontClass}`}>
                                                {application_info?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mt-4 md:mt-0">
                                    <p className={`mb-6 text-center text-lg font-bold text-foreground ${fontClass}`}>
                                        {t('Social Media')}
                                    </p>
                                    <div className="flex flex-wrap justify-start gap-4">
                                        <MyFooterSocialTooltip items={socialMedia} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
