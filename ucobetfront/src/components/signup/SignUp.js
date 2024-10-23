import React from "react";
import { Paper, Grid, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { fontGrid } from "@mui/material/styles/cssUtils";
const SignUp = () => {
    const paperStyle = { padding: "30px 20px", height: '80vh', width: 300, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e'};
    const btnstyle = { margin: '8px 0' };
    const txtStyle = { margin: '8px 0' };
    const headerStyle = { margin: '10px 0'};
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption"> Please fill this form to create an account</Typography>
                   
                </Grid>
                <form>
                    <TextField style={txtStyle} fullWidth label='Name' placeholder="Enter your name" required></TextField>
                    <TextField style={txtStyle} fullWidth label='Email' placeholder="Enter your email" required type="email"></TextField>
                    <TextField style={txtStyle} fullWidth label='Password' placeholder="Enter your password"required type="password"></TextField>
                    <TextField style={txtStyle} fullWidth label='Confirm Password' required type="password"></TextField>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle}> Sign up</Button>
                    <Typography variant="caption"> Ingresar con Google</Typography>
                </form>
         </Paper>
        </Grid>
    );
};

export default SignUp;
