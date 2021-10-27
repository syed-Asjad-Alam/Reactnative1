import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View ,Button, Pressable} from 'react-native';


const MainComp = (props) => {
  const [playernumber,setplayernumber] = React.useState(1)
  return (
      <View style={styles.centeredView}>
        <Modal animationType="none" visible={true}>
        <View style={styles.centeredView}>
          <Text>Player {playernumber}</Text>
          <Text>Player {playernumber}'s symbol {props.title} </Text>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable></Pressable>
  
            </View>
          </View>
        </View>
          
          
        </Modal>
        
       
      </View>
    );

}
const App = () => {
  const [isStarted, setStart] = React.useState(false)
  const [Playersymbol, setPlayerSymbol] = React.useState()
  return (
    <View style={styles.centeredView}>
      <Text>Tic Tac Toe Game</Text>
      <Text>Select Your Symbol</Text>
      <View style={{flexDirection:'row',margin:10}}>
        <View style={{width:100,margin:20}}>
          {!isStarted && <Button title="O" onPress={() => {
            setStart(true)
            setPlayerSymbol("O")}} />}
        </View>
        <View style={{width:100,margin:20}}>
          {!isStarted && <Button title="X" onPress={() => {
            setStart(true)
            setPlayerSymbol("X")}} />}
        </View>
      </View>
      {isStarted && <MainComp title={Playersymbol} />}
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