import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect } from 'react'
import AlertDialog from '../components/Alert/Alert';
import Layout from '../components/Layout/Layout';
import { usersStore } from '../store/usersStore';



export default function UserCard() {

    const { fetchUsers, users, error } = usersStore();

    useEffect(() => {
        fetchUsers();
      }, [fetchUsers])


  return (
    <Layout>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>

      <div>
        {
          users && users.map((user) => {
            return(
                
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      U
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={user.name}
                  subheader={user.email}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image=""
                  alt={user.city}
                />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    
    
    </Layout>
  );
}
