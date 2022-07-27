import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    
    <div className="headerDiv">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DastugoTemplate
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </div>
    
  );
}