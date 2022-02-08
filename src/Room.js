import './Room.css';

export default function Room({text, isClean}) {
  return <section className="Room">{text} {isClean ? '🦾' : '🪰'}</section>;
}

