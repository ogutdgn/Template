import React from 'react';
import { Slider, Stack } from '@mui/material';

const SliderGroup = ({ dataArray, handleSlider }) => {
  return (
    <div>
        {
          dataArray.map(data => (
            <Stack spacing={5} direction="row" sx={{ mb: 1 }} alignItems="center">
              {data.title}
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => handleSlider(e, data.id)} className="eachSlider"/>
            </Stack>
          ))
        }
    </div>
  )
}

export default SliderGroup