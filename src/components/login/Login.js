import React from "react";
import { Paper, Grid, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e'};
    const btnstyle = { margin: '8px 0' };
    const txtStyle = { margin: '8px 0' };
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField style={txtStyle}label='Email' placeholder='Enter Email' fullWidth required type="email"/>
                <TextField style={txtStyle} label='Password' placeholder='Enter Password' fullWidth required type="password"/><br/><br/>
                <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle}> Sign in</Button>
                <Typography style={txtStyle}>Don't have an account? 
                    <Link href="#">
                        Sign up
                    </Link>
                </Typography>
         </Paper>
        </Grid>
    );
};

export default Login;
