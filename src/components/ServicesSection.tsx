"use client";
import { motion } from "framer-motion";
import { Code, PenTool, Layers, Smartphone, Database } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using React, Next.js, and TypeScript.",
    icon: <Code size={40} className="text-blue-400" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing user-friendly and visually appealing interfaces that enhance user experience.",
    icon: <PenTool size={40} className="text-purple-400" />,
  },
  {
    id: 3,
    title: "Architectural Designs",
    description:
      "Creating architectural blueprints and 3D visualizations for modern building projects.",
    icon: <Layers size={40} className="text-green-400" />,
  },
  {
    id: 4,
    title: "Mobile-Responsive Design",
    description:
      "Ensuring websites are fully responsive and optimized for all devices.",
    icon: <Smartphone size={40} className="text-orange-400" />,
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description:
      "Developing both frontend and backend solutions with Next.js, Firebase, and Node.js.",
    icon: <Database size={40} className="text-yellow-400" />,
  },
];

// Card variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
  hover: {
    scaleY: 0.9, // Scale in vertically
    scaleX: 0.9, // Scale in horizontally
    rotateX: "10deg", // Add slight rotation for depth
    rotateY: "10deg", // Add slight rotation for depth
    boxShadow: "0 12px 24px rgba(0, 255, 255, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  },
};

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 py-12 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-white mb-6">
          My <span className="text-blue-300">Services</span>
        </h1>
        <p className="text-gray-300 mb-12">
          From <strong>frontend development</strong> to{" "}
          <strong>architectural designs</strong>, I craft experiences that merge
          aesthetics and functionality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              animate={{
                y: [0, -4, 0],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: id * 0.2,
                },
              }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-gray-300 mt-3">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
