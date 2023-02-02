import { TextFields, Buttons } from './muistyle';
import { ThumbUp } from '@mui/icons-material';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField } from
    '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export default function RegisterForms() {
    const [openmodal, setopenmodal] = useState('')
    const {
        register,
        handleSubmit, setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = ( d) => {        
        axios.post(`http://192.168.0.101:8030/api/resumeapi`, d).then((res) => {
            setopenmodal('modal')
            console.log('YOUR DATA IS SUBMITTED', res);
        }).catch((e) => {
            console.log('ERROR OCCURED', e);
        })
    }
    return (
        <Box className="container mb-5 bodycontainer">
            <Stack spacing={2}>
                <Box className="company-header">
                    <Image height={100} width={150} className="companyLogo" src="/img/ezgif.com-gif-maker (1) (1).png" alt='company Logo' />
                </Box>
                <Box className="company-form">
                    <form onSubmit={handleSubmit(onSubmit)} id="myForm" action="post">
                        <Grid container spacing={2} className="filters mt-1 mb-2 ">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="First Name" variant="outlined" {...register("FirstName", {
                                    required: " Enter your firstname",
                                })} />
                                {errors.FirstName && (
                                    <p className="errormsg">{errors.FirstName.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Last Name" variant="outlined" {...register("LastName", {
                                    required: " Enter your Last Name",
                                })} />
                                {errors.LastName && (
                                    <p className="errormsg">{errors.LastName.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Email" type={"email"} variant="outlined" {...register("Email", {
                                    required: " Enter your E-Mail",
                                })} />
                                {errors.Email && (
                                    <p className="errormsg">{errors.Email.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Contact Number" type={"number"} variant="outlined"
                                    {...register("ContactNo", { required: " Enter your Contact Number", })} />
                                {errors.ContactNo && (
                                    <p className="errormsg">{errors.ContactNo.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Qualification" variant="outlined" {...register("Qualification", {
                                    required: " Enter your Qualification",
                                })} />
                                {errors.Qualification && (
                                    <p className="errormsg">{errors.Qualification.message}</p>
                                )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth label="Skillset" variant="outlined" {...register("SkillSet", {
                                    required: " Enter your Skillsets",
                                })} />
                                {errors.SkillSet && (
                                    <p className="errormsg">{errors.SkillSet.message}</p>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="filters mt-2 mb-2">
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Grid container spacing={2} className="filters ">
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Are You Experienced</FormLabel>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group">
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes"
                                                    {...register("Experience", {
                                                        required: " Enter your Experience",
                                                    })} />
                                                <FormControlLabel value="No" control={<Radio />} label="No"
                                                    {...register("Experience", {
                                                        required: " Enter your Experience",
                                                    })} />
                                            </RadioGroup>
                                            {errors.Experience && (
                                                <p className="errormsg">{errors.Experience.message}</p>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label htmlFor="">Where You Found Us</label><br />
                                        <select name="" id="selection" {...register('Reference', {
                                            required: "Please upload your resume"
                                        })}>
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
                                        
                                {/* <TextFields fullWidth label="Upload Your Resume" type="file" variant="outlined"
                                    className='custom-file-input' InputLabelProps={{ shrink: true }}
                                    {...register("resume1", { required: "Please upload your resume" , })} /> */}
                                        <Buttons variant="outlined" component="label" fullWidth>
                                            Upload Your Resume
                                            <input type="file" hidden {...register("resume1", {
                                                required: "Please upload your resume",
                                            })} />
                                        </Buttons>
                                        {errors.resume1 && (
                                            <p className="errormsg">{errors.resume1.message}</p>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextFields fullWidth id="outlined-multiline-static" label="Comments" multiline rows={9}
                                    variant="outlined" />
                            </Grid>
                            <Button sx={{ margin: "auto" }} data-bs-toggle={openmodal}  data-bs-target="#submitModal" className="mt-5 subbtn" type="submit"
                                variant="contained">Submit</Button>

                            <div className="modal fade" id="submitModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">

                                            <p className="modal-title" id="exampleModalLabel"> </p>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body row">
                                            <div className="col-3">
                                                <ThumbUp sx={{ marginLeft: '20px', fontSize: '75px' }} />
                                            </div>
                                            <div className="col-9">It is our pleasure to acknowledge the receipt of your
                                                application, and we will review it and get back to you as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </form>
                </Box>
            </Stack>
        </Box>
    )
}