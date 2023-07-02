import logo from './logo.svg';
import './App.css';
import {useFormik,Field, Form} from 'formik'
import {TextField,FormControl} from '@mui/material'
import { formSchema } from './Schemas';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import Formcomponent from './Component/Formcomponent';


function App() {

  const initialValues={
    name:"",
    address:"",
    country:"",
    gender:"",
    skill:[]



  }

  const [options,setoptions]=useState(['op1','op2','op3'])
  const{values, errors,touched, handleBlur, handleChange, handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:formSchema,
    onSubmit:(value)=>{
      console.log(value)

    }
  })

  console.log(errors)
  return (
    <div class="window">
   
    <Formcomponent/>
    
</div>

  );
}

export default App;
