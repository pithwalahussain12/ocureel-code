import { useState } from 'react';
import logo from '../../../assets/ocureel__symbol.png'
import './style.css';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <img src={logo} alt="Logo" className="accordion-logo" />
        <h5 className="accordion-title">{title}</h5>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          &#43;
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
