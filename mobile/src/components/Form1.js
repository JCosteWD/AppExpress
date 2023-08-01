import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const DataForm = ({ onAddPackage, onUpdatePackage }) => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  const handleSubmit = async () => {
    const data = {
      field1: Number(field1),
      field2: Number(field2),
      field3: Number(field3),
      field4: Number(field4),
    };

    if (!field1 || !field2 || !field3 || !field4) {
      alert('Veuillez compléter votre demande.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.163:7000/addPackage', data)
      console.log(response);
      onAddPackage(response.data.package);
    } catch (error) {
      console.error(error);
    }

    setField1('');
    setField2('');
    setField3('');
    setField4('');
  };

  return (
    <View>
      <TextInput
        name="loaded"
        /* type="number" */
        type="text"
        placeholder="Colis chargés"
        value={field1}
        onChangeText={(text) => setField1(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="delivered"
        /* type="number" */
        type="text"
        placeholder="Colis livrés"
        value={field2}
        onChangeText={(text) => setField2(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="returned"
        /* type="number" */
        type="text"
        placeholder="Colis ramenés"
        value={field3}
        onChangeText={(text) => setField3(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="other"
        /* type="number" */
        type="text"
        placeholder="Autre"
        value={field4}
        onChangeText={(text) => setField4(text)}
        keyboardType="numeric"
      />
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
};

export default DataForm;

/* import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const DataForm = ({ onAddPackage, onUpdatePackage }) => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  const handleSubmit = async () => {
    const data = {
      field1: Number(field1),
      field2: Number(field2),
      field3: Number(field3),
      field4: Number(field4)
    };

    if (!field1 || !field2 || !field3 || !field4) {
      alert("Veuillez compléter votre demande.");
      return;
    }

    try {
      const response = await axios.post('/addPackage', data);
      console.log(response);
      onAddPackage(response.data.package);
    } catch (error) {
      console.error(error);
      alert('Erreur non definie')
    }

    setField1('');
    setField2('');
    setField3('');
    setField4('');
  };

  return (
    <View>
      <TextInput
        name="loaded"
        placeholder="Colis chargés"
        value={field1}
        onChangeText={text => setField1(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="delivered"
        placeholder="Colis livrés"
        value={field2}
        onChangeText={text => setField2(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="returned"
        placeholder="Colis ramenés"
        value={field3}
        onChangeText={text => setField3(text)}
        keyboardType="numeric"
      />
      <TextInput
        name="other"
        placeholder="Autre"
        value={field4}
        onChangeText={text => setField4(text)}
        keyboardType="numeric"
      />
      <Button 
        title="Envoyer" 
        onPress={handleSubmit}
      />
    </View>
  );
};

export default DataForm; */


/* import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const DataForm = ({onAddPackage, onUpdatePackage}) => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

    const [formData, setFormData] = useState({})
  
    const handleSubmit = async (event) => {

      const data = {
        field1: Number(field1),
        field2: Number(field2),
        field3: Number(field3),
        field4: Number(field4)
      }

      event.preventDefault()
  
      if (!formData.loaded || !formData.delivered || !formData.returned || !formData.other) {
        alert("Veuillez compléter votre demande .")
        return;
      }
  
      if (formData._id) { 
        onUpdatePackage(formData._id, formData)
      } else {
        try {
          const response = await axios.post('/addPackage', formData)
          console.log(response)
          onAddPackage(response.data.package)
        } catch (error) {
          console.error(error)
        }
      }
      setFormData({
        loaded: '',
        delivered: '',
        returned: '',
        other: ''
      });
    };
  
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }

  return (
    <View>
      <TextInput
        name="loaded"
        placeholder="Colis chargés"
        value={field1}
        onChangeText={text => setField1(text)}
        onChange={handleInputChange}
        keyboardType="numeric"
      />
      <TextInput
        name="delivered"
        placeholder="Colis livrés"
        value={field2}
        onChangeText={text => setField2(text)}
        onChange={handleInputChange}
        keyboardType="numeric"
      />
      <TextInput
        name="returned"
        placeholder="Colis ramenés"
        value={field3}
        onChangeText={text => setField3(text)}
        onChange={handleInputChange}
        keyboardType="numeric"
      />
      <TextInput
        name="other"
        placeholder="Autre"
        value={field4}
        onChangeText={text => setField4(text)}
        onChange={handleInputChange}
        keyboardType="numeric"
      />
      <Button 
        title="Envoyer" 
        onPress={handleSubmit}
        type="submit" />
    </View>
  );
};

export default DataForm; */

 /*  const handleSubmit = () => {
    const data = {
      field1: Number(field1),
      field2: Number(field2),
      field3: Number(field3),
      field4: Number(field4),
    }; */

    // Envoyer la requête POST à votre API Node.js pour enregistrer les données

    /* axios.post('http://votre-api.com/data', data)
      .then(response => { */

        // Gérer la réponse de l'API en cas de succès de l'enregistrement

    /*   })
      .catch(error => { */

        // Gérer les erreurs de l'API

    /*   }); 
  };*/

  /**************************/
  /**************************/
  /**************************/