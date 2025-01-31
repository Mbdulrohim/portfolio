'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Client Name',
    role: 'CEO, Tech Startup',
    text: 'Abdulrohim delivered exceptional results on our blockchain project...',
  },
  // Add more testimonials
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            What clients and colleagues say about my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background dark:bg-primary/10 rounded-xl shadow-lg"
            >
              <p className="text-text/80 mb-6">"{testimonial.text}"</p>
              <div className="border-t border-text/20 pt-6">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-text/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}