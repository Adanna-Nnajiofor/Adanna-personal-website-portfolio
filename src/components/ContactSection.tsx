"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch border border-white/20 animate-float"
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="md:w-2/3 w-full p-6"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6 text-center md:text-left"
          >
            Let Us Connect
            <motion.span
              className="ml-1 text-blue-300"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h2>

          {submitted ? (
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-green-300 text-center text-lg font-semibold"
            >
              Thank you! Your message has been sent.
            </motion.p>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              action="https://formsubmit.co/adanna.nnajiofor@gmail.com"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
                (e.target as HTMLFormElement).submit();
              }}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-300 font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={`Your ${field}`}
                    className="w-full mt-1 p-3 border border-gray-500 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-300 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full mt-1 p-3 border border-gray-500 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  rows={4}
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-md transition shadow-lg hover:shadow-xl hover:animate-pulse"
                disabled={submitted}
              >
                {submitted ? "Sending..." : "✉️ Send Message"}
              </motion.button>
            </motion.form>
          )}
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          className="md:w-1/2 w-full p-6 flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
          <motion.div
            className="grid grid-cols-4 gap-5 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 w-full max-w-sm"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                href: "https://instagram.com/Damzysparkle",
                icon: <FaInstagram size={30} />,
                color: "text-pink-500",
              },
              {
                href: "https://github.com/Adanna-Nnajiofor",
                icon: <FaGithub size={30} />,
                color: "text-gray-300",
              },
              {
                href: "https://facebook.com/AdannaNnajiofor.5",
                icon: <FaFacebook size={30} />,
                color: "text-blue-500",
              },
              {
                href: "https://twitter.com/AdannaNnajiofor",
                icon: <FaTwitter size={30} />,
                color: "text-blue-400",
              },
              {
                href: "https://linkedin.com/in/AdannaNnajiofor",
                icon: <FaLinkedin size={30} />,
                color: "text-blue-700",
              },
              {
                href: "mailto:adanna.nnajiofor@gmail.com",
                icon: <FaEnvelope size={30} />,
                color: "text-red-500",
              },
              {
                href: "tel:+2348160507179",
                icon: <FaPhone size={30} />,
                color: "text-green-500",
              },
              {
                href: "https://wa.me/2348160507179",
                icon: <FaWhatsapp size={30} />,
                color: "text-green-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                <Link href={item.href} target="_blank">
                  <span
                    className={`${item.color} text-4xl hover:drop-shadow-lg`}
                  >
                    {item.icon}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
