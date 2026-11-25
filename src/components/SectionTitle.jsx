export default function SectionTitle({ eyebrow, title, description }) {
  return <div className="section-title mb-5"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
