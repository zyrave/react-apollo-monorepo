import React from 'react';

const Input = ({ field, form }) => {
  const touched = form.touched[field.name];
  const error = form.errors[field.name];
  return (
    <>
      <input {...field} />
      <div style={{ color: 'red' }}>{touched && error}</div>
    </>
  );
};

export default Input;
