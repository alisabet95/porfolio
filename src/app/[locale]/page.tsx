'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, easeOut } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import LanguageSwitcher from './langswitcher';
import Image from 'next/image';
import { FaSquareInstagram } from 'react-icons/fa6';
import styles from './home.module.css';

export default function HomePage() {
  const t = useTranslations('Portfolio');
  const locale = useLocale();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div   className={styles.headerText}>
              <h1 className={styles.h1}>{t('name')}</h1>
              <p dir='rtl' className={styles.intro}>{t('intro')}</p>
              <motion.div className={styles.taglineWrapper} variants={itemVariants}>
                <p className={styles.tagline}>
                  {locale === 'en'
                    ? 'Crafting seamless digital experiences with a passion for innovation and precision.'
                    : 'ایجاد تجربه‌های دیجیتال بی‌نقص با اشتیاق به نوآوری و دقت.'}
                </p>
              </motion.div>
            </div>
            <motion.div className={styles.imageContainer} variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Image
                src="/ali.jpg"
                alt="Ali Sabet"
                width={220}
                height={220}
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
            <LanguageSwitcher current={locale} />
          </motion.div>
        </div>
      </header>

      {/* About Me Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 className={styles.h2} initial="hidden" animate="visible" variants={containerVariants}>
            {locale === 'en' ? 'About Me' : 'درباره من'}
          </motion.h2>
          <motion.div className={styles.aboutContent} variants={containerVariants} initial="hidden" animate="visible">
            {locale === 'en' && (
              <>
                <p className={styles.paragraph}>
                  I’m a dedicated Full-Stack Developer with over 5 years of experience crafting innovative and scalable web applications. My expertise lies in modern JavaScript frameworks, backend technologies, and creating intuitive user experiences that leave a lasting impact.
                </p>
                <p className={styles.paragraph}>
                  When I’m not coding, you can find me exploring new technologies, contributing to open-source projects,solving unsolvable puzzles, reading a good muder-mystery book or enjoying a refreshing hike in nature.
                </p>
              </>
            )}
            {locale === 'fa' && (
              <>
                <p className={styles.paragraph}>
                  من یک توسعه‌دهنده فول‌استک با بیش از سه سال تجربه در ساخت برنامه‌های وب حرفه‌ای و نوآورانه هستم. تخصص من در چارچوب‌های مدرن جاوااسکریپت، فناوری‌های بک‌اند و ایجاد تجربه‌های کاربری بصری است که تأثیر ماندگاری دارند.
                </p>
                <p className={styles.paragraph}>
              <br />وقتی کد نمی‌نویسم، مشغول مطالعه فناوری‌های جدید، مشارکت در پروژه‌های متن‌باز، لذت بردن از حل کردن یک پازل پیچیده یا خواندن یک کتاب جنایی هستم.
                  (اگه شما هم آگاتا کریستی رو خیلی دوست دارین رفیق من هستین)
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <motion.h2 className={styles.h2} initial="hidden" animate="visible" variants={containerVariants}>
            {t('skills.title')}
          </motion.h2>
          <motion.div className={styles.skillsGrid} variants={containerVariants} initial="hidden" animate="visible">
            {t.raw('skills.list').map((skill: string, index: number) => (
              <motion.div
                key={index}
                className={`${styles.skillCard} ${styles[`skillColor${index % 4}`]}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 className={styles.h2} initial="hidden" animate="visible" variants={containerVariants}>
            {t('projects.title')}
          </motion.h2>
          <motion.div className={styles.projectsGrid} variants={containerVariants} initial="hidden" animate="visible">
            {t.raw('projects.list').map((project: { name: string; description: string; url: string }, index: number) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h3 className={styles.h3}>{project.name}</h3>
                <p className={styles.paragraph}>{project.description}</p>
                <p className={styles.projectMeta}>
                  <strong>{locale === 'en' ? 'Technologies:' : 'فناوری‌ها:'}</strong>{' '}
                   Next.js, Prisma, MySQL, React, Tailwind
                </p>
                <p className={styles.projectMeta}>
                  <strong>{locale === 'en' ? 'Impact:' : 'تأثیر:'}</strong>{' '}
               {locale === 'en' ?
                  (index === 0 ? 'Engaged 50+ local businesses in Rasht' : 'Increased online sales by 30%') : (
                    index === 0 ? "افزایش فروش بیزینسهای شهری" :"طراحی پلتفورم فروش و افزایش 30درصدی"
                  )}
                </p>
                <div className={styles.projectLinkWrapper}>
                  <a href={project.url} target="_blank" className={styles.projectLink}>
                    {locale === 'en' ? 'Visit Project →' : '→ مشاهده پروژه'} 
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <motion.h2 className={styles.h2} initial="hidden" animate="visible" variants={containerVariants}>
            {t('contact.title')}
          </motion.h2>
          <motion.p className={styles.paragraph} style={{marginBottom:"30px"}} variants={containerVariants} initial="hidden" animate="visible">
            {locale === 'en'
              ? 'Interested in collaborating or have a project in mind? Let’s connect and bring your ideas to life!'
              : 'علاقه‌مند به همکاری هستید یا  ایده‌ای برای پروژه دارید؟  خوشحال میشم با من ارتباط برقرار کنید و ایده‌هامونو  به واقعیت تبدیل کنیم!'}
          </motion.p>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className={styles.contactLinks}>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/ali.ssabet"
                target="_blank"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaSquareInstagram className={styles.socialIconInstagram} />
                Instagram
              </a>
              <a
                href="mailto:ali.ssabet1995@gmail.com"
                target="_blank"
                aria-label="Email"
                className={styles.socialLink}
              >
                <BiLogoGmail className={styles.socialIconGmail} />
                Gmail
              </a>
              <a
                href="https://github.com/alisabet95"
                target="_blank"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <FaGithub className={styles.socialIconGithub} />
                GitHub
              </a>
              <a
                href="https://t.me/ali_ssabet"
                target="_blank"
                aria-label="Telegram"
                className={styles.socialLink}
              >
                <FaTelegram className={styles.socialIconTelegram} />
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <motion.p className={styles.footerText} variants={containerVariants} initial="hidden" animate="visible">
            © 2025 Ali Sabet | <span className={styles.footerHighlight}>{t('footer')}</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}