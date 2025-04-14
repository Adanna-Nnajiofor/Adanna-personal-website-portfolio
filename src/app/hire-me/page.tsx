"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xaneqzzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Oops, something went wrong. Try again.");
      }
    } catch (error) {
      setSuccessMessage("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    "HTML & CSS",
    "Next.js",
    "TypeScript",
    "React.js",
    "UI/UX",
    "AutoCAD",
    "ArchiCAD",
    "Lumion",
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-16 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      {/* Left Section */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
          Crafting Spaces, Shaping Pixels
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-md mx-auto lg:mx-0">
          Whether it's designing architectural masterpieces or intuitive digital
          products — I blend form, function, and imagination into every project.
        </p>

        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.15 }}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-sm text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Right Section */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Let’s Build Something Beautiful
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Reach out, collaborate, or just say hello!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="What's your project about?"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder:text-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send size={20} className="animate-bounce" />}
          </motion.button>

          {successMessage && (
            <p className="text-center text-green-300 font-medium mt-3">
              {successMessage}
            </p>
          )}
        </form>

        <div className="mt-6 text-center">
          <Link href="/">
            <button
              type="button"
              className="px-6 py-2 bg-white/20 text-white border border-white/30 rounded-xl hover:bg-white/30 transition"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HireMe;
