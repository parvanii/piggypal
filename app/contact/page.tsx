'use client';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className='font-sans bg-[url("/your-about-bg.jpg")] bg-cover bg-center bg-no-repeat text-gray-800 dark:text-gray-200 min-h-screen transition-all duration-300'>
      
      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-pink-600 dark:text-pink-400'>
          Let's Chat! 💌
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8'>
          Have questions, feedback, or just want to say hi? PiggyPal is always happy to hear from you!
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/sign-in'
            className='group relative bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2'
          >
            Join PiggyPal
            <span className='animate-bounce'>💖</span>
          </Link>
          <a
            href='mailto:support@piggypal.com'
            className='group relative bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2'
          >
            Email Us
            <Mail className='w-5 h-5' />
          </a>
        </div>
      </section>

      {/* Contact Cards Section */}
<section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
  <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

    {/* Email */}
    <div className='group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1 text-center'>
      <div className='w-12 h-12 mx-auto mb-4 rounded-full bg-pink-500 flex items-center justify-center text-white text-xl shadow-lg'>
        <Mail />
      </div>
      <h3 className='text-lg font-bold mb-2'>Email Support</h3>
      <p className='text-sm text-gray-700 dark:text-gray-300 mb-3'>
        Drop us a line anytime! We usually respond within 24 hours.
      </p>
      <a
        href='mailto:support@piggypal.com'
        className='text-pink-600 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-300 transition-colors'
      >
        support@piggypal.com
      </a>
    </div>

    {/* Phone */}
    <div className='group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1 text-center'>
      <div className='w-12 h-12 mx-auto mb-4 rounded-full bg-rose-400 flex items-center justify-center text-white text-xl shadow-lg'>
        <Phone />
      </div>
      <h3 className='text-lg font-bold mb-2'>Phone Support</h3>
      <p className='text-sm text-gray-700 dark:text-gray-300 mb-3'>
        Talk to us directly for instant help.
      </p>
      <a
        href='tel:+911234567890'
        className='text-pink-600 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-300 transition-colors'
      >
        +91 12345 67890
      </a>
    </div>

    {/* Location */}
    <div className='group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1 text-center'>
      <div className='w-12 h-12 mx-auto mb-4 rounded-full bg-fuchsia-500 flex items-center justify-center text-white text-xl shadow-lg'>
        <MapPin />
      </div>
      <h3 className='text-lg font-bold mb-2'>Our Office</h3>
      <p className='text-sm text-gray-700 dark:text-gray-300 mb-3'>
        Pop in for a coffee or a friendly chat!
      </p>
      <div className='text-pink-600 dark:text-pink-400 font-medium'>
        456 AI Innovation Road<br />
        Bengaluru, Karnataka, India
      </div>
    </div>
  </div>
</section>


      {/* Fun Message Form */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400'>Send a Quick Message!</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-6'>
            Have something to share? Fill out this fun little form and we’ll get back to you in a jiffy.
          </p>
          <form className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none transition'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none transition'
            />
            <textarea
              placeholder='Your Message'
              rows={4}
              className='px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none transition'
            />
            <button
              type='submit'
              className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1'
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className='py-12 text-center'>
        <h2 className='text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400'>Follow PiggyPal</h2>
        <p className='text-gray-700 dark:text-gray-300 mb-6'>Stay connected and get the latest updates:</p>
        <div className='flex justify-center gap-6 text-pink-500 dark:text-pink-400'>
          <a href='#' className='hover:text-pink-600 transition transform hover:scale-110'><Twitter className='w-6 h-6'/></a>
          <a href='#' className='hover:text-pink-600 transition transform hover:scale-110'><Instagram className='w-6 h-6'/></a>
          <a href='#' className='hover:text-pink-600 transition transform hover:scale-110'><Linkedin className='w-6 h-6'/></a>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
