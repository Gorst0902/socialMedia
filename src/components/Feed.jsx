
import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        ava='https://i.guim.co.uk/img/media/795ff9fc82d52b955c492afc63b9e25936be892f/0_1548_5689_3413/master/5689.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2cc97713e13acec85bc0352dc20e0109'
        name='Erling Haaland'
        date="August 19 2024"
        src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/67ab/live/300cf350-7e07-11ee-8f66-31c51d84a9e1.jpg'
        status='Feeling so good to be back on the pitch'
      />
      <Post
        ava='https://ichef.bbci.co.uk/news/1024/cpsprodpb/05dc/live/930f0a80-1e78-11ef-8d9e-91a964033e92.jpg'
        name='Cole Palmer'
        date="August 18 2024"
        src='https://prod-media.beinsports.com/image/1708002002046_93ea3f87-43c8-4fbf-a3d0-5f2397d50a84.jpg'
        status='1 step at a time'
      />
      <Post
        ava='https://nld.mediacdn.vn/zoom/700_438/291774122806476800/2023/2/6/2486eec2-d846-41d0-ab19-4b348d63b5e1-16756864512721777446481.jpeg'
        name='Son Heung Min'
        date="August 18 2024"
        src='https://cdn1.thespurs.news/uploads/36/2023/10/GettyImages-1386717274-1024x683.jpg'
        status='Do you know who I am now ?'
      />

    </Box>
  )
}
