import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JC Insulation & Engineers | India's Leading Insulation Giant | 50+ Cr Turnover",
    template: "%s | JC Insulation & Engineers",
  },
  description:
    "India's premier industrial insulation company with 50+ Cr turnover, ISO 9001:2015 certified, 500+ projects. Expert in thermal, cold, acoustic insulation, fire proofing & cladding. Serving Pan-India since 2001.",
  metadataBase: new URL("https://www.jcinsulation.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* 🔔 NEWS TICKER */}
        <div className="news-ticker">
          <div className="ticker-move">
            {[
              "🏆 INDIA'S LEADING INSULATION GIANT | ",
              "💰 ₹50+ CR ANNUAL TURNOVER | ",
              "📈 CONSISTENT 25% YoY GROWTH | ",
              "🎯 500+ PROJECTS DELIVERED PAN-INDIA | ",
              "⭐ 22+ YEARS OF INDUSTRY EXCELLENCE | ",
              "✅ ISO 9001:2015 CERTIFIED | ",
            ].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* 🔝 TOP BAR */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span>📍 Vapi, Gujarat</span>
              <span>📧 jciepl@gmail.com</span>
              <span>📞 +91 92274 17886</span>
            </div>
          </div>
        </div>

        {/* 🧭 HEADER */}
        <header className="site-header">
          <div className="container header-inner">

            {/* LOGO */}
            <a href="/" className="logo-wrap" aria-label="JC Insulation & Engineers">
              <Image
                src="/images/branding/jc_logo.webp"
                alt="JC Insulation & Engineers Pvt. Ltd. Logo"
                width={180}
                height={60}
                priority
              />
            </a>

            {/* NAV */}
            <nav className="site-nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/clients">Clients</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </nav>

            {/* RIGHT */}
            <div className="header-right">
              <ThemeToggle />
              <a href="/contact" className="header-cta">Get Quote</a>
            </div>
          </div>
        </header>

        {/* 📄 PAGE CONTENT */}
        {children}

        {/* 🦶 FOOTER */}
        <footer className="site-footer">
          <div className="footer-main">
            <div className="container">
              <div className="footer-grid">

                {/* ABOUT */}
                <div className="footer-section footer-about">
                  <a href="/" className="logo-wrap">
                    <Image
                      src="/images/branding/jc_logo.webp"
                      alt="JC Insulation Logo"
                      width={160}
                      height={55}
                    />
                  </a>
                  <p>
                    Leading industrial insulation service provider since 2001,
                    delivering excellence across Gujarat & India.
                  </p>
                </div>

                {/* LINKS */}
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/services">Services</a>
                  <a href="/projects">Projects</a>
                  <a href="/contact">Contact</a>
                </div>

                {/* SERVICES */}
                <div className="footer-section">
                  <h3>Our Services</h3>
                  <a href="/services">Hot Insulation</a>
                  <a href="/services">Cold Insulation</a>
                  <a href="/services">Duct Insulation</a>
                  <a href="/services">Fire Proofing</a>
                </div>

                {/* CONTACT */}
                <div className="footer-section">
                  <h3>Contact</h3>
                  <p>📍 Vapi, Gujarat</p>
                  <p>📞 +91 92274 17886</p>
                  <p>📧 jciepl@gmail.com</p>
                </div>

              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container footer-bottom-inner">
              <p>© 2026 JC Insulation & Engineers Pvt. Ltd.</p>
              <p>
                <a
                  href="https://wa.me/message/OGH4J6DIANW7D1"
                  target="_blank"
                  rel="noopener"
                >
                  Nexora Digital
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* 📞 WHATSAPP */}
        <a
          href="https://wa.me/919227417886"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>

        {/* 🤖 CHATBOT */}
        <Chatbot />

      </body>
    </html>
  );
}
