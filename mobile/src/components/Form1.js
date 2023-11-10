import React, { useState, useEffect } from 'react';
import { View, TextInput, Button  } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import axios from 'axios';
import styles from '../../styles.css'

const DataForm = () => {
  const [loaded, setLoaded] = useState('');
  const [delivered, setDelivered] = useState('');
  const [returned, setReturned] = useState('');
  const [other, setOther] = useState('');
  const [options1, setOptions1] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [options2, setOptions2] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://192.168.1.163:7000/groups');
        if (response1.data.groups && Array.isArray(response1.data.groups)) {
          const options = response1.data.groups.map(group => ({
            value: group._id, 
            label: group.depot
          }));
          setOptions1(options);
        } else {
          console.error("La réponse pour options1 n'est pas un tableau valide.");
        }
  
        const response2 = await axios.get('http://192.168.1.163:7000/tours');
        if (response2.data.tours && Array.isArray(response2.data.tours)) {
          const options = response2.data.tours.map(tour => ({
            value: tour._id,
            label: `${tour.depot} - ${tour.tournee}`
          }));
          setOptions2(options);
        } else {
          console.error("La réponse pour options2 n'est pas un tableau valide.");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleSubmit = async () => {
    const data = {
      loaded: Number(loaded),
      delivered: Number(delivered),
      returned: Number(returned),
      other: Number(other),
      option1: selectedOption1,
      option2: selectedOption2,
    };

    if (!loaded || !delivered || !returned || !other || !selectedOption1 || !selectedOption2) {
      alert('Veuillez compléter tous les champs.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.163:7000/addPackage', data);
      console.log(response);
      alert("Données correctement envoyées ! Merci ");
    } catch (error) {
      console.error(error);
    }

    setLoaded('');
    setDelivered('');
    setReturned('');
    setOther('');
    setSelectedOption1('');
    setSelectedOption2('');
  };

/* const updateToursForDepot = async (depotId) => {
  try {
    const response = await axios.get(`http://192.168.1.163:7000/tours`);
    console.log(response.data);
    if (response.data.tours && Array.isArray(response.data.tours)) {
      const options = response.data.tours.map(tour => ({
        value: tour._id,
        label: `${tour.depot} - ${tour.tournee}`
      }));
      setOptions2(options);
    } else {
      console.error("La réponse pour options2 n'est pas un tableau valide.");
    }
  } catch (error) {
    console.error(error);
  }
}; */

// Dans ton fichier DataForm.js ou équivalent
const updateToursForDepot = async (depotId) => {
  try {
    const response = await axios.get(`http://192.168.1.163:7000/tours/${depotId}`);
    console.log(response.data);
    if (response.data.tours && Array.isArray(response.data.tours)) {
      const options = response.data.tours.map(tour => ({
        value: tour._id,
        label: `${tour.depot} - ${tour.tournee}`
      }));
      setOptions2(options);
    } else {
      console.error("La réponse pour options2 n'est pas un tableau valide.");
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <View>

      <Picker
        style={[styles.text, { marginBottom: 10}]}
        selectedValue={selectedOption1}
        onValueChange={itemValue => {
          setSelectedOption1(itemValue)
          updateToursForDepot(itemValue)
        }}
      >
        <Picker.Item label="Dépôt" value="" />
        {options1.map(option => (
  <Picker.Item key={option.value} label={option.label} value={option._id} />
))}
      </Picker>

      <Picker
        style={[styles.text, { marginBottom: 10, borderRadius: 100 }]}
        selectedValue={selectedOption2}
        onValueChange={itemValue => {
          console.log("Selected Value:", itemValue);
          setSelectedOption2(itemValue);
          console.log("Selected Option 2:", selectedOption2);
        }}
>
        <Picker.Item label="Tournée" value="" />
        {options2.map(option => (
  <Picker.Item key={`${option.value}-2`} label={option.label} value={option._id} />
))}
      </Picker>
      {console.log("Selected Option 2 (avant le rendu):", selectedOption2)}
      <TextInput
        style={styles.text}
        placeholder="Colis chargés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={loaded}
        onChangeText={text => setLoaded(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.text}
        placeholder="Colis livrés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={delivered}
        onChangeText={text => setDelivered(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.text}
        placeholder="Colis ramenés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={returned}
        onChangeText={text => setReturned(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.text, , { marginBottom: 5}]}
        placeholder="Autre"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={other}
        onChangeText={text => setOther(text)}
        keyboardType="numeric"
      />
      <Button title="Envoyer" onPress={handleSubmit} />
      
    </View>
  );
};

export default DataForm;

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

function AddRounds() {
  const [depotOptions, setDepotOptions] = useState([]);
  const [toursOptions, setToursOptions] = useState([]);

  useEffect(() => {
    const fetchDepotOptions = async () => {
      try {
        const response = await axios.get('/groups');
        setDepotOptions(response.data.groups);
      } catch (error) {
        console.error('Erreur lors de la récupération des options de dépôt :', error);
      }
    };

    fetchDepotOptions();
  }, []);

  const fetchToursByDepotId = async (depotId) => {
    try {
      const response = await axios.get(`/getToursByDepotId/${depotId}`);
      setToursOptions(response.data.tours);
    } catch (error) {
      console.error('Erreur lors de la récupération des options de tournée :', error);
    }
  };

  const handleChangeDepot = (event) => {
    const selectedDepot = event.target.value;
    fetchToursByDepotId(selectedDepot);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/addtour', values);
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box m="20px">
      <Header title="DEPOT" subtitle="Augmentez Votre Portefeuille De Tournées" />

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
                  onChange={handleChangeDepot}
                  value={values.depot || ''}
                  name="depot"
                  error={touched.depot && !!errors.depot}
                >
                  {depotOptions.map((option) => (
                    <MenuItem key={option.depotId} value={option.depot}>
                      {option.depot}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled">
                <Select
                  label="Tournée"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.tournee || ''}
                  name="tournee"
                  error={touched.tournee && !!errors.tournee}
                >
                  {toursOptions.map((option) => (
                    <MenuItem key={option.tourneeId} value={option.tournee}>
                      {option.tournee}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
  );
}

export default AddRounds;
 */