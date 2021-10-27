import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View ,Button, Pressable} from 'react-native';


const MainComp = (props) => {
  const [playernumber,setplayernumber] = React.useState(1)
  const [symbol,setsymbol] = React.useState(props.title)
  const [first,setfirst] = React.useState()
  const [second,setsecond] = React.useState()
  const [third,setthird] = React.useState()
  const [fourth,setfourth] = React.useState()
  const [fifth,setfifth] = React.useState()
  const [sixth,setsixth] = React.useState()
  const [seventh,setseventh] = React.useState()
  const [eighth,seteighth] = React.useState()
  const [ninth,setninth] = React.useState()

  const maggi = (numb,props) => {
    switch(numb) {
    case 1:
      if (props == "O"){
        setfirst("O")
        break
      }
      else if(props == "X"){
        setfirst("X")
        break
    }
    case 2:
      if (props == "O"){
        setsecond("O")
        break
      }
      else if(props == "X"){
        setsecond("X")
        break
    }
    case 3:
      if (props == "O"){
        setthird("O")
        break
      }
      else if(props == "X"){
        setthird("X")
        break
    }
    case 4:
      if (props == "O"){
        setfourth("O")
        break
      }
      else if(props == "X"){
        setfourth("X")
        break
    }
    case 5:
      if (props == "O"){
        setfifth("O")
        break
      }
      else if(props == "X"){
        setfifth("X")
        break
    }
    case 6:
      if (props == "O"){
        setsixth("O")
        break
      }
      else if(props == "X"){
        setsixth("X")
        break
    }
    case 7:
      if (props == "O"){
        setseventh("O")
        break
      }
      else if(props == "X"){
        setseventh("X")
        break
    }
    case 8:
      if (props == "O"){
        seteighth("O")
        break
      }
      else if(props == "X"){
        seteighth("X")
        break
    }
    case 9:
      if (props == "O"){
        setninth("O")
        break
      }
      else if(props == "X"){
        setninth("X")
        break
    }
  }


  }
  return (
      <View style={styles.centeredView}>
        <Modal animationType="none" visible={true}>
        <View style={styles.centeredView}>
          <Text>Player {playernumber} turn</Text>
          <Text>Player {playernumber}'s symbol {symbol} </Text>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => {
                maggi(1,props.title)
                if (playernumber == 1) {
                setplayernumber(2)
                  }
                else if (playernumber == 2) {
                setplayernumber(1)
                }
                
                if (props.title == "O"){
                  setsymbol("X")
                }
                else if (props.title == "X"){
                  setsymbol("O")
                }}}>{first}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => {
                maggi(2,props.title)}}>{second}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(3,props.title)}>{third}</Pressable>
  
            </View>
          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(4,props.title)}>{fourth}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(5,props.title)}>{fifth}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(6,props.title)}>{sixth}</Pressable>
  
            </View>
          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(7,props.title)}>{seventh}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(8,props.title)}>{eighth}</Pressable>
  
            </View>
            <View style={styles.modalView}>
              <Pressable style={styles.modalView} onPress={() => maggi(9,props.title)}>{ninth}</Pressable>
  
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