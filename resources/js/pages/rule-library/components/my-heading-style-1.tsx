import { usePage } from '@inertiajs/react';

const MyHeadingStyle1 = ({ title }: { title: string }) => {
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    return (
        <h2
            className={`text-foreground relative my-5 inline-block text-center text-2xl tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-50 after:rounded-full after:bg-yellow-400 after:transition-transform after:duration-300 hover:after:scale-x-100 md:text-2xl lg:text-3xl ${fontClass}`}
        >
            {title}
        </h2>
    );
};

export default MyHeadingStyle1;
