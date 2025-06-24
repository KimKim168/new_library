import { Link } from '@inertiajs/react';
import { useState } from 'react';

const books = [
    {
        id: 1,
        title: 'Theses',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
        tag: 'New',
        rating: 4.5,
        category: 'Education',
        short_description:
            'A collection of academic research papers written by students and researchers. These documents reflect original studies across multiple disciplines and are useful for scholarly reference, research development, and higher education studies.',
    },
    {
        id: 2,
        title: 'E-Publications',
        image: '/assets/rule-library/images/image1.jpg',
        tag: 'Event',
        rating: 4.0,
        category: 'Event',
        short_description:
            'Includes digital versions of journals, magazines, newsletters, and research papers. These resources are accessible online and regularly updated to provide current information for learners, educators, and professionals.',
    },
    {
        id: 3,
        title: 'Physical Books',
        image: '/assets/rule-library/images/images2.jpeg',
        tag: 'Featured',
        rating: 5,
        category: 'Business',
        short_description:
            'Our library shelves a wide range of printed books in various genres including textbooks, fiction, non-fiction, academic references, and more. These books are available for borrowing or in-library use.',
    },
    {
        id: 4,
        title: 'Video',
        image: '/assets/rule-library/images/video.jpg',
        tag: 'Popular',
        rating: 3.5,
        category: 'Education',
        short_description:
            'This collection consists of educational videos, tutorials, recorded seminars, and documentaries. These multimedia materials are ideal for enhancing visual learning and can be accessed digitally or via physical media.',
    },
    {
        id: 5,
        title: 'Audio',
        image: '/assets/rule-library/images/image3.jpg',
        tag: 'New',
        rating: 4.2,
        category: 'Business',
        short_description:
            'Includes audiobooks, spoken word resources, recorded lectures, and language learning tools. These are perfect for auditory learners and are available on physical media or through our digital platforms.',
    },
    
];

const MyCollections = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredBooks = selectedCategory === 'All' ? books : books.filter((b) => b.category === selectedCategory);

    return (
        <section className="mx-auto max-w-screen-2xl px-4 py-14 lg:px-20">
            {/* Title */}
            <div className="mx-auto mb-10 max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Library Collection Description</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Our library provides a rich and diverse collection of materials in both physical and digital formats to support research,
                    learning, and personal growth. Below are the key types of resources available in our collection:
                </p>
            </div>
            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="group relative cursor-pointer overflow-hidden transition">
                        {/* Image with overlay */}
                        <div className="relative overflow-hidden">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Gradient Overlay + Button */}
                            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                                <Link
                                    href={`/collections/${book.id}`}
                                    className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-yellow-400 hover:text-white"
                                >
                                    Read Now
                                </Link>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="space-y-1 py-4">
                            <h3 className="line-clamp-2 text-base font-semibold text-gray-800 dark:text-white">{book.title}</h3>
                            <p className="line-clamp-2 text-[14px] text-gray-800 dark:text-white">{book.short_description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyCollections;
