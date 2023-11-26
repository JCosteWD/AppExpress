import React from 'react'
import axios from 'axios'
import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import Header from "../../components/Header"

function AddGroup() {

  const handleSubmit = async (values) => {
    if (
      !values.depot
    ) {
      alert("Veuillez compléter votre demande.")
      return
    }

    if (values._id) { 
    } else {
      try {
        const response = await axios.post('/addGroup', values)
        console.log(response)
        window.location.reload(true)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Box m="20px">
      <Header title="AJOUTER" subtitle="Augmentez Votre Portefeuille Client" />

      <Formik
        initialValues={{
          depot: ''
        }}
        validationSchema={yup.object().shape({
          depot: yup.string().required("required"),
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
                label="Dépôt"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.depot}
                name="depot"
                error={touched.depot && !!errors.depot}
                helperText={touched.depot && errors.depot}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ajouter un Dépôt
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AddGroup