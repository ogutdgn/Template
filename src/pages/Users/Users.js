import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect } from 'react'
import AlertDialog from '../../components/Alert/Alert';
import Layout from '../../components/Layout/Layout';
import { usersStore } from '../../store/usersStore';
import emptyProfile from "../../assets/imgs/empty-profile.svg";
import "./Users.css";


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

      <div className="users">
        {
          users && users.map((user, index) => {
            return(  
                <Card className="user" key={index}>

                  <CardHeader
                    avatar={
                      <Avatar aria-label="user" className='userAvatar'>
                        <img src={emptyProfile} alt="" height={35}/>
                      </Avatar>
                    }
                    
                    title={user.name}
                    subheader={user.email}
                  />
                  
                  <CardActions disableSpacing>

                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon style={{color: "red"}}/>
                    </IconButton>

                    <IconButton aria-label="share">
                      <ShareIcon style={{color: "rgb(0, 7, 225)"}}/>
                    </IconButton>

                    <IconButton aria-label="settings">
                        <MoreVertIcon />
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
