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
        <footer className="bg-[#002349] py-12 text-white">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-20">
                {/* Grid layout */}
                <div className="grid grid-cols-1 items-start gap-2 text-center md:grid-cols-2 md:text-left">
                    {/* Contact Info */}
                    <div>
                        <h3 className={`mb-4 text-xl font-semibold text-white ${fontClass}`}>{t('Contact Us')}</h3>
                        <ul className={`space-y-2 text-sm leading-relaxed text-white ${fontClass}`}>
                            <li>
                                <span className="font-medium">{t('Address')} :</span>{' '}
                                {locale === 'kh' ? application_info?.address_kh : application_info?.address}
                            </li>
                            <li>
                                <span className="font-medium">{t('Phone')} :</span>{' '}
                                {locale === 'kh' ? (application_info?.phone_kh ?? application_info?.phone) : application_info?.phone}
                            </li>
                            <li>
                                <span className="font-medium">{t('Working Hours')} :</span>{' '}
                                {locale === 'kh'
                                    ? application_info?.working_hours_kh 
                                    : application_info?.working_hours}
                            </li>
                            <li>
                                <span className="font-medium">{t('Working Days')} :</span>{' '}
                                {locale === 'kh'
                                    ? application_info?.working_days_kh
                                    : application_info?.working_days}
                            </li>
                            <li className="font-semibold text-red-400">{locale === 'kh' ? t('អាទិត្យ៖ បិទ') : 'Sunday : CLOSED'}</li>
                        </ul>
                        <hr className="mx-auto mt-4 w-20 border-t border-white md:mx-0" />
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className={`mb-4 text-xl font-semibold text-white ${fontClass}`}>{t('Social Media')}</h3>
                        {/* <div className="flex gap-4">
                            {socialMedia?.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={item.name}
                                    className="group flex flex-col items-center space-y-1"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 shadow-md transition-all duration-300 ${item.hoverColor}`}
                                    >
                                        <img
                                            src={`/assets/images/links/${item.image}`}
                                            alt={item.alt}
                                            className="h-8 w-8 overflow-hidden rounded-full bg-white transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-400 transition group-hover:text-white">{item.title}</span>
                                </a>
                            ))}
                        </div> */}
                        <div className="justify-end">
                            <MyFooterSocialTooltip items={socialMedia} />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="pt-4 flex justify-between item-center text-sm text-gray-400 ">
                    
                     <div className={`${fontClass} text-sm leading-relaxed text-white`}>{locale === 'kh' ? application_info?.copyright_kh : application_info?.copyright}</div>
                     <p>
                        {companyName}{' '}
                        <a
                            href="https://alphalib.org/"
                            className="transition-colors duration-200 hover:text-white hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Alphalib
                        </a>
                    </p>
                </div>
            </div>
            <MyScrollTop />
        </footer>
    );
};

export default MyFooter;
