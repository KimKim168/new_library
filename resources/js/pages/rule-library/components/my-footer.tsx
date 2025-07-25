import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { MyFooterSocialTooltip } from './my-footer-social-tooltip';
import MyScrollTop from './my-scrool-top';

const MyFooter = () => {
    // const websiteInfos = {
    //   address: "123 Main St, Phnom Penh, Cambodia",
    //   phone: "+855 12 345 678",
    //   hours: "Mon-Fri 8:00 AM - 5:00 PM",
    //   closed: "Sunday",
    // };

    //   const socialMedia = [
    //   {
    //     id: 1,
    //     image: "/assets/demo-images/rule-images/facebook.svg",
    //     name: "Facebook",
    //     alt: "Facebook",
    //     link: "https://facebook.com",
    //     hoverColor: "hover:bg-[#1877F2]", // Facebook Blue
    //   },
    //   {
    //     id: 2,
    //     image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg",
    //     name: "Telegram",
    //     alt: "Telegram",
    //     link: "https://telegram.org",
    //     hoverColor: "hover:bg-[#0088cc]", // Telegram Blue
    //   },
    //   {
    //     id: 3,
    //     image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg",
    //     name: "YouTube",
    //     alt: "YouTube",
    //     link: "https://youtube.com",
    //     hoverColor: "hover:bg-[#FF0000]", // YouTube Red
    //   },
    //   {
    //     id: 4,
    //     image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tiktok.svg",
    //     name: "TikTok",
    //     alt: "TikTok",
    //     link: "https://www.tiktok.com",
    //     hoverColor: "hover:bg-[#010101]", // TikTok Black
    //   },
    // ];
    const { socialMedia } = usePage().props;
    const { application_info } = usePage().props;
    // console.log(application_info);
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    const companyName = 'Powered By:';

    return (
        <footer className="relative bg-[#002349] pt-14 pb-10 text-white">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Contact Info */}
                    <div>
                        <h3 className={`mb-2 text-xl font-semibold tracking-wide ${fontClass}`}>{t('Contact Us')}</h3>
                        <ul className={`space-y-3 text-sm leading-relaxed ${fontClass}`}>
                            <li>
                                <span className="font-medium text-white/80">{t('Address')}:</span>{' '}
                                {locale === 'kh' ? application_info?.address_kh : application_info?.address}
                            </li>
                            <li>
                                <span className="font-medium text-white/80">{t('Phone')}:</span>{' '}
                                {locale === 'kh' ? (application_info?.phone_kh ?? application_info?.phone) : application_info?.phone}
                            </li>
                            <li>
                                <span className="font-medium text-white/80">{t('Working Hours')}:</span>{' '}
                                {locale === 'kh' ? application_info?.working_hours_kh : application_info?.working_hours}
                            </li>
                            <li>
                                <span className="font-medium text-white/80">{t('Working Days')}:</span>{' '}
                                {locale === 'kh' ? application_info?.working_days_kh : application_info?.working_days}
                            </li>
                            <li className="font-bold text-red-400">{locale === 'kh' ? t('អាទិត្យ៖ បិទ') : 'Sunday : CLOSED'}</li>
                        </ul>
                        <div className="mt-6 h-[2px] w-16 rounded-full bg-white/30"></div>
                    </div>

                    {/* Visitors */}
                    <div className="flex flex-col items-center md:items-center">
                        <h3 className={`mb-2 text-xl font-semibold tracking-wide ${fontClass}`}>{t('Visitors')}</h3>
                        <a href="https://info.flagcounter.com/59pj">
                            <img
                                src="https://s05.flagcounter.com/count2/59pj/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                                alt="Flag Counter"
                                className="rounded shadow-md"
                            />
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className={`mb-2 text-xl font-semibold tracking-wide ${fontClass}`}>{t('Social Media')}</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
                            <MyFooterSocialTooltip items={socialMedia} />
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-2 md:mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/60 md:flex-row">
                    <div className={`${fontClass} text-center md:text-left`}>
                        {locale === 'kh' ? application_info?.copyright_kh : application_info?.copyright}
                    </div>
                    <div className="text-center md:text-right">
                        Powered by:{' '}
                        <a
                            href="https://alphalib.org/"
                            className="text-white transition-opacity duration-300 hover:text-white hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Alphalib
                        </a>
                    </div>
                </div>
            </div>

            <MyScrollTop />
        </footer>
    );
};

export default MyFooter;
