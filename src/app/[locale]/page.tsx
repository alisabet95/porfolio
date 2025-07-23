'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import {  FaGithub, FaTelegram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import LanguageSwitcher from './langswitcher';
import { FaSquareInstagram } from 'react-icons/fa6';


export default function HomePage() {
  const t = useTranslations('Portfolio');
  const locale = useLocale();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-between items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('name')}</h1>
              <p className="text-lg md:text-2xl max-w-2xl">{t('intro')}</p>
            </div>
            <LanguageSwitcher current={locale} />
          </motion.div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center text-gray-600"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locale === 'en' && (
              <p className="mb-4">
                I’m a passionate Full-Stack Developer with over 5 years of experience building innovative web applications. My expertise spans modern JavaScript frameworks and backend technologies, with a focus on creating user-friendly, scalable solutions.
              </p>
            )}
            {locale === 'fa' && (
              <>
                <p className="mb-4">
                  من یک توسعه‌دهنده مشتاق با علاقه به فناوری‌های نوین و حل مسائل پیچیده هستم. هدف من ایجاد تجربه‌های کاربری بی‌نظیر و کمک به رشد کسب‌وکارهای دیجیتال است.
                </p>
                <p className="mb-4">
                  در اوقات فراغتم، به مطالعه در مورد فناوری‌های جدید، پیاده‌روی و کمک به پروژه‌های متن‌باز علاقه دارم.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t('skills.title')}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.raw('skills.list').map((skill: string, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center text-gray-700 font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t('projects.title')}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.raw('projects.list').map((project: { name: string; description: string; url: string }, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-gray-500 mb-4">
                  <strong>Technologies:</strong> {index === 0 ? 'Next.js, Prisma, MySQL' : 'React, Tailwind CSS'}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Impact:</strong> {index === 0 ? 'Engaged 50+ local businesses in Rasht' : 'Increased online sales by 30%'}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  Visit Project →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6 max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
           {locale === 'en' ?  <span>Interested in collaborating or have a project in mind? Let’s connect and bring your ideas to life!</span>
           : <span>     اگر دوست دارین با من ارتباط برقرار کنین، راههای زیر هست{<br />} خوشحال میشم بشناسمتون</span>}
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
     
            {/* Social Links */}
            <div className="flex gap-4 justify-center items-center text-lg">
              <a
                href="https://instagram.com/ali.ssabet"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors flex items-center gap-2"
              >
                <FaSquareInstagram className="text-2xl text-pink-500" />
                Instagram
              </a>
              <a
                href="mailto:ali.ssabet1995@gmail.com"
                target="_blank"
                aria-label="Email"
                className="hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <BiLogoGmail className="text-2xl text-red-500" />
                Gmail
              </a>
              <a
                href="https://github.com/alisabet95"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                <FaGithub className="text-2xl text-purple-400" />
                GitHub
              </a>
              <a
                href="https://t.me/ali_ssabet"
                target="_blank"
                aria-label="Telegram"
                className="hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <FaTelegram className="text-2xl text-blue-300" />
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-sm text-white"
          >
            © 2025 Ali Sabet | <span className="text-rose-800">{t('footer')}</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}