import React, { useState } from 'react';
import { Collapse } from 'antd';
import './AccordionCollapse.css';
import PropTypes from 'prop-types';

export const AccordionCollapse = ({collapseItems}) => {
  const [activeKey, setActiveKey] = useState('1')

  const items = collapseItems?.map((el,index) => {
    return {
      key: `${index + 1}`,
      label: <div onMouseEnter={() => setActiveKey(`${index + 1}`)}>{el?.panelHeaderText}</div>,
      children: <p>{el?.panelContentText}</p>,
      imgSrc:  `${el?.imgSrc}`,
    }
  });

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className='accordion'>
      <Collapse 
        accordion 
        items={items} 
        defaultActiveKey={['1']} 
        activeKey={activeKey} 
        expandIconPosition={'end'} 
        size={'large'}
        onChange={onChange} />
      <div>
        <img 
          className='accordion__img' 
          src={items[activeKey-1]?.imgSrc} 
          loading='lazy'
          alt='accordion_image'
        />
      </div>
    </div>
    )
};

AccordionCollapse.propTypes = {
  collapseItems: PropTypes.array,
};

AccordionCollapse.defaultProps = {
  collapseItems: [
    {
      panelHeaderText: 'This is panel header 1',
      panelContentText: `A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`,
      imgSrc: 'https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/64cf6771d3768d39b71c4139_3.png'
    },
    {
      panelHeaderText: 'This is panel header 2',
      panelContentText: `A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`,
      imgSrc: 'https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/64cf67a1aea07df5b0741bab_5.png'
    },
  ],
};
