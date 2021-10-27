import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View,Pressable } from 'react-native';

const App = () => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="none" visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.centeredView,{flexDirection:'row'}}>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
        </View>
        <View style={styles.centeredView,{flexDirection:'row'}}>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
        </View>
        <View style={styles.centeredView,{flexDirection:'row'}}>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
          <View style={styles.modalView}>

          </View>
        </View>
      </View>
        
        
      </Modal>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  
});
export default App