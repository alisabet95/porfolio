/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/[locale]/page.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, easeOut } from "framer-motion";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import LanguageSwitcher from "./langswitcher";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import styles from "./home.module.css";
import ProjectGallery from "@/components/ProjectGallery";
import { allProjectImages } from "@/const/images";

export default function HomePage() {
  const t = useTranslations("Portfolio");
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
            <div className={styles.headerText}>
              <h1 className={styles.h1}>{t("name")}</h1>
              <p dir="rtl" className={styles.intro}>
                {t("intro")}
              </p>
              <motion.div
                className={styles.taglineWrapper}
                variants={itemVariants}
              >
                <p className={styles.tagline}>
                  {locale === "en"
                    ? "Crafting seamless digital experiences with a passion for innovation and precision."
                    : "ایجاد تجربه‌های دیجیتال بی‌نقص با اشتیاق به نوآوری و دقت."}
                </p>
              </motion.div>
            </div>
            <motion.div
              className={styles.imageContainer}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
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
          <motion.h2
            className={styles.h2}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {locale === "en" ? "About Me" : "درباره من"}
          </motion.h2>
          <motion.div
            className={styles.aboutContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locale === "en" && (
              <>
                <p className={styles.paragraph} style={{ color: "#f0f0f0" }}>
                  I&apos;m a dedicated Full-Stack Developer with over 5 years of
                  experience crafting innovative and scalable web applications.
                  My expertise lies in modern JavaScript frameworks, backend
                  technologies, and creating intuitive user experiences that
                  leave a lasting impact.
                </p>
                <p className={styles.paragraph} style={{ color: "#f0f0f0" }}>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects,solving
                  unsolvable puzzles, reading a good muder-mystery book or
                  enjoying a refreshing hike in nature.
                </p>
              </>
            )}
            {locale === "fa" && (
              <>
                <p className={styles.paragraph} style={{ color: "#f0f0f0" }}>
                  من یک توسعه‌دهنده فول‌استک با بیش از سه سال تجربه در ساخت
                  برنامه‌های وب و اپلیکیشن اندرویدِ حرفه‌ای و نوآورانه هستم.
                  تخصص من در فریم‌ورکهای مدرن جاوااسکریپت، فناوری‌های بک‌اند و
                  ایجاد تجربه‌های کاربری بصری است که تأثیر ماندگاری دارند.
                </p>
                <p className={styles.paragraph} style={{ color: "#f0f0f0" }}>
                  <br />
                  وقتی کد نمی‌نویسم، مشغول مطالعه فناوری‌های جدید، مشارکت در
                  پروژه‌های متن‌باز، لذت بردن از حل کردن یک پازل پیچیده یا
                  خواندن یک کتاب جنایی هستم. (اگه شما هم آگاتا کریستی رو خیلی
                  دوست دارین رفیق من هستین)
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.h2}
            style={{ color: "#000" }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t("skills.title")}
          </motion.h2>
          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.raw("skills.list").map((skill: string, index: number) => (
              <motion.div
                key={index}
                className={`${styles.skillCard} ${
                  styles[`skillColor${index % 4}`]
                }`}
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
          <motion.h2
            className={styles.h2}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t("projects.title")}
          </motion.h2>
          <motion.div
            className={styles.projectsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {t.raw("projects.list").map((project: any, index: number) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h3 className={styles.h3}>{project.name}</h3>
                <p className={styles.paragraph}>{project.description}</p>

                {/* Technologies */}
                <p className={styles.projectMeta}>
                  <strong>
                    {locale === "en" ? "Technologies:" : "فناوری‌ها:"}
                  </strong>{" "}
                  {project.name === "Danai-e" || project.name === "دانای-ای"
                    ? "React Native, Expo, Next.js, Express.js, AI Integration"
                    : project.name === "Kalario" || project.name === "کالاریو"
                    ? "React Native, Expo, Next.js, Express.js, MySQL"
                    : project.name === "Baremi" || project.name === "بارمی"
                    ? "React Native, Expo, JavaScript"
                    : project.name === "Gilly Cooking App" ||
                      project.name === "اپ آشپزی گیلی"
                    ? "React Native, AI Integration, Firebase"
                    : "Next.js, Prisma, MySQL, React, Tailwind"}
                </p>

                {/* Impact */}
                <p className={styles.projectMeta}>
                  <strong>{locale === "en" ? "Impact:" : "تأثیر:"}</strong>{" "}
                  {project.name === "Danai-e" || project.name === "دانای-ای"
                    ? locale === "en"
                      ? "AI-powered quiz generation and visual learning platform"
                      : "پلتفرم تولید آزمون و یادگیری بصری مبتنی بر هوش مصنوعی"
                    : project.name === "Kalario" || project.name === "کالاریو"
                    ? locale === "en"
                      ? "Complete e-commerce solution with real-time messaging"
                      : "راه‌حل کامل فروشگاهی با پیام‌رسانی لحظه‌ای"
                    : project.name === "Baremi" || project.name === "بارمی"
                    ? locale === "en"
                      ? "Open-source tool for educators"
                      : "ابزار متن‌باز برای مربیان"
                    : project.name === "Gilly Cooking App" ||
                      project.name === "اپ آشپزی گیلی"
                    ? locale === "en"
                      ? "AI-powered cooking assistant"
                      : "دستیار آشپزی مبتنی بر هوش مصنوعی"
                    : locale === "en"
                    ? index === 0
                      ? "Engaged 50+ local businesses in Rasht"
                      : "Increased online sales by 30%"
                    : index === 0
                    ? "افزایش فروش بیزینسهای شهری"
                    : "طراحی پلتفورم فروش و افزایش 30درصدی"}
                </p>

                {/* Project Link */}
                <div className={styles.projectLinkWrapper}>
                  <a
                    href={project.url}
                    target="_blank"
                    className={styles.projectLink}
                  >
                    {locale === "en" ? "Visit Project →" : "→ مشاهده پروژه"}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section - NEW SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.h2}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {locale === "en" ? "Project Gallery" : "آلبوم تصاویر پروژه‌ها"}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProjectGallery
              images={allProjectImages}
              title={locale === "en" ? "All Projects" : "همه پروژه‌ها"}
              locale={locale}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.h2}
            style={{ color: "#000" }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className={styles.paragraph}
            style={{ marginBottom: "30px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locale === "en"
              ? "Interested in collaborating or have a project in mind? Let's connect and bring your ideas to life!"
              : "علاقه‌مند به همکاری هستید یا  ایده‌ای برای پروژه دارید؟  خوشحال میشم با من ارتباط برقرار کنید و ایده‌هامونو  به واقعیت تبدیل کنیم!"}
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={styles.contactLinks}
          >
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
          <motion.p
            className={styles.footerText}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            © 2025 Ali Sabet |{" "}
            <a
              href="https://todo-album.vercel.app"
              target="_blank"
              aria-label="Natoure rasht"
              className={styles.footerHighlight}
            >
              {t("footer")}
            </a>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
