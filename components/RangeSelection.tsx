"use client"
import React, { useState } from 'react';

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  

  return (
    <div>
      <div>
        <label>Minimum Value: {minValue}</label>
        <input
          type="range"
          min={0}
          max={100}
          value={minValue}
          onChange={(e) => {if(maxValue>minValue)setMinValue(parseInt(e.target.value))}}
        />
      </div>
      <div>
        <label>Maximum Value: {maxValue}</label>
        <input
          type="range"
          min={0}
          max={100}
          value={maxValue}
          onChange={(e) => {if(maxValue>minValue)setMaxValue(parseInt(e.target.value))}}
        />
      </div>
      <div>
        <label> Range of values: {minValue} - {maxValue}</label>
      </div>
    </div>
  );
};

export default RangeSlider;
