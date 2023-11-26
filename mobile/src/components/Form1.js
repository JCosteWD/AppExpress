import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const DataForm = () => {
  const [loaded, setLoaded] = useState('')
  const [delivered, setDelivered] = useState('')
  const [returned, setReturned] = useState('')
  const [other, setOther] = useState('')
  const [options1, setOptions1] = useState([])
  const [selectedOption1, setSelectedOption1] = useState('')
  const [options2, setOptions2] = useState([])
  const [selectedOption2, setSelectedOption2] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://192.168.1.163:7000/groups')
        if (response1.data.groups && Array.isArray(response1.data.groups)) {
          const options = response1.data.groups.map(group => ({
            value: group._id,
            label: group.depot
          }))
          setOptions1(options);
        } else {
          console.error("La réponse pour options1 n'est pas un tableau valide.")
        }

        const response2 = await axios.get('http://192.168.1.163:7000/tours')
        if (response2.data.tours && Array.isArray(response2.data.tours)) {
          const options = response2.data.tours.map(tour => ({
            value: tour._id,
            label: `${tour.depot} - ${tour.tournee}`
          }))
          setOptions2(options)
        } else {
          console.error("La réponse pour options2 n'est pas un tableau valide.")
        }
      } catch (error) {
        console.error(error)
      }
    };

    fetchData()
  }, [])

  const handleSubmit = async () => {
    const data = {
      loaded: Number(loaded),
      delivered: Number(delivered),
      returned: Number(returned),
      other: Number(other),
      option1: selectedOption1,
      option2: selectedOption2,
    }

    if (!loaded || !delivered || !returned || !other || !selectedOption1 || !selectedOption2) {
      alert('Veuillez compléter tous les champs.')
      return
    }

    try {
      const response = await axios.post('http://192.168.1.163:7000/addPackage', data)
      console.log(response)
      alert("Données correctement envoyées ! Merci ")
    } catch (error) {
      console.error(error)
    }

    setLoaded('')
    setDelivered('')
    setReturned('')
    setOther('')
    setSelectedOption1('')
    setSelectedOption2('')
  };

  const updateToursForDepot = async (depotId) => {
    console.log("Updating tours for depotId:", depotId)
  
    try {
      const response = await axios.get(`http://192.168.1.163:7000/tours/${depotId}`)
      console.log(response.data)
      if (response.data.tours && Array.isArray(response.data.tours)) {
        const options = response.data.tours.map(tour => ({
          value: tour._id,
          label: `${tour.depot} - ${tour.tournee}`
        }))
        setOptions2(options)
        console.log("Updated options2:", options)
      } else {
        console.error("La réponse pour options2 n'est pas un tableau valide.")
      }
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <View style={styles.container}>
      <Picker
        style={[styles.picker, { marginBottom: 10 }]}
        selectedValue={selectedOption1}
        onValueChange={itemValue => {
          console.log("Selected Option 1:", itemValue)
          setSelectedOption1(itemValue)
          updateToursForDepot(itemValue)
          console.log(updateToursForDepot)
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
          console.log("Selected Value (Picker 2):", itemValue)
          setSelectedOption2(itemValue)
          console.log("Selected Option 2 (after update):", selectedOption2)
        }}
      >
        <Picker.Item label="Tournée" value="" />
          {options2.map(option => (
        <Picker.Item key={`${option.value}-2`} label={option.label} value={option.value} />
        ))}

      </Picker>
      <TextInput
        style={styles.textInput}
        placeholder="Colis chargés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={loaded}
        onChangeText={text => setLoaded(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Colis livrés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={delivered}
        onChangeText={text => setDelivered(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Colis ramenés"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={returned}
        onChangeText={text => setReturned(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.textInput, { marginBottom: 5 }]}
        placeholder="Autre"
        placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
        value={other}
        onChangeText={text => setOther(text)}
        keyboardType="numeric"
      />
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 200
  },
  picker: {
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
})

export default DataForm