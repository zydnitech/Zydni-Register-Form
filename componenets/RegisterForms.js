import styled from '@emotion/styled';
import { Notifications } from '@mui/icons-material';
import { Backdrop, Button, Fade, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";


export default function RegisterForms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setdata] = useState([]);
    const onSubmit = (d) => {
        setdata(d);
    };
    console.log(data);

    const [value, setValue] = useState('');

    const TextFields = styled(TextField)({
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'Black',
                borderRadius: "10px"
            },
            '&:hover fieldset': {
                borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
            },
            '&.Mui-focused fieldset ': {
                borderColor: 'black',
            }, '& label.Mui-focused': {
                color: 'black',
            },
        },
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(register ===" "? true : false);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color : 'white'
    };
    return (
        <Box className="container">
            <Stack spacing={2}>
                <Box className="company-header">
                    <Image height={100} width={200} src="/logo.png" alt='company Logo' />
                    <h2 className="text-center company-name">Zydni Software Solution</h2></Box>
                <Box className="company-form">
                    <form onSubmit={handleSubmit(onSubmit)} action="post" >
                        <Grid container spacing={2} className="filters mt-1 mb-2 ">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="First Name" variant="outlined"  {...register("firstname", {
                                    required: " Enter your firstname",
                                })}
                                />
                                {errors.firstname && (
                                    <p className="errormsg">{errors.firstname.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Last Name" variant="outlined" {...register("LastName", {
                                    required: " Enter your Last Name",
                                })}
                                />
                                {errors.LastName && (
                                    <p className="errormsg">{errors.LastName.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Email" type={"email"} variant="outlined" {...register("email", {
                                    required: " Enter your E-Mail",
                                })}
                                />
                                {errors.email && (
                                    <p className="errormsg">{errors.email.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Contact Number" type={"number"} variant="outlined" {...register("ContactNumber", {
                                    required: " Enter your Contact Number",
                                })}
                                />
                                {errors.ContactNumber && (
                                    <p className="errormsg">{errors.ContactNumber.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Qualification" variant="outlined" {...register("Qualification", {
                                    required: " Enter your Qualification",
                                })}
                                />
                                {errors.Qualification && (
                                    <p className="errormsg">{errors.Qualification.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Skillsets" variant="outlined" {...register("Skillsets", {
                                    required: " Enter your Skillsets",
                                })}
                                />
                                {errors.Skillsets && (
                                    <p className="errormsg">{errors.Skillsets.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Grid container spacing={2} className="filters ">
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Are You Experienced</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" {...register("experiance", {
                                                    required: " Enter your experiance",
                                                })} />
                                                <FormControlLabel value="No" control={<Radio />} label="No"  {...register("experiance", {
                                                    required: " Enter your experiance",
                                                })} />
                                            </RadioGroup>
                                            {errors.experiance && (
                                                <p className="errormsg">{errors.experiance.message}</p>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>

                                        <TextFields
                                            variant="outlined"
                                            fullWidth
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            select
                                            label="Where You Found Us"
                                        // {...register("social", { required: "Select an option" })}
                                        >
                                            <MenuItem key={1} value="Instagram">
                                                Instagram
                                            </MenuItem>
                                            <MenuItem key={2} value="Facebook">
                                                Facebook
                                            </MenuItem>
                                            <MenuItem key={3} value="Linkedin">
                                                Linkedin
                                            </MenuItem>
                                            <MenuItem key={4} value="Whatsapp">
                                                Whatsapp
                                            </MenuItem>
                                            <MenuItem key={5} value="From Others">
                                                From Others
                                            </MenuItem>
                                        </TextFields>
                                        {errors.social && (
                                            <p className="errormsg">{errors.social.message}</p>
                                        )}

                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextFields fullWidth label="Upload Your Resume" type="file" variant="outlined" InputLabelProps={{ shrink: true }}   {...register("resume", {
                                            required: "Please upload your resume",
                                        })}

                                        />
                                        {errors.resume && (
                                            <p className="errormsg">{errors.resume.message}</p>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth
                                    id="outlined-multiline-static"
                                    label="Comments"
                                    multiline
                                    rows={8}
                                    variant="outlined"
                                />

                            </Grid>
                            <Button sx={{ margin: "auto" }} onClick={handleOpen} className="mt-5 subbtn" type="submit" variant="contained">Submit</Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponen={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" sx={{textAlign : 'center'}} variant="h6" component="h2">
                                            <Notifications />
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                         Thamk You for applying. Will connect to you soon!!
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </Grid>
                    </form>
                </Box>
            </Stack>
        </Box>
    )
}
