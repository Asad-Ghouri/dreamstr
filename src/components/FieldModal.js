import React from 'react';

function FieldModal({ isOpen, onClose, newField, handleInputChange , handleAddField }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            id="label"
            name="label"
            value={newField.label}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="placeholder">Placeholder:</label>
          <input
            type="text"
            id="placeholder"
            name="placeholder"
            value={newField.placeholder}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={newField.type}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea </option>

            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="required">Required:</label>
          <input
            type="checkbox"
            id="required"
            name="required"
            checked={newField.required}
            onChange={handleInputChange}
            className="checkbox-field"
          />
        </div>
        <button type="button" onClick={handleAddField} className="add-button add-buttonas">
          Add Field
        </button>
      </div>
    </div>
  );
}

export default FieldModal;
