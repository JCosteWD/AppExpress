import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, FormControl, MenuItem, Select, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import Header from "../../components/Header"

function AddRounds() {
  const [depotOptions, setDepotOptions] = useState([])
  useEffect(() => {
    const fetchDepotOptions = async () => {
      try {
        const response = await axios.get('/groups')
        setDepotOptions(response.data.groups)
      } catch (error) {
        console.error('Erreur lors de la récupération des options de dépôt :', error)
      }
    }

    fetchDepotOptions()
  }, [])

  const handleSubmit = async (values) => {
    console.log("Form values:", values)
    if (!values.depot || !values.tournee) {
      alert("Veuillez compléter votre demande.")
      return
    }
  
    if (values._id) {
    } else {
      try {
        const response = await axios.post('/addtour', {
          depot: values.depot ,  
          depotId: values.depotId,
          tournee: values.tournee,
        });
        console.log(response);
        window.location.reload(true)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Box m="20px">
      <Header title="Ajouter une tournée" subtitle="Augmentez Votre Portefeuille De Tournées" />

      <Formik
  initialValues={{
    depot: '',
    tournee: ''
  }}
  validationSchema={yup.object().shape({
    depot: yup.string().required("required"),
    tournee: yup.string().required("required"),
  })}
  onSubmit={handleSubmit}
>
  {({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  }) => (
    <form onSubmit={handleSubmit}>
      <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
        <FormControl fullWidth variant="filled">
          <Select
            label="Dépôt"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.depot || ''}
            name="depot"
            error={touched.depot && !!errors.depot} 
          >
            {depotOptions.map((option, index) => (
              <MenuItem key={index} value={option.depot} >
                {option.depot}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Tournée"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.tournee}
          name="tournee"
          error={touched.tournee && !!errors.tournee}
          helperText={touched.tournee && errors.tournee}
          sx={{ gridColumn: "span 2" }}
        />
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">
          Ajouter une Tournée
        </Button>
      </Box>
    </form>
  )}
</Formik>
    </Box>
  )
}

export default AddRounds