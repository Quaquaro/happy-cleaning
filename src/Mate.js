import './Room.css';

export default function Mate({ name }) {
  return (
    <section className="Room">
      <div class="Room__header">{name}</div>
    </section>
  );
}
