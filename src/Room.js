import './Room.css';

export default function Room({
  text,
  isClean,
  description,
  isDescriptionVisible,
}) {
  const statusClassName = isClean
    ? 'Room__status Room__status-clean'
    : 'Room__status Room__status-dirty';
  return (
    <section className="Room">
      <div class="Room__header">
        {text}
        <div className={statusClassName}></div>
      </div>

      {isDescriptionVisible && <p class="Room__description">{description}</p>}
    </section>
  );
}
