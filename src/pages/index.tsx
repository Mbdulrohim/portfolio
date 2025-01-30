import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Inter, Manrope, Poppins } from "next/font/google";

// Configure fonts (remove Geist, use original fonts)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={`${inter.variable} ${manrope.variable} ${poppins.variable} min-h-screen bg-background p-8`}>
      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mt-20 md:mt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary"
          >
            Abdulrohim Mustapha
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mt-4 mb-8"
          >
            Full-Stack & Blockchain Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              href="/about"
              className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-[#2ea3d6] transition-colors font-semibold"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-highlight text-highlight px-6 py-3 rounded-lg hover:bg-highlight/10 transition-colors font-semibold"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Animated Tech Icons (Add your icons later) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-8"
          >
            {/* Add your tech icons here */}
            <div className="w-12 h-12 bg-primary/10 rounded-lg"></div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg"></div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg"></div>
          </motion.div>
        </section>

        {/* Add other sections here */}
      </main>
    </div>
  );
}