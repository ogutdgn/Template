import React from 'react';
import { Slider, Stack } from '@mui/material';

const SliderGroup = ({ mockData, handleSlider }) => {

  return (
    <div>
        {
          mockData.map(data => (
            <Stack spacing={5} direction="row" sx={{ mb: 1 }} alignItems="center">

                <p>{data.title}</p>
                <Slider sx={{color: `${data.color}`}} value={data.value} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => handleSlider(e, data.id)}/>

            </Stack>
          ))
        }
    </div>
  )
}

export default SliderGroup