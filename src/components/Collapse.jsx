import {useState} from 'react';
import PropTypes from 'prop-types';

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ])
  };

export default function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const currentRoute = window.location.pathname;

return (
  <div>
    <div className="collapse" onClick={() => setIsOpen(!isOpen)}>
        <h4 className={currentRoute === '/about' ? "collapse-title" : "collapse-title collapse-title-apt"}>{title}</h4>
        {isOpen ? <i className="fa-solid fa-chevron-up collapse-down"></i> : <i className="fa-solid fa-chevron-up collapse-up"></i>}
    </div>
    <div className={`collapse-desc-wrapper ${isOpen ? 'show' : ''}`}>
        <div className={`collapse-desc ${isOpen ? 'show' : ''}`}>{content}</div>
    </div>
  </div>
)}