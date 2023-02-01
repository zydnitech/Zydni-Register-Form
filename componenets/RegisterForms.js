import styled from '@emotion/styled';
import { Notifications } from '@mui/icons-material';
import { Backdrop, Button, Fade, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";


export default function RegisterForms() {
    const {
        register,
        handleSubmit, setValue ,
        formState: { errors },
    } = useForm();

    const onSubmit = (d) => {

        axios.post(`http://192.168.0.101:8030/api/resumeapi`, d).then((res) => {
            console.log('YOUR DATA IS SUBMITTED', res);
        }).catch((e) => {
            console.log('ERROR OCCURED', e);
        })
        console.log(d)
    }

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
    const handleOpen = () => setOpen(register === " " ? true : false);
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
        color: 'white'
    };

    // get date 
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;
    return (
        <Box className="container">

            <Stack spacing={2}>
                <Box className="company-header">
                    <Image height={100} width={200} src="/img/logo.png" alt='company Logo' />
                    <h2 className="text-center company-name">Zydni Software Solution</h2></Box>
                <Box className="company-form">
                    <form onSubmit={handleSubmit(onSubmit)} action="post" >
                        <Grid container spacing={2} className="filters mt-1 mb-2 ">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="First Name" variant="outlined"  {...register("FirstName", {
                                    required: " Enter your firstname",
                                })}
                                />
                                {errors.FirstName && (
                                    <p className="errormsg">{errors.FirstName.message}</p>
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
                                <TextFields fullWidth label="Email" type={"email"} variant="outlined" {...register("Email", {
                                    required: " Enter your E-Mail",
                                })}
                                />
                                {errors.Email && (
                                    <p className="errormsg">{errors.Email.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Contact Number" type={"number"} variant="outlined" {...register("ContactNo", {
                                    required: " Enter your Contact Number",
                                })}
                                />
                                {errors.ContactNo && (
                                    <p className="errormsg">{errors.ContactNo.message}</p>
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
                                <TextFields fullWidth label="Skillset" variant="outlined" {...register("SkillSet", {
                                    required: " Enter your Skillsets",
                                })}
                                />
                                {errors.SkillSet && (
                                    <p className="errormsg">{errors.SkillSet.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Grid container spacing={2} className="filters ">
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <FormControl  >
                                            <FormLabel id="demo-row-radio-buttons-group-label">Are You Experienced</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes"  {...register("Experience", {
                                            required: " Enter your Experience",
                                        })}/>
                                                <FormControlLabel value="No" control={<Radio />} label="No"  {...register("Experience", {
                                            required: " Enter your Experience",
                                        })}/>
                                            </RadioGroup>
                                            {errors.Experience && (
                                                <p className="errormsg">{errors.Experience.message}</p>
                                            )}
                                        </FormControl>
                                        {/* <label htmlFor="">Are You Experienced</label><br />
                                        <label htmlFor="yes">Yes</label>
                                        <input {...register("Experience", { required: "Please upload your resume" })} type="radio"  value="Yes" />
                                        <label htmlFor="no">No</label>                                        
                                        <input {...register("Experience", { required: "Please upload your resume" })} type="radio"  value="No" /> */}

                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label htmlFor="">Where You Found Us</label><br />
                                        <select name="" id="selection" {...register('Reference', { required: "Please upload your resume" })}>
                                            <option value="">Select An Option</option>
                                            <option value="Instagram">
                                                Instagram
                                            </option>
                                            <option value="Facebook">
                                                Facebook
                                            </option>
                                            <option value="Linkedin">
                                                Linkedin
                                            </option>
                                            <option value="Whatsapp">
                                                Whatsapp
                                            </option>
                                            <option value="From Others">
                                                From Others
                                            </option>
                                        </select>
                                        {errors.Reference && (
                                            <p className="errormsg">{errors.Reference.message}</p>
                                        )}

                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextFields fullWidth label="Upload Your Resume" type="file" variant="outlined"
                                            className='custom-file-input' InputLabelProps={{ shrink: true }}   {...register("resume1", {
                                                required: "Please upload your resume",
                                            })}

                                        />
                                        {errors.resume1 && (
                                            <p className="errormsg">{errors.resume1.message}</p>
                                        )}
                                        {/* <input type="file"
                                            className='custom-file-input'  {...register("resume", {
                                                required: "Please upload your resume",
                                            })} /> */}
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
                            <Button sx={{ margin: "auto" }}   onClick={() => setValue("Dates", newdate )} className="mt-5 subbtn" type="submit" variant="contained">Submit</Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" sx={{ textAlign: 'center' }} variant="h6" component="h2">
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
