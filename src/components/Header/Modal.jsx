import React from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, categories }) => {
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

