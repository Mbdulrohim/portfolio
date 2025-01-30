import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Bio Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/placeholder-avatar.png" // Replace with your image
                alt="Abdulrohim Mustapha"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4 text-gray-600">
              <p>Full-stack developer specializing in...</p>
              {/* Add your bio */}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Map through skills */}
            {['React', 'Solidity', 'Kotlin', 'AWS'].map((skill) => (
              <div 
                key={skill}
                className="bg-white p-4 rounded-lg border border-highlight/20 shadow-sm"
              >
                <h4 className="font-semibold text-primary">{skill}</h4>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}