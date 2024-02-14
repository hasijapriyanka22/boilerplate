import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ 
  primary, 
  backgroundColor, 
  size, 
  label, 
  type, 
  onButtonClick,
  onChange,
  ...props 
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';

  return (
    <>
      {type !== 'none' ?
        <div 
            className={['button', `button--${size}`, mode].join(' ')} 
            style={backgroundColor && { backgroundColor }}
            onClick={onButtonClick}>
              <input
                type={type}
                className="button__input"
                onChange={onChange}
                {...props}
              />
            {label}
        </div>
      : 
        <button
          type="button"
          className={['button', `button--${size}`, mode].join(' ')}
          style={backgroundColor && { backgroundColor }}
          onClick={onButtonClick}
          {...props}>
          {label}
        </button>
      }
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio', 'none']),
  onClick: PropTypes.func,
  onChange: PropTypes.func, // in case of radio and checkbox
  value: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium', // Default to button size
  type: 'none', // Default to button type
  onButtonClick: undefined,
  onChange: undefined,
};

