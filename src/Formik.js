import React from "react";
import { useFormik } from "formik";
import './Formik.css';
const validate = values => {
  const errors ={};
  if(!values.firstname){
    errors.firstname = "*Required";

  }else if(values.firstname.length > 8){
    errors.firstname = "*must be 8 characters or less"
  }

  if(!values.lastname){
    errors.lastname = "*Required";

  }else if(values.lastname.length > 8){
    errors.lastname = "*must be 8 characters or less"
  }
  if(!values.password){
    errors.password = "*Required";

  }else if(values.password.length > 8){
    errors.password = "*Maxiumum 8 characters";

  }else if(values.password.length <3){
    errors.password = "*minimum 5 characters";
  }
  if(!values.confirmpassword){
    errors.confirmpassword = "*Required";
  }else if(values.password !== values.confirmpassword){
    errors.confirmpassword = "*password must match"
  }
   return errors;
}

const App = () =>{ 
  const formik = useFormik({
    initialValues : {
      firstname :"",
      lastname : "",
      email : "",
      password : "",
      confrm_password : "",


    },
    validate,
    onSubmit : values =>{
      alert(`hello! , ${values.firstname} You Success signed up!`);
    }
  });
  return(
    <div className="main">
      <div className="SignUp-form">
        <h2>Sign Up Here</h2>
        <form onSubmit = {formik.handleSubmit}>
          <input type="text"
          placeholder="Firstname"
          name="firstname"
          autoComplete="off"
          onChange={formik.handleChange} value=
          {formik.values.firstname}/>
          {
            formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null
          }

          <input type="text"
          placeholder="Lastname"
          name="lastname"
          autoComplete="off"
          onChange={formik.handleChange} value=
          {formik.values.lastname}/>
          {
            formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null
          }

       <input type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={formik.handleChange} value=
          {formik.values.email}/>
          {
            formik.errors.email ? <span>{formik.errors.email}</span> : null
          }

        <input type="text"
          placeholder="Password"
          name="password"
          autoComplete="off"
          onChange={formik.handleChange} value=
          {formik.values.password}/>
          {
            formik.errors.password ? <span>{formik.errors.password}</span> : null
          }

       <input type="text"
          placeholder="Confirm Password"
          name="confirm password"
          autoComplete="off"
          onChange={formik.handleChange}value=
          {formik.values.confrm_password}/>
          {
            formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null
          }

          <input type="submit"
          value ="submit"/>
        </form>

        </div>
      </div>
  );
}

  

export default App;
