'use client';
import { useState } from "react";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FiGithub, FiSend, FiMail } from 'react-icons/fi';

export default function ContactSection() {
            {/**  @typescript-eslint/no-unused-vars*/}
            const [loading] = useState(false);

  return (
    <section className="py-20" id='contact'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>

          <p className="text-text/80 mb-12">
          
            Have a project in mind? Let&apos;s discuss how I can help bring it to life.
          </p>

          <form className="space-y-6 mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-background dark:bg-primary/10 border border-text/20"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-background dark:bg-primary/10 border border-text/20"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background dark:bg-primary/10 border border-text/20"
            />
            <Button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 transition-all py-3 px-6 rounded-lg font-semibold"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            Sending...
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
          </form>

          <div className="flex justify-center gap-6">
            <a href="mailto:doyextech@gmail.com" className="text-accent hover:text-accent/80">
              <FiMail className="w-8 h-8" />
            </a>
            <a href="https://github.com/mbdulrohim" className="text-accent hover:text-accent/80">
              <FiGithub className="w-8 h-8" />
            </a>
            {/* <a href="#" className="text-accent hover:text-accent/80">
              <FiLinkedin className="w-8 h-8" />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}