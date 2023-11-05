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
// ----------------------------------------------------------------------

export default function VisitorForm() {
  const navigate = useNavigate();
  const axios = require('axios');

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    surname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    address: Yup.string().required('Address is required'),
    maritalStatus: Yup.string().required('Marital status is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    churchId: Yup.string().required('ChurchId is required'),
    gender: Yup.string().required('Gender is required')
  });

  const addUsers = async (userObject) => {
    try {
      const response = await axios.post(
        'https://bbm-bulk-api-gct.vercel.app/api/Person',
        userObject,
        {
          mode: 'cors',
          headers: headers
        }
      );
      console.log(response);
      if (response) {
        navigate('/app/dashboard', { replace: true });
      } else {
        navigate('/add-visitor', { replace: true });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      maritalStatus: '',
      contactNumber: '',
      gender: 0,
      churchId: 1,
      comments: '',
      cellLocation:'',
      cellLeader:''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const registrationObject = {
        name: { ...getFieldProps('name') }.value,
        surname: { ...getFieldProps('surname') }.value,
        address: { ...getFieldProps('address') }.value,
        maritalStatus: { ...getFieldProps('maritalStatus') }.value,
        contactNumber: { ...getFieldProps('contactNumber') }.value,
        gender: parseInt({ ...getFieldProps('gender') }.value),
        comments: { ...getFieldProps('comments') }.value,
        churchId: 1,
        cellLocation: {...getFieldProps('cellLocation')}.value,
        cellLeader: {...getFieldProps('cellLeader')}.value,
      };
      console.log('Values: ', registrationObject);
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
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('surname')}
              error={Boolean(touched.surname && errors.surname)}
              helperText={touched.surname && errors.surname}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="contactNumber"
            label="Contact Number"
            {...getFieldProps('contactNumber')}
            error={Boolean(touched.contactNumber && errors.contactNumber)}
            helperText={touched.contactNumber && errors.contactNumber}
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
              {...getFieldProps('churchId')}
              error={Boolean(touched.churchId && errors.churchId)}
              helperText={touched.churchId && errors.churchId}
            />

            <TextField
              fullWidth
              label="Marital Status"
              {...getFieldProps('maritalStatus')}
              error={Boolean(touched.maritalStatus && errors.maritalStatus)}
              helperText={touched.maritalStatus && errors.maritalStatus}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Cell Leader"
              {...getFieldProps('cellLeader')}
              error={Boolean(touched.cellLeader && errors.cellLeader)}
              helperText={touched.cellLeader && errors.cellLeader}
            />

            <TextField
              fullWidth
              label="Cell Location"
              {...getFieldProps('cellLocation')}
              error={Boolean(touched.cellLocation && errors.cellLocation)}
              helperText={touched.cellLocation && errors.cellLocation}
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
              <FormControlLabel value='0' control={<Radio />} label="Female" />
              <FormControlLabel value='1' control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Add Member
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
