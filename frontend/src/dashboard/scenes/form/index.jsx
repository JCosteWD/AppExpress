import React from 'react';
import axios from 'axios';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

function Form() {

  const handleSubmit = async (values) => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.phone ||
      !values.address1 ||
      !values.address2
    ) {
      alert("Veuillez compléter votre demande.");
      return;
    }

    if (values._id) { 
      /* updateUser(values._id, values); */
    } else {
      try {
        const response = await axios.post('/addUser', values);
        console.log(response);
        window.location.reload(true)
        /* addUser(response.data.user); */
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Box m="20px">
      <Header title="AJOUTER" subtitle="Agrandissez Vos Equipes" />

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
        }}
        validationSchema={yup.object().shape({
          firstName: yup.string().required("required"),
          lastName: yup.string().required("required"),
          email: yup.string().email("Email invalide").required("required"),
          phone: yup
            .string()
            .matches(/^\d+$/, "Numéro de téléphone non valide")
            .required("required"),
          address1: yup.string().required("required"),
          address2: yup.string().required("required"),
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
                label="Prénom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Téléphone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adresse 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adresse 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Créer un employé
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
