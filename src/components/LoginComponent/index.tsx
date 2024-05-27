"use client";

import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


// import Logo from '../../components/Logo';
// import { useNavigate } from 'react-router-dom';
// import { validateEmail } from '../../utils/validation';
// import { axiosClient } from '../../utils/axios-client';
// import { SIGNIN_ENDPOINT } from '../../constant/api-endpoints';
import { MONITOR } from '@/constant/types';
// import SnackbarNotification from '../../components/Notification/snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/system';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../../store/user';
import InputPasswordField from '@/ui/InputFields/InputPasswordField';
// import { getpermittedMonitorPatients, resolveMonitorPatient } from '../../utils/api';
// import { setTokenInLocalStorage } from '../../utils/tokens';

export default function LoginComponent() {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: null,
        severity: null,
    });

    const [values, setValues] = useState({
        email: '',
        pass: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        pass: '',
    });

    useEffect(() => {
        if (errors.email !== '' || errors.pass !== '')
            setErrors({
                email: '',
                pass: '',
            });
    }, [values.email, values.pass]);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // if (!values.email) {
        //     newErrors.email = 'Email is required';
        //     valid = false;
        // } else if (!validateEmail(values.email)) {
        //     newErrors.email = 'Invalid email address';
        //     valid = false;
        // }

        // if (!values.pass) {
        //     newErrors.pass = 'Password is required';
        //     valid = false;
        // }

        // if (values.pass.length < 8) {
        //     newErrors.pass = 'Password must be at least 8 charecter long';
        //     valid = false;
        // }
        return { valid, newErrors };
    };

    const prepareMonitorView = async () => {
        // try {
        //     const data = await getpermittedMonitorPatients();
        //     if (data.length === 1) {
        //         const [patient] = data;
        //         const isResolved = await resolveMonitorPatient(patient.userId);
        //         localStorage.setItem(
        //             'monitor-patient',
        //             JSON.stringify({
        //                 ...data[0],
        //                 name: `${data[0].firstname} ${data[0].middlename || ''} ${data[0].lastname
        //                     }`,
        //             }),
        //         );
        //         if (isResolved) navigate('/', { replace: true });
        //     } else if (data.length > 1) {
        //         navigate('/monitor-patients', { replace: true });
        //     } else {
        //         navigate('/monitor-patients', { replace: true });
        //     }
        // } catch (err) {
        //     console.log('Error in getting permitted monitor patients: ', err);
        // }
    };

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        const { valid, newErrors } = validateForm();
        // if (valid) {
        //     setLoading(true);
        //     const { email, pass } = values;
        //     try {
        //         const { status, data } = await axiosClient({
        //             method: 'POST',
        //             url: SIGNIN_ENDPOINT,
        //             data: {
        //                 email: email,
        //                 password: pass,
        //             },
        //         });
        //         if (status === 200) {
        //             const { accessToken, refreshToken } = data.auth_token;
        //             const { data: userData } = data;
        //             const userType = userData?.roles[0];
        //             setLoading(false);
        //             dispatch(
        //                 addUser({
        //                     user: userData,
        //                     isLoggedIn: true,
        //                     userType,
        //                 }),
        //             );
        //             setSnackbar({ message: 'Login successfull.', open: true, severity: 'success' });
        //             localStorage.setItem('authenticated', true);
        //             localStorage.setItem('user', JSON.stringify(userData));
        //             // localStorage.setItem('accessToken', JSON.stringify(accessToken));
        //             // setTokenInLocalStorage('accessToken', accessToken);
        //             // localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
        //             // setTokenInLocalStorage('refreshToken', refreshToken);

        //             if (userType === MONITOR) {
        //                 // navigate('/monitor-patients', { replace: true });
        //                 localStorage.setItem('monitorResolved', false);
        //                 await prepareMonitorView();
        //             } else {
        //                 navigate('/', { replace: true });
        //                 localStorage.setItem('monitorResolved', true);
        //             }
        //         }
        //     } catch (signInErr) {
        //         console.log('Error in user SignIn: ', signInErr);
        //         const status = signInErr?.response?.status;
        //         let message;
        //         if (status === 400) message = 'Invalid credential.';
        //         else if (status === 404) message = 'User not found.';
        //         else if (signInErr?.code === 'ERR_NETWORK') message = 'Host unreachable.';
        //         else message = 'Something went Error.';

        //         setSnackbar({
        //             message,
        //             open: true,
        //             severity: 'error',
        //         });
        //         setLoading(false);
        //         return;
        //     }
        // } else {
        //     setErrors(newErrors);
        // }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
      };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            {/* <SnackbarNotification
                {...snackbar}
                handleClose={() => setSnackbar((snackbar) => ({ ...snackbar, open: false }))}
            /> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        boxShadow:
                            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                    }}
                >
                    {/* <Logo /> */}
                    <Typography component='h1' variant='h5' m={3} sx={{ textAlign: 'center' }}>
                        Login
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='email'
                                    label='Username'
                                    name='email'
                                    autoComplete='email'
                                    size='small'
                                    onChange={(e) =>
                                        setValues({ ...values, email: e.target.value.trim() })
                                    }
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <TextField
                                    required
                                    fullWidth
                                    id='password'
                                    label='Password'
                                    name='password'
                                    autoComplete='password'
                                    size='small'
                                    onChange={(e) =>
                                        setValues({ ...values, pass: e.target.value })
                                    }
                                    error={!!errors.email}
                                    helperText={errors.email}
                                /> */}
                              
                                <InputPasswordField
                                    id='password'
                                    label='Password'
                                    name='password'
                                    size='small'
                                    value={values.pass}
                                    handleChange={(e : React.ChangeEvent<HTMLInputElement>) =>
                                        setValues({ ...values, pass: e.target.value })
                                    }
                                    error={!!errors.pass}
                                    helperText={errors.pass}
                                />
                            </Grid>
                            <Grid container></Grid>
                            <Grid item xs={12}>
                                <Box display='flex' justifyContent='space-between'>
                                        
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                    <Link href='/forgot-password' variant='body2' sx={{paddingTop: 1}}>
                                        Forgotten Password
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2, textDecoration: 'capitalize' }}
                            size='small'
                        >
                            <Stack spacing={1} direction='row' alignItems='center'>
                                <span>Login</span>
                                {loading && (
                                    <CircularProgress color='inherit' size={18} thickness={4} />
                                )}
                            </Stack>
                        </Button>
                        {/* <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Link href='/signup' variant='body1'>
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}