export default function ContentSection({
  id,
  className,
  title,
  paragraphs,
  button
}) {
  return (
    <section className={`panel ${className}`} id={id}>
      <div className="panel-content">
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {button && (
          <a className="outline-button" href={button.href}>
            {button.label}
          </a>
        )}
      </div>
    </section>
  );
}
