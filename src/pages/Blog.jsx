import { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Blog = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The first blog of the year',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente molestias recusandae fugiat repellendus laboriosam iusto tempora, officiis minima rerum labore maiores aspernatur perspiciatis porro ipsam possimus. Doloribus, architecto. Accusantium?',
      author: 'orange coding academy',
      date: '12/12/2024', 
      category: 'news',
      image: '/assets/p1.jpg',
    },
    {
      id: 2,
      title: 'blog.posts.post2.title',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente molestias recusandae fugiat repellendus laboriosam iusto tempora, officiis minima rerum labore maiores aspernatur perspiciatis porro ipsam possimus. Doloribus, architecto. Accusantium?',
      author: 'Langitude MD SOS',
      date: '11/11/2024',
      category: 'update',
      image: '/assets/p2.jpg',
    },
    {
      id: 3,
      title: 'blog.posts.post3.title',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente molestias recusandae fugiat repellendus laboriosam iusto tempora, officiis minima rerum labore maiores aspernatur perspiciatis porro ipsam possimus. Doloribus, architecto. Accusantium?',
      author: 'John Doe',
      date: '22/22/2025',
      category: 'Scholarship',
      image: '/assets/p3.jpg',
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[image:url('/assets/p7.webp')] bg-cover bg-center text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blogs
            </h1>
            <p className="text-xl">Get the latest news and updates from our blog</p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={"Search blog here"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white s rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-2" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-2" />
                      {post.author}
                    </span>
                  </div>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 text-red-500">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{post.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-red-600 hover:text-primary-700 font-semibold"
                  >
                    {"Read More"} 
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 