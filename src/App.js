import { useEffect, useMemo, useState } from "react";
import ContentSection from "./components/ContentSection";
import SliderSection from "./components/SliderSection";
import { siteContent } from "./data/siteContent";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [firmSlide, setFirmSlide] = useState(0);
  const [strategySlide, setStrategySlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = siteContent.navigation;

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
            Investor Relations
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
          {sections.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
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
            <h3>{siteContent.footer.heading}</h3>
            <p>
              {siteContent.footer.description}{" "}
              <a href={siteContent.footer.links[0].href}>
                {siteContent.footer.contactLabel}
              </a>
            </p>
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
