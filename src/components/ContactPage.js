import { useState } from "react";

const offices = [
  {
    city: "Seoul",
    company:
      "MBK Partners LLC, MBK Partners Special Situations Ltd.",
    address:
      "24th Fl., D Tower D1, 17 Jongno 3-gil, Jongno-gu, Seoul, Korea 03155",
    telephone: "070번호주시면수정해드리겠습니다"
  },
  {
    city: "Tokyo",
    company: "MBK Partners K.K.",
    address:
      "18F Toranomon Hills Station Tower, 2-6-1 Toranomon, Minato-ku, Tokyo, 105-5518, Japan",
    telephone: "+81-3-4550-0430"
  },
  {
    city: "Hong Kong",
    company: "MBK Partners HK Limited",
    address:
      "Suite 3508-12, Two International Finance Centre, 8 Finance Street, Hong Kong",
    telephone: "+852-2296-0000"
  },
  {
    city: "Beijing",
    company:
      "MBK Partners Management Consulting (Shanghai) Co., Ltd., Beijing Branch",
    address:
      "1006, Tower 3 China Central Place, 77 Jianguo Road, Beijing, 100025, China",
    telephone: "+86-10-5737-1600"
  },
  {
    city: "Shanghai",
    company:
      "MBK Partners Management Consulting (Shanghai) Co., Ltd.",
    address:
      "Units 2903-2906, Phase Two ICC, No. 288 South Shaanxi Road, Shanghai 200031, China",
    telephone: "+86-21-3401-2800"
  }
];

const menuItems = [
  { label: "MAIN", href: "/#section1" },
  { label: "FIRM", href: "/#section2" },
  { label: "STRATEGY", href: "/#section3" },
  { label: "TEAM", href: "/#section4" },
  { label: "PORTFOLIO", href: "/#section5" },
  { label: "NEWS", href: "/#section6" },
  { label: "CONTACT", href: "/contact" }
];

function ContactPage({ onBackToHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = (event) => {
    if (onBackToHome) {
      event.preventDefault();
      onBackToHome();
      window.history.pushState({}, "", "/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const openHomeSection = (event, href) => {
    if (!onBackToHome || !href.startsWith("/#")) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();

    const sectionId = href.replace("/#", "");

    onBackToHome();
    window.history.pushState({}, "", `/#${sectionId}`);
    setMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 50);
  };

  return (
    <div className="contact-page">
      <header className="contact-page__header">
        <a
          className="contact-page__logo"
          href="/"
          onClick={goHome}
          aria-label="MBK Partners 메인으로 이동"
        >
          <img src="/assets/logo_white.png" alt="MBK Partners" />
        </a>

        <div className="contact-page__header-actions">
          <a
            className="contact-page__investor"
            href="?수정대기?"
            target="_blank"
            rel="noreferrer"
          >
            
          </a>

          <button
            className="contact-page__menu-button"
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`contact-page__menu ${
          menuOpen ? "contact-page__menu--open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          className="contact-page__menu-close"
          type="button"
          aria-label="메뉴 닫기"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <nav className="contact-page__menu-nav">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className={
                item.label === "CONTACT"
                  ? "contact-page__menu-current"
                  : ""
              }
              onClick={(event) => openHomeSection(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <section className="contact-page__visual">
        <div className="contact-page__video">
          <iframe
            src="https://player.vimeo.com/video/443284217?autoplay=1&loop=1&muted=1&title=0&background=1&byline=0&portrait=0"
            title="MBK Partners Contact"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>

        <div className="contact-page__visual-overlay" />

        <h1>Contact</h1>
      </section>

      <main className="contact-page__content">
        <div className="contact-page__office-list">
          {offices.map((office) => {
            const mapUrl =
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(office.address);

            return (
              <article
                className="contact-page__office"
                key={office.city}
              >
                <h2>{office.city}</h2>

                <div className="contact-page__office-information">
                  <h3>{office.company}</h3>

                  <ul>
                    <li>{office.address}</li>

                    <li>
                      <a href={`tel:${office.telephone}`}>
                        Tel: {office.telephone}
                      </a>
                    </li>
                  </ul>
                </div>

                <a
                  className="contact-page__directions"
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  DIRECTIONS
                </a>
              </article>
            );
          })}
        </div>
      </main>

      <button
        className="contact-page__top"
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        aria-label="페이지 맨 위로 이동"
      >
        <span>↑</span>
        <small>TOP</small>
      </button>

      <footer className="contact-page__footer">
        <div className="contact-page__footer-inner">
          <nav>
            <a href="/contact">Contact</a>

            <a
              href="https://www.mbkpartners.com/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy notice
            </a>

            <a
              href="https://www.mbkpartners.com/terms-of-use"
              target="_blank"
              rel="noreferrer"
            >
              Terms of use
            </a>
          </nav>

          <p>©2026 MBK Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;