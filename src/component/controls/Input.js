import React from 'react';

const Input = ( {label,name,id,value,type,onHandleChange,placeholder, className, defaultValue,required}) => {
    return (
        <input type={type}
               className={className}
               id={id}
               name={name}
               onChange={onHandleChange}
               aria-describedby={name}
               placeholder={placeholder} required={required}/>
    );
};

export default Input;