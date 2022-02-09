import './Room.css';
import { useState } from 'react';

export default function Room({ text, description, isDescriptionVisible }) {
  const [isClean, setIsClean] = useState(false);

  const statusClassName = isClean
    ? 'Room__status Room__status-clean'
    : 'Room__status Room__status-dirty';
    
  return (
    <section onClick={handleClick} className="Room">
      <div class="Room__header">
        {text}
        <div className={statusClassName}></div>
      </div>

      {isDescriptionVisible && <p class="Room__description">{description}</p>}
    </section>
  );


function handleClick() {
  setIsClean(!isClean);
}

}


