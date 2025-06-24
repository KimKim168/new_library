import { usePage } from '@inertiajs/react';
// const teamMembers = [
//     {
//         name: 'Collaboration',
//         title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
//         Icon: HeartHandshake,
//     },
//     {
//         name: 'Customer Focus',
//         title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
//         Icon: HeartHandshake,
//     },
//     {
//         name: 'Diversity',
//         title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
//         Icon: HeartHandshake,
//     },
//     {
//         name: 'Expertise',
//         title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
//         Icon: HeartHandshake,
//     },
//     {
//         name: 'Innovation',
//         title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
//         Icon: HeartHandshake,
//     },
// ];
const MyOurValues = () => {
    const { ourValues } = usePage().props;
      if (!ourValues || ourValues?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <div className="bg-background">
            {ourValues?.map((item) => (
                <div key={item.id} className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-20">
                    <h2 className="text-foreground my-5 text-center text-3xl font-semibold tracking-wide after:mx-auto after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-yellow-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-20 md:text-2xl lg:text-3xl">
                        {item?.title}
                    </h2>
                    {/* <div className="relative mt-6 h-[2px] w-full bg-gray-200">
                        <div className="absolute top-0 left-1/2 h-[2px] w-20 -translate-x-1/2 transform bg-yellow-400"></div>
                    </div> */}
                    <div className="mx-auto mt-10 grid w-full max-w-screen-2xl grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5">
                        {item?.children?.map((values) => (
                            <a href={values.type ? values.link : values.content} key={values.id} className="text-center">
                                <div className="dark:bg-yellow/50 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10 text-white">
                                    <img
                                        src={`/assets/images/pages/${values.images[0].image}`}
                                        alt="image"
                                        className="mx-auto h-16 w-16 object-contain p-1"
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{values.title}</h3>
                                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: values.short_description || '---' }}></p>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyOurValues;
