import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

export default function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: {
                        xs: "calc(50% -25px)",
                        md: 30
                    }

                }}>
                <Fab color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>

                    <UserBox>
                        <Avatar
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s'
                        />
                        <Typography fontWeight={800} variant='span'>Christiano Ronaldo</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button
                            sx={{ width: '100px' }}
                        >
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}
