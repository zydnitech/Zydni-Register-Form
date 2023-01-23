import React, { useState } from 'react'
import { Stack, Box,  TextField } from '@mui/system'
import { Grid } from '@mui/material';

export default function Registerform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState( []);
  const onSubmit = (d) => {
    setdata(d);
    console.log(data);
  };
  return (
    <Box>
      <Stack spacing={2}>
        <Box> <h2 className="text-center">Zydni Software Solution</h2></Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Grid container spacing={2} className="filters">
              <label htmlFor="">Full Name</label>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField label="First Name" variant="standard" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField label="First Name" variant="standard" />
              </Grid>
            </Grid> */}
          

            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="">
                  Full Name <span className="spantag">*</span>
                </label>
                <br />
                <TextField
                  type="text"
                  className="form-control"
                  {...register("firstname", {
                    required: " Enter your firstname",
                  })}
                  label="First Name  "
                  // placeholder="First Name"
                ></TextField>
                {errors.firstname && (
                  <p className="errormsg">{errors.firstname.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <br />
                <input
                  type="text"
                  {...register("lastname", { required: " Enter your lastname" })}
                  placeholder="Last Name"
                  className=" form-control lastname"
                />
                {errors.lastname && (
                  <p className="errormsg">{errors.lastname.message}</p>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="">
                  Email <span className="spantag">*</span>
                </label>
                <br />
                <input
                  type="text"
                  {...register("mail", { required: "Please enter your E-mail" })}
                  className="form-control"
                  placeholder="example@example.com"
                />
                {errors.mail && <p className="errormsg">{errors.mail.message}</p>}
              </div>
              <div className="col-md-6">
                <label htmlFor="">
                  Contact Number <span className="spantag">*</span>
                </label>
                <br />
                <input
                  type="text"
                  {...register("phone", {
                    required: "Please enter your phone number",
                  })}
                  className="form-control"
                  placeholder="Please enter your valid phone number"
                />
                {errors.phone && (
                  <p className="errormsg">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 ">
                <label htmlFor="">
                  Qualification <span className="spantag">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  {...register("qualification", {
                    required: "Please enter your qualification",
                  })}
                  placeholder="Enter your qualification"
                />
                {errors.qualification && (
                  <p className="errormsg">{errors.qualification.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="">
                  Skillset <span className="spantag">*</span>
                </label>
                <br />
                <input
                  type="text"
                  {...register("skill", { required: "Please enter your Skills" })}
                  className="form-control"
                  placeholder="Enter your skillset"
                />
                {errors.skill && (
                  <p className="errormsg">{errors.skill.message}</p>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="col-md-12 mt-3">
                  <label htmlFor="">Are you experienced</label>
                  <br />
                  <label htmlFor="yes" className="radiolabel">
                    Yes
                  </label>
                  <input type="radio" id="yes" {...register("experience")} />
                  <label htmlFor="no" className="radiolabel">
                    No
                  </label>
                  <input type="radio" id="no" {...register("experience")} />
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="found">
                    Where You found us <span className="spantag">*</span>
                  </label>
                  <br />
                  <select
                    className="form-select"
                    id="found"
                    {...register("select", { required: "Select an option" })}
                  >
                    <option>Choose any one</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Whatsapp</option>
                    <option>Linkedin</option>
                    <option>Others</option>
                  </select>
                  {errors.select && (
                    <p className="errormsg">{errors.select.message}</p>
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label>
                    Upload Your Resume <span className="spantag">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control file"
                    type="file"
                    {...register("resume", {
                      required: "Please upload your resume",
                    })}
                    id=""
                  />
                  {errors.resume && (
                    <p className="errormsg">{errors.resume.message}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="">Comments</label>
                <br />
                <textarea
                  {...register("comment")}
                  id=""
                  cols="35"
                  rows="10"
                  placeholder="Tell us something..."
                ></textarea>
              </div>
            </div>
            <hr />
            <button type="submit">Submit</button>
          </form>
        </Box>
      </Stack>
    </Box>
  )
}
