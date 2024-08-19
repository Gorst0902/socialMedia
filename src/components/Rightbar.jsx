import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
  const Account = ({ src, name, chat }) => (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src={src} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            {chat}
          </React.Fragment>
        }
      />
    </ListItem>
  );

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position="fixed" width={400}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://i.guim.co.uk/img/media/795ff9fc82d52b955c492afc63b9e25936be892f/0_1548_5689_3413/master/5689.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cc97713e13acec85bc0352dc20e0109" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          <ImageListItem>
            <img
              src='https://media.cnn.com/api/v1/images/stellar/prod/221129095912-02-portugal-ronaldo-goal-fernandes-112822.jpg?c=original'
              alt='/'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/03/21/cristiano-ronaldo-goal.jpg'
              alt='/'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://s.yimg.com/ny/api/res/1.2/g83Ho0dRl4X5aKxQCCvJGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/ce93f410-1310-11ec-afd8-329152fb26d7'
              alt='/'
              loading="lazy"
            />
          </ImageListItem>

        </ImageList>


        <Typography variant='h6' fontWeight={100}>
          Latest conversation
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Account
            src='https://i.guim.co.uk/img/media/795ff9fc82d52b955c492afc63b9e25936be892f/0_1548_5689_3413/master/5689.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cc97713e13acec85bc0352dc20e0109'
            name='Erling Haaland'
            chat='How you doingggg...'
          />
          <Account
            src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/05dc/live/930f0a80-1e78-11ef-8d9e-91a964033e92.jpg'
            name='Cole Palmer'
            chat='Can you show me how you score many goals in a season? '
          />

        </List>
      </Box>
    </Box>
  )
}
