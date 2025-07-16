import { usePage } from '@inertiajs/react';
import Layout from '../Layout';

const Detail = () => {
    const { bannerInDetail } = usePage().props;
    const { itemShow } = usePage().props;
        const { locale } = usePage().props;
        const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    // console.log(itemShow);
    // const { id } = params
    return (
        <Layout>
            <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 px-6 py-10 lg:flex-row xl:px-20">
                {/* Main Content */}
                <div key={itemShow?.id} className="flex-1">
                    <h1 className={`mb-4 text-2xl font-bold ${fontClass}`}>{locale === 'kh' ? itemShow?.title_kh : itemShow?.title}</h1>
                    <img
                        src={`/assets/images/posts/thumb/${itemShow?.images[0].image}`}
                        alt="Page Image"
                        className="mb-6 aspect-[16/9] h-auto w-full rounded-lg object-cover shadow-md"
                    />
                    {/* <div
                        className="product-description prose max-w-none overflow-hidden"
                        dangerouslySetInnerHTML={{
                            __html: locale === 'kh' ? itemShow?.short_description_kh : itemShow?.short_description
                        }}
                    ></div> */}

                    <div
                        className={`product-description prose mt-4 max-w-none overflow-hidden ${fontClass}`}
                        dangerouslySetInnerHTML={{
                            __html: locale === 'kh' ? itemShow?.long_description_kh : itemShow?.long_description
                        }}
                    ></div>
                </div>

                {/* Sidebar Banners */}
                <div className="flex w-full flex-col gap-6 overflow-hidden lg:w-80">
                    {bannerInDetail?.map((item) => (
                        <img
                            key={item.id}
                            src={`/assets/images/banners/thumb/${item.image}`}
                            alt="Static Banner 1"
                            className="h-auto w-full rounded-md object-cover shadow"
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Detail;
