/* import React, { useState, useEffect } from 'react';
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
    axios.get('http://192.168.1.163:7000/groups')
      .then(response => {
        if (response.data.groups && Array.isArray(response.data.groups)) {
          const options = response.data.groups.map(group => ({
            value: group._id, 
            label: group.depot
          }));
          setOptions1(options);
        } else {
          console.error("La réponse pour options1 n'est pas un tableau valide.");
        }
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://192.168.1.163:7000/tours')
      .then(response => {
        if (response.data.tours && Array.isArray(response.data.tours)) {
          const options = response.data.tours.map(tour => ({
            value: tour._id,
            label: `${tour.depot} - ${tour.tournee}`
          }));
          setOptions2(options);
        } else {
          console.error("La réponse pour options2 n'est pas un tableau valide.");
        }
      })
      .catch(error => {
        console.error(error);
      });
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
          <Picker.Item key={option.value} label={option.label} value={option.value} />
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
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      {console.log("Selected Option 2 (avant le rendu):", selectedOption2)}

      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
};

export default DataForm; */

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from '../../styles.css';

const DataForm = () => {
  // États pour les valeurs des champs et les options des Pickers
  const [loaded, setLoaded] = useState('');
  const [delivered, setDelivered] = useState('');
  const [returned, setReturned] = useState('');
  const [other, setOther] = useState('');
  const [options1, setOptions1] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [options2, setOptions2] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState('');

  // Effet de chargement initial pour obtenir les options des Pickers
  useEffect(() => {
    // Récupérer les options pour le premier Picker (dépôts)
    axios.get('http://192.168.1.163:7000/groups')
      .then(response => {
        if (response.data.groups && Array.isArray(response.data.groups)) {
          const options = response.data.groups.map(group => ({
            value: group._id,
            label: group.depot,
          }));
          setOptions1(options);
        } else {
          console.error("La réponse pour options1 n'est pas un tableau valide.");
        }
      })
      .catch(error => {
        console.error(error);
      });

    // Récupérer les options pour le deuxième Picker (tournées)
    axios.get('http://192.168.1.163:7000/tours')
      .then(response => {
        if (response.data.tours && Array.isArray(response.data.tours)) {
          const options = response.data.tours.map(tour => ({
            value: tour._id,
            label: `${tour.depot} - ${tour.tournee}`,
          }));
          setOptions2(options);
        } else {
          console.error("La réponse pour options2 n'est pas un tableau valide.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Effet pour mettre à jour les options du deuxième Picker lorsque le premier Picker change
  useEffect(() => {
    if (selectedOption1) {
      updateToursForDepot(selectedOption1);
    }
  }, [selectedOption1]);

  // Fonction pour mettre à jour les options du deuxième Picker en fonction du dépôt sélectionné
  const updateToursForDepot = async (depotId) => {
    console.log('Depot ID:', depotId);
    try {
      const response = await axios.get('http://192.168.1.163:7000/tours', { params: { depot: depotId } });
      /* const response = await axios.get(`http://192.168.1.163:7000/tours/${depotId}`); */
      console.log(response.data);
      if (response.data.tours && Array.isArray(response.data.tours)) {
        const options = response.data.tours.map(tour => ({
          value: tour._id,
          label: `${tour.depot} - ${tour.tournee}`,
        }));
        console.log("Options pour le deuxième Picker:", options);
        setOptions2(options);
      } else {
        console.error("La réponse pour options2 n'est pas un tableau valide.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction de gestion de la soumission du formulaire
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

    // Réinitialiser les champs du formulaire après la soumission
    setLoaded('');
    setDelivered('');
    setReturned('');
    setOther('');
    setSelectedOption1('');
    setSelectedOption2('');
  };

  // Rendu du composant
  return (
    <View>
      {/* Champs de saisie pour les colis */}

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

      {/* ... (autres champs de saisie pour les colis) */}

      {/* Premier Picker pour les dépôts */}
      <Picker
        style={[styles.text, { marginBottom: 10 }]}
        selectedValue={selectedOption1}
        onValueChange={itemValue => {
          setSelectedOption1(itemValue);
          console.log(itemValue)
          // Mise à jour des tournées en fonction du dépôt sélectionné
          updateToursForDepot(itemValue);
        }}
      >
        <Picker.Item label="Dépôt" value="" />
        {options1.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>

      {/* Deuxième Picker pour les tournées */}
      <Picker
        style={[styles.text, { marginBottom: 10, borderRadius: 100 }]}
        selectedValue={selectedOption2}
        onValueChange={itemValue => {
          console.log("Selected Value:", itemValue);
          setSelectedOption2(itemValue);
        }}
      >
        <Picker.Item label="Tournée" value="" />
        {options2.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>

      {/* Bouton d'envoi du formulaire */}
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
};

export default DataForm;
