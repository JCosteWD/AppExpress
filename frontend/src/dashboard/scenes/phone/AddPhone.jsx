import React from 'react'
import axios from 'axios'
import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import Header from "../../components/Header"

function AddPhone() {

  const handleSubmit = async (values) => {
    if (
      !values.marque || !values.model || !values.phoneNumber
    ) {
      alert("Veuillez compléter votre demande.")
      return
    }

    if (values._id) { 
    } else {
      try {
        const response = await axios.post('/addphone', values)
        console.log(response)
        window.location.reload(true)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Box m="20px">
      <Header title="TELEPHONES" subtitle="Augmentez Votre Flotte De mobiles" />

      <Formik
        initialValues={{
          marque: '',
          model: '',
          phoneNumber: ''
        }}
        validationSchema={yup.object().shape({
          marque: yup.string().required("required"),
          model: yup.string().required("required"),
          phoneNumber: yup.number().required("required"),
        })}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Marque"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.depot}
                name="marque"
                error={touched.marque && !!errors.marque}
                helperText={touched.marque && errors.marque}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
                name="model"
                error={touched.model && !!errors.model}
                helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Numéro"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ajouter un téléphone
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AddPhone