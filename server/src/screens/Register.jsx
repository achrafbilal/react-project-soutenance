import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { useAuth } from '../contexts/AuthContext'
import { red } from '@material-ui/core/colors';







function Register() {
    const [valid, setValid] = useState(false)
    // const { register } = useAuth();
    const [user, setUser] = useState({ email: "", password: "", confirmation: "" })

    const changeHandler = (k, v) => {
        setUser({
            ...user, [k]: v
        })

    }
    const handleSubmit = () => {
        setValid(user.password === user.confirmation)
        // if (valid) register(user.email, user.password)
    }

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" >
                    Achraf-Bilal Server-Messenger
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            height: '93vh',
        },
        image: {
            backgroundImage: 'url(https://images.unsplash.com/photo-1620939933387-06f0638019ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        invalid_input: {
            borderColor: red
        }
    }));
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    <div className={classes.form} >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={user.email}
                                    onChange={(e) => changeHandler('email', e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={user.email}
                                    onChange={(e) => changeHandler('password', e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={valid ? '' : classes.invalid_input}
                                    value={user.email}
                                    onChange={(e) => changeHandler('confirmation', e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password-confirmation"
                                    label="Password confirmation"
                                    type="password"
                                    id="confirmation"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={!valid}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default Register


