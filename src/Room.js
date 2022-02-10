import './Room.css';
import { useState } from 'react';

export default function Room({ text, description, isClean, toggleStatus }) {
  // const [isClean, setIsClean] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const statusClassName = isClean
    ? 'Room__status Room__status-clean'
    : 'Room__status Room__status-dirty';

  return (
    <section onClick={handleClick} className="Room">
      <div class="Room__header">
        {text}
        <button onClick={toggleStatus} className={statusClassName}></button>
      </div>

      {isDescriptionVisible && <p class="Room__description">{description}</p>}
    </section>
  );

  function handleClick() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }
}
