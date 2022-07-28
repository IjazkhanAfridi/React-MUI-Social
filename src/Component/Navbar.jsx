import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';
import React from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('dev')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icon = styled(Box)(({ theme }) => ({
display:'none',
alignItems:'center',
gap:"20px",
[theme.breakpoints.up("sm")]:{
  display:'flex',
}
}));
const Userbox = styled(Box)(({ theme }) => ({
  display:'flex',
  alignItems:'center',
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:'none',
  }
  }));

export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography p={2} color={'white'}>
          IK
        </Typography>
        <Search>
          <InputBase placeholder='Search ...' />
        </Search>
        <Icon>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar sx={{width:28, height:28}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />     
        </Icon>
        <Userbox >
          <Avatar sx={{width:28, height:28}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Userbox>
      </StyledToolBar>
    </AppBar>
  );
}
