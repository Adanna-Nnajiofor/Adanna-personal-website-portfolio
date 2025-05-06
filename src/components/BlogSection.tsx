"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "../data/blogs";

const BlogSection = () => {
  return (
    <div
      id="blog"
      className="min-h-screen flex flex-col items-center justify-center  px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Latest Articles
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Discover insights, tutorials, and experiences in frontend development,
          architecture, and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: blog.id * 0.1 }}
            className="relative group overflow-hidden bg-white shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-0 group-hover:opacity-80 transition-opacity" />
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-white relative z-10">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 group-hover:text-gray-300 relative z-10">
              {blog.date}
            </p>
            <p className="text-gray-700 mt-3 group-hover:text-gray-200 relative z-10">
              {blog.summary}
            </p>
            <Link
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-400 transition-all group-hover:text-white relative z-10"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
