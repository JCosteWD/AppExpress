import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, FormControl, MenuItem, Select, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import Header from "../../components/Header"

function AddInsurance() {
  const [insuranceOptions, setInsuranceOptions] = useState([])
  useEffect(() => {
    const fetchInsuranceOptions = async () => {
      try {
        const response = await axios.get('/vehicles')
        setInsuranceOptions(response.data.vehicles)
      } catch (error) {
        console.error('Erreur lors de la récupération des options des véhicules :', error)
      }
    }

    fetchInsuranceOptions()
  }, [])

  const handleSubmit = async (values) => {
    console.log("Form values:", values)
    if (!values.startDate || !values.endDate) {
      alert("Veuillez compléter votre demande.")
      return
    }

    if (values._id) {
    } else {
      try {
        const response = await axios.post('/addinsurance', values)
        console.log(response)
        window.location.reload(true)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
      <Box m="20px">
        <Header title="AJOUTER UNE ASSURANCE" subtitle="Gérez l'intégralité de vos assurances" />
        <Formik
          initialValues={{
            startDate: '',
            endDate: '',
          }}
          validationSchema={yup.object().shape({
            numberPlate: yup.string().required("required"), 
            startDate: yup.date().required("required"), 
            endDate: yup.date().required("required"), 
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
              <label>Immatriculation
                <FormControl fullWidth variant="filled">
                  <Select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.numberPlate || ''}
                    name="numberPlate"
                    error={touched.numberPlate && !!errors.numberPlate} 
                  >
                    {insuranceOptions.map((option, index) => (
                      <MenuItem key={index} value={option.numberPlate}>
                        {option.numberPlate}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </label>
                <label>Date de début
                <TextField 
                  fullWidth
                  variant="filled"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.startDate}
                  name="startDate"
                  error={touched.startDate && !!errors.startDate}
                  helperText={touched.startDate && errors.startDate}
                  sx={{ gridColumn: "span 2" }}
                />
                </label>
                <label>Date de fin
                <TextField 
                  fullWidth
                  variant="filled"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.endDate}
                  name="endDate"
                  error={touched.endDate && !!errors.endDate}
                  helperText={touched.endDate && errors.endDate}
                  sx={{ gridColumn: "span 2" }}
                />
                </label>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Ajouter une Assurance
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
  )
}

export default AddInsurance