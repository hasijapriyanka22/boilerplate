import { Button } from './Button';
import React, { useState } from 'react';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const CheckboxButton = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return(
    <Button 
      {...args} 
      type="checkbox" 
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.target.checked)
        console.log('Checkbox checked', e.target.checked)
      }}
    />
  )
};
CheckboxButton.args = {
  label: 'Checkbox Button',
};

export const RadioButton= (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return(
    <Button 
      {...args} 
      type="radio" 
      checked={isChecked}
      value="radioButton"
      onChange={(e) => {
        setIsChecked(isChecked => !isChecked)
        console.log('Radio button selected', e.target.value)
      }}
    />
  )
};

RadioButton.args = {
  label: 'Radio Button',
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    type: 'none',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
