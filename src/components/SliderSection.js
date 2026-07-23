export default function SliderSection({
  id,
  className,
  slides,
  activeSlide,
  onSlideChange
}) {
  return (
    <section className={`panel ${className}`} id={id}>
      <div className="horizontal-slides">
        {slides.map((slide, index) => (
          <article
            className={`horizontal-slide slide-${index + 1} ${
              activeSlide === index ? "active" : ""
            }`}
            key={slide.title}
          >
            <div className="panel-content">
              <h2>{slide.title}</h2>
              {slide.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {slide.renderContent?.()}
              {slide.button && (
                <a className="outline-button" href={slide.button.href}>
                  {slide.button.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="slide-dots" aria-label={`${slides[0].title} slides`}>
        {slides.map((slide, index) => (
          <button
            className={activeSlide === index ? "active" : ""}
            key={slide.title}
            onClick={() => onSlideChange(index)}
            type="button"
            aria-label={`${index + 1}번 슬라이드`}
            aria-pressed={activeSlide === index}
          />
        ))}
      </div>
    </section>
  );
}
