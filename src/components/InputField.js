import React  from "react";
const InputField = ({ value, label, name, placeholder, type, onChange,pattern }) => (
  <div className="form-group">
    {/* {label && <label htmlFor="input-field">{label}</label>} */}
      <input
        type={type}
        value={value}
        // name={name}
        // className="form-control"
        className='form-control hospital-id'
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
  </div>
);

export default InputField;