import { useEffect, useMemo, useState } from "react";
import ContactPage from "./components/ContactPage";
import ContentSection from "./components/ContentSection";
import SliderSection from "./components/SliderSection";
import { siteContent } from "./data/siteContent";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [firmSlide, setFirmSlide] = useState(0);
  const [strategySlide, setStrategySlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const sections = useMemo(() => {
    const items = [...siteContent.navigation];
    return [
      items[0],
      { id: "section1b", label: "축하영상" },
      ...items.slice(1)
    ];
  }, []);

  const menuItems = useMemo(
    () => [...sections, { id: "contact", label: "CONTACT" }],
    [sections]
  );

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(elements.indexOf(entry.target));
          }
        });
      },
      { threshold: 0.58 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, []);

  const firmSlides = useMemo(
    () => [
      siteContent.firm.overview,
      {
        title: siteContent.firm.numbersTitle,
        renderContent: () => (
          <div className="number-grid">
            {siteContent.firm.numbers.map((item) => (
              <div key={item.label}>
                <strong>
                  {item.value}
                  {item.unit && <small> {item.unit}</small>}
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )
      }
    ],
    []
  );

  const scrollNext = () => {
    const nextIndex =
      currentSection === sections.length - 1 ? 0 : currentSection + 1;
    document.getElementById(sections[nextIndex].id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const handleMenuNavigate = (item) => {
    setMenuOpen(false);

    if (item.id === "contact") {
      setActivePage("contact");
      return;
    }

    setActivePage("home");
    requestAnimationFrame(() => {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#section1" aria-label="MBK Partners home">
          <img src="/assets/logo_white.png" alt="MBK Partners" />
        </a>
        <div className="header-actions">
          <a
            className="investor-link"
            href={siteContent.investorRelationsUrl}
            target="_blank"
            rel="noreferrer"
          >
            솔루션도메인OR대리매매알려주는랜딩넣어도되는자리
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <aside className="section-nav" aria-label="Homepage sections">
        {sections.map((item, index) => (
          <a
            className={currentSection === index ? "active" : ""}
            href={`#${item.id}`}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </aside>

      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="menu-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <nav>
          {menuItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={(event) => {
                event.preventDefault();
                handleMenuNavigate(item);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        {activePage === "contact" ? (
          <ContactPage onBackToHome={() => setActivePage("home")} />
        ) : (
          <>
            <section className="panel hero" id="section1">
              <div className="video-bg">
                <iframe
                  src={siteContent.hero.videoUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="MBK Partners background video"
                />
              </div>
              <div className="panel-content hero-content">
                <h1>
                  <span>{siteContent.hero.title}</span>
                </h1>
                <p>{siteContent.hero.description}</p>
              </div>
            </section>

            <section
              className="panel bg-firm"
              id="section1b"
              style={{
                minHeight: "auto",
                backgroundImage: "url('/assets/main_visual_2_1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="panel-content" style={{ maxWidth: "940px" }}>
                <h2 style={{ marginBottom: "1.25rem" }}>축하영상</h2>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundImage: "url('/assets/main_visual_2_1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "1rem",
                    textAlign: "center"
                  }}
                >
                  여기에영상주소수정대기
                </div>
              </div>
            </section>

            <SliderSection
              id="section2"
              className="bg-firm"
              slides={firmSlides}
              activeSlide={firmSlide}
              onSlideChange={setFirmSlide}
            />

            <SliderSection
              id="section3"
              className="bg-strategy"
              slides={siteContent.strategy}
              activeSlide={strategySlide}
              onSlideChange={setStrategySlide}
            />

            <ContentSection id="section4" className="bg-team" {...siteContent.team} />
            <ContentSection
              id="section5"
              className="bg-portfolio"
              {...siteContent.portfolio}
            />

            <section className="panel bg-news" id="section6">
              <div className="panel-content news-content">
                <h2>{siteContent.news.title}</h2>
                <p>{siteContent.news.description}</p>
                <ul className="news-list">
                  {siteContent.news.items.map((item) => (
                    <li key={item.title}>
                      <a href={item.href}>
                        <time>{item.date}</time>
                        <strong>{item.title}</strong>
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="outline-button" href={siteContent.news.button.href}>
                  {siteContent.news.button.label}
                </a>
              </div>
            </section>

            <footer className="site-footer">
              <div>
                <div>
                  <h3>{siteContent.footer.heading}</h3>
                  <p>
                    {siteContent.footer.description}{" "}
                    <a
                      href="#contact"
                      onClick={(event) => {
                        event.preventDefault();
                        setActivePage("contact");
                      }}
                    >
                      {siteContent.footer.contactLabel}
                    </a>
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(0, 0, 0, 0.16)"
                  }}
                >
                  <h3 style={{ color: "#d11a2a", fontWeight: 700 }}>
                    {siteContent.footer.secondaryContact.heading}
                  </h3>
                  <p style={{ color: "#000", fontWeight: 600, fontSize: "15px", lineHeight: 1.45, whiteSpace: "pre-line" }}>
                    {siteContent.footer.secondaryContact.description}
                  </p>
                  <a
                    href="https://www.fss.or.kr/fss/job/lrgInfo/totalView.do?viewType=BODY&lrgClsfcNo=C00861205505922573"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "10px",
                      padding: "7px 12px",
                      border: "1px solid #c7c7c7",
                      borderRadius: "999px",
                      background: "#f3f3f3",
                      color: "#222",
                      fontWeight: 500,
                      fontSize: "12px",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)"
                    }}
                  >
                    <img
                      src="/assets/fss-logo.svg"
                      alt="금융감독원"
                      style={{ width: "18px", height: "18px", objectFit: "contain" }}
                    />
                    {siteContent.footer.secondaryContact.contactLabel}
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <nav>
                  {siteContent.footer.links.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </nav>
                <p>{siteContent.footer.copyright}</p>
              </div>
            </footer>
          </>
        )}
      </main>

      <button
        className="scroll-control"
        type="button"
        onClick={scrollNext}
        aria-label={
          currentSection === sections.length - 1 ? "Back to top" : "Next section"
        }
      >
        <span />
      </button>
    </>
  );
}

export default App;
