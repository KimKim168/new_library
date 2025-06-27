import { Link, usePage } from '@inertiajs/react';
import MyHeadingStyle1 from './my-heading-style-1';

// const books = [
//     {
//         id: 1,
//         title: 'Deep Work: Rules for Focused Success in a Distracted World',
//         image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&h=600&q=80',
//     },
//     {
//         id: 2,
//         title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
//         image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&h=600&q=80',
//     },
//     {
//         id: 3,
//         title: 'The Lean Startup: How Today’s Entrepreneurs Use Continuous Innovation',
//         image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&h=600&q=80',
//     },
//     {
//         id: 4,
//         title: 'The Psychology of Money: Timeless Lessons on Wealth',
//         image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&h=600&q=80',
//     },
//     {
//         id: 5,
//         title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
//         image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&h=600&q=80',
//     },
//     {
//         id: 6,
//         title: 'The 7 Habits of Highly Effective People',
//         image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600&q=80',
//     },
// ];

const MyPost = () => {
    const { newBooks } = usePage().props;
    // console.log(newBooks);
    if (!newBooks || newBooks?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <div className="container mx-auto my-10 max-w-screen-2xl px-3 lg:px-20">
            <div className="flex">
                <MyHeadingStyle1 title="New Books" />
            </div>
            <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
                {newBooks?.map((item) => (
                    <a
                        href={`${item.link ? item.link : '/detail/' + item.id}`}
                        key={item.id}
                        className="overflow-hidden rounded-lg transition-all duration-300 hover:scale-95 hover:cursor-pointer"
                    >
                        <img
                            src={`/assets/images/items/${item?.images[0].image}`}
                            alt="image"
                            width={200}
                            height={300}
                            className="aspect-[6/9] w-full rounded-lg border object-cover"
                        />

                        <h3 className="text-foreground mt-2 line-clamp-3 text-base">{item.name}</h3>
                    </a>
                ))}
            </div>
           {newBooks.length > 11 && (
                <Link
                    href="/new_books"
                    className="group relative mx-auto mt-10 mb-5 flex w-max items-center gap-2 rounded-full border border-red-500 bg-red-500 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-red-500 dark:border-red-400 dark:bg-red-500 dark:hover:bg-transparent dark:hover:text-red-400"
                >
                    See More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            )}
        </div>
    );
};

export default MyPost;
