import { Head, usePage } from '@inertiajs/react';
import { SlashIcon } from 'lucide-react';
import Layout from './Layout';
import MyHeroAbout from './components/my-hero-about';
import MyOurValues from './components/my-our-values';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './components/ui/breadcrumb';
import MySearch from './components/my-search';

const About = () => {
    const { banner } = usePage().props;
    // console.log(banner);
    return (
        <Layout>
            <Head title="About" />
            <div className="relative flex w-full aspect-[21/5] flex-col items-center justify-center overflow-hidden text-white">
                {/* Background Image with Dark Overlay */}
                <img src={`/assets/images/banner_positions/${banner?.banner}`} className="absolute inset-0 z-0 w-full h-full object-cover " />
                <div className="absolute inset-0 z-10 bg-black/50" />
                {/* Title and Breadcrumb */}
                <div className="relative z-20 px-4 text-center">
                    <h1 className="font-noto-san-extra-light text-xl md:text-6xl">About</h1>
                    <div className="lg:mt-6">
                        <Breadcrumb>
                            <BreadcrumbList className="flex justify-center gap-2">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white hover:text-gray-400 hover:underline">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon className="h-4 w-4 text-gray-400" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#/about" className="text-gray-400">
                                        About
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <MySearch/>
            <MyHeroAbout />
            <MyOurValues />
        </Layout>
    );
};

export default About;
