import React from 'react';
import axios from 'axios';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

function AddVehicle() {

  const handleSubmit = async (values) => {
    if (
      !values.marque || !values.model || !values.numberPlate
    ) {
      alert("Veuillez compléter votre demande.");
      return;
    }

    if (values._id) { 
      /* updateUser(values._id, values); */
    } else {
      try {
        const response = await axios.post('/addvehicle', values);
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
      <Header title="VEHICULES" subtitle="Augmentez Votre Flotte De Véhicules" />

      <Formik
        initialValues={{
          marque: '',
          model: '',
          numberPlate: ''
        }}
        validationSchema={yup.object().shape({
          marque: yup.string().required("required"),
          model: yup.string().required("required"),
          numberPlate: yup.string().required("required"),
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
                type="text"
                label="Immatriculation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.numberPlate}
                name="numberPlate"
                error={touched.numberPlate && !!errors.numberPlate}
                helperText={touched.numberPlate && errors.numberPlate}
                sx={{ gridColumn: "span 2" }}
              />
            {/*   <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tournée"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.depot}
                name="depot"
                error={touched.depot && !!errors.depot}
                helperText={touched.depot && errors.depot}
                sx={{ gridColumn: "span 2" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ajouter un Véhicule
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default AddVehicle;
