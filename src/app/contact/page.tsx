'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally send the form data to an API
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 md:py-32 container-padding max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-16 relative inline-block artistic-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
          <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[var(--primary)]"></span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[var(--primary-light)]">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              I'd love to hear from you! Whether you're interested in booking a photoshoot,
              have questions about my work, or just want to connect, feel free to reach out.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-medium mb-4 font-helvetica">Follow me on Instagram</h3>
              <a 
                href="https://instagram.com/niramay.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-white group transition-colors"
              >
                <FaInstagram className="text-3xl group-hover:text-[var(--primary)]" />
                <span className="text-lg font-helvetica">@niramay.jpg</span>
              </a>
            </div>
            
            <div className="border-l-2 border-[var(--primary)] pl-6 py-2">
              <p className="italic text-gray-400">
                "Photography is the story I fail to put into words."
              </p>
              <p className="text-gray-500 mt-2">— Destin Sparks</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="Booking">Booking Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Question">General Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-[var(--primary)] text-white font-medium rounded-sm hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitSuccess && (
                <motion.div 
                  className="bg-green-800/30 border border-green-700 text-green-200 p-3 rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 