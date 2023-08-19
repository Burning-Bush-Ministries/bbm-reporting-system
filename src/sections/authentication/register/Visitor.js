/* eslint-disable */

import * as Yup from 'yup';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button
} from '@mui/material';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { LoadingButton } from '@mui/lab';
import _ from 'lodash';
// component
import Iconify from '../../../components/Iconify';
// ----------------------------------------------------------------------

export default function VisitorForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const axios = require('axios');

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
};

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    company: Yup.string().required('Company is required'),
    tagid: Yup.string().required('TagID is required'),
    ethnicity: Yup.string().required('Ethnicity is required'),
    username: Yup.string().required('Username is required'),
    gender: Yup.string().required('Gender is required')
  });

  const addUsers = async (userObject) => {
    try {
      const response = await axios.post('https://bbmapi20230807123059.azurewebsites.net/api/Person',userObject,{
        mode: 'cors',
        headers: headers
    });
    console.log(response)
      if(response){
        navigate('/dashboard', { replace: true });
      }
      else{
        navigate('/register', { replace: true });
      }
    
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      maritalStatus: 0,
      contactNo: '',
      gender: 0,
      churchId: '0',
      comments:''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const registrationObject = {
        firstName: {...getFieldProps('firstName')}.value,
        lastName: {...getFieldProps('lastName')}.value,
        address: {...getFieldProps('address')}.value,
        maritalStatus: {...getFieldProps('maritalStatus')}.value,
        contactNo: {...getFieldProps('contactNo')}.value,
        gender:  {...getFieldProps('gender')}.value,
        churchId: 1,
        comments:  {...getFieldProps('comments')}.value
      };
      console.log("Values: ", registrationObject);
      addUsers(registrationObject);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  const Input = styled('input')({
    display: 'none'
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="contactNo"
            label="Contact Number"
            {...getFieldProps('contactNo')}
            error={Boolean(touched.contactNo && errors.contactNo)}
            helperText={touched.contactNo && errors.contactNo}
          />

          <TextField
            fullWidth
            autoComplete="comment"
            label="Comments"
            {...getFieldProps('comments')}
            error={Boolean(touched.comments && errors.comments)}
            helperText={touched.comments && errors.comments}
          />

          <TextField
            fullWidth
            label="Address"
            {...getFieldProps('address')}
            error={Boolean(touched.address && errors.address)}
            helperText={touched.address && errors.address}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Church"
              {...getFieldProps('church')}
              error={Boolean(touched.church && errors.church)}
              helperText={touched.church && errors.church}
            />

            <TextField
              fullWidth
              label="Marital Status"
              {...getFieldProps('maritalStatus')}
              error={Boolean(touched.maritalStatus && errors.maritalStatus)}
              helperText={touched.maritalStatus && errors.maritalStatus}
            />
          </Stack>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              {...getFieldProps('gender')}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Add User
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
