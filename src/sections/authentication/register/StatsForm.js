/* eslint-disable */

import * as Yup from 'yup';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField } from '@mui/material';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { LoadingButton } from '@mui/lab';
import _ from 'lodash';

// component
// ----------------------------------------------------------------------

export default function StatsForm() {
  const navigate = useNavigate();
  const axios = require('axios');

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  };

  const RegisterSchema = Yup.object().shape({
    branch: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Branch name required'),
    churchName: Yup.string().required('Church name is required'),
    city: Yup.string().required('City is required'),
    location: Yup.string().required('Location is required'),
    province: Yup.string().required('Province is required'),
    region: Yup.string().required('Region is required')
  });

  const addChurch = async (statsObject) => {
    try {
      const response = await axios.post(
        'https://bbmapi20230807123059.azurewebsites.net/api/Stats',
        statsObject,
        {
          mode: 'cors',
          headers: headers
        }
      );
      console.log(response);
      if (response) {
        navigate('/app/dashboard', { replace: true });
      } else {
        navigate('/add-church', { replace: true });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const formik = useFormik({
    initialValues: {
      adult: 0,
      car: 0,
      fk: 0,
      saved: 0,
      offering: 0.0,
      visitors: 0,
      date: '2023-08-06',
      churchId: 1
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const registrationObject = {
        adult: { ...getFieldProps('adult') }.value,
        car: { ...getFieldProps('car') }.value,
        fk: { ...getFieldProps('fk') }.value,
        saved: { ...getFieldProps('saved') }.value,
        offering: { ...getFieldProps('offering') }.value,
        visitors: { ...getFieldProps('visitors') }.value,
        date: { ...getFieldProps('date') }.value,
        churchId: 1
      };
      console.log('Values: ', registrationObject);
      addChurch(registrationObject);
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
              label="Adults"
              {...getFieldProps('adult')}
              error={Boolean(touched.adult && errors.adult)}
              helperText={touched.adult && errors.adult}
            />

            <TextField
              fullWidth
              label="Cars"
              {...getFieldProps('car')}
              error={Boolean(touched.car && errors.car)}
              helperText={touched.car && errors.car}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="Saved"
            label="Saved"
            {...getFieldProps('saved')}
            error={Boolean(touched.saved && errors.saved)}
            helperText={touched.saved && errors.saved}
          />

          <TextField
            fullWidth
            autoComplete="offering"
            label="Offering"
            {...getFieldProps('offering')}
            error={Boolean(touched.offering && errors.offering)}
            helperText={touched.offering && errors.offering}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Faith Kids"
              {...getFieldProps('fk')}
              error={Boolean(touched.fk && errors.fk)}
              helperText={touched.fk && errors.fk}
            />

            <TextField
              fullWidth
              label="Visitor"
              {...getFieldProps('visitor')}
              error={Boolean(touched.visitor && errors.visitor)}
              helperText={touched.visitor && errors.visitor}
            />
          </Stack>

          <TextField
            fullWidth
            label="Date"
            type="date"
            {...getFieldProps('date')}
            error={Boolean(touched.date && errors.date)}
            helperText={touched.date && errors.date}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Add Stats
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
