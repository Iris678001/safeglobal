import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Permit to Work & LOTO Integration | Safeglobal EHS AI',
  description: 'Digital permit workflows with real-time clash detection, mobile contractor approvals, and geo-fenced active permits for next-generation facility safety.',
};

export default function PermitToWorkPage() {
  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <div className={styles.badge}>Next-Gen EHS Module</div>
        <h1 className={styles.title}>Intelligent Permit to Work</h1>
        <p className={styles.subtitle}>
          Transform complex high-risk operations into seamless, intelligent digital workflows. Our advanced Permit to Work module integrates real-time clash detection, Lockout/Tagout (LOTO) protocols, and geo-fenced safety boundaries to ensure total operational harmony and risk mitigation.
        </p>
      </header>

      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h3 className={styles.cardTitle}>Digital Workflows</h3>
          <p className={styles.cardText}>
            Eliminate paper trails. Generate, route, and approve permits instantly from anywhere. Our intelligent routing matrix ensures the right authorities sign off at the right time, drastically reducing administrative bottlenecks.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3 className={styles.cardTitle}>LOTO Integration</h3>
          <p className={styles.cardText}>
            Natively link Lockout/Tagout procedures to active permits. Verify isolation points digitally, mandate multi-point sign-offs, and ensure complete energy isolation before high-risk work begins.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3 className={styles.cardTitle}>Clash Detection</h3>
          <p className={styles.cardText}>
            Our AI continuously monitors active permits across your facility to automatically detect spatial or operational conflicts—preventing incompatible jobs (e.g., hot work near flammable transfers) from occurring simultaneously.
          </p>
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseContent}>
          <h2 className={styles.showcaseTitle}>Mobile <span>Contractor Approvals</span></h2>
          <p className={styles.showcaseText}>
            Empower your contractors to request, review, and sign off on permits directly from their mobile devices. Safeglobal&apos;s intuitive mobile interface brings the entire permit lifecycle to the field, ensuring safety compliance is never compromised by geographical distance.
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              On-the-go digital signatures and biometric verification.
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Real-time push notifications for permit status updates.
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Offline mode for remote areas with low connectivity.
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer} style={{ background: 'transparent', boxShadow: 'none' }}>
        </div>
      </section>

      <section className={`${styles.showcaseSection} ${styles.reverse}`}>
        <div className={styles.showcaseContent}>
          <h2 className={styles.showcaseTitle}>Geo-Fenced <span>Active Permits</span></h2>
          <p className={styles.showcaseText}>
            Visualize safety dynamically. Our interactive facility map overlays all active permits onto a digital twin of your site. Establishing geo-fenced boundaries restricts unauthorized personnel entry and triggers instant alerts during perimeter breaches.
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Live interactive mapping of all high-risk operations.
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Automated clash detection visually flagged on the map.
            </li>
            <li className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Integration with access control hardware via IoT.
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
           <div className={styles.imageWrapper}>
              <Image 
                src="/images/facility_map_ui.png" 
                alt="Facility Map showing active permits and clash detection" 
                fill 
                style={{ objectFit: 'cover' }}
              />
           </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.title} style={{ fontSize: '3rem', margin: '0 auto 32px' }}>Ready to Elevate Your Safety Standards?</h2>
        <p className={styles.subtitle} style={{ margin: '0 auto 48px' }}>
          Deploy Safeglobal&apos;s intelligent Permit to Work system today and achieve a zero-incident culture with streamlined operations.
        </p>

      </section>
    </div>
  );
}
