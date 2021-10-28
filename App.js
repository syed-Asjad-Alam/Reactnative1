import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View ,Button, Pressable} from 'react-native';




const App = () => {
  const [drawmodal, setdrawmodal] = React.useState(false)
  const [winnermodal, setwinnermodal] = React.useState(false)

  const [d1,setd1] = React.useState(false)
  const [d2,setd2] = React.useState(false)
  const [d3,setd3] = React.useState(false)
  const [d4,setd4] = React.useState(false)
  const [d5,setd5] = React.useState(false)
  const [d6,setd6] = React.useState(false)
  const [d7,setd7] = React.useState(false)
  const [d8,setd8] = React.useState(false)
  const [d9,setd9] = React.useState(false)


  const [playernumber,setplayernumber] = React.useState(1)
  const [symbol,setsymbol] = React.useState("X")
  const [b1,setb1] = React.useState()
  const [b2,setb2] = React.useState()
  const [b3,setb3] = React.useState()
  const [b4,setb4] = React.useState()
  const [b5,setb5] = React.useState()
  const [b6,setb6] = React.useState()
  const [b7,setb7] = React.useState()
  const [b8,setb8] = React.useState()
  const [b9,setb9] = React.useState()

  const [board,setboard] = React.useState([[1,2,3],[4,5,6],[7,8,9]])
  const handleChange = (row, column, event) => {
    let copy = [...board];
    copy[row][column] = event;
    setboard(copy);

  }
  const [count,setcount] = React.useState(0)

  const checkcount = () => count == 8 ? setdrawmodal(true): setdrawmodal(false)

  const checkwinner = () => {
    
      if ((board[0][0] == board[0][1]) && (board[0][0] == board[0][2])){
        setwinnermodal(true)
      }
      else if((board[1][0] == board[1][1]) && (board[1][0] == board[1][2])){
        setwinnermodal(true)
      }
      else if((board[2][0] == board[2][1]) && (board[2][0] == board[2][2])){
        setwinnermodal(true)
      }
      else if((board[0][0] == board[1][0]) && (board[0][0] == board[2][0])){
        setwinnermodal(true)
      }
      else if((board[0][1] == board[1][1]) && (board[0][1] == board[2][1])){
        setwinnermodal(true)
      }
      else if((board[0][2] == board[1][2]) && (board[0][2] == board[2][2])){
        setwinnermodal(true)
      }
      else if((board[0][0] == board[1][1]) && (board[0][0] == board[2][2])){
        setwinnermodal(true)
      }
      else if((board[0][2] == board[1][1]) && (board[0][2] == board[2][0])){
        setwinnermodal(true)
      }
       

  }


  return (
    <View style={styles.centeredView}>
      <Modal>
        <View style={styles.centeredView}>
          <Text>Player {playernumber}'s turn</Text>
          <Text>Player {playernumber}'s symbol is {symbol}</Text>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d1} onPress={() => {
                  symbol == "X" ? setb1("X") :setb1("O")
                  symbol == "X" ? handleChange(0,0,"X"):handleChange(0,0,"O") 
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd1(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b1}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d2} onPress={() => {
                  symbol == "X" ? setb2("X") :setb2("O")
                  symbol == "X" ? handleChange(0,1,"X"):handleChange(0,1,"O")
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd2(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b2}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d3} onPress={() => {
                  symbol == "X" ? setb3("X") :setb3("O")
                  symbol == "X" ? handleChange(0,2,"X"):handleChange(0,2,"O")
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd3(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b3}</Pressable>
            </View>

          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d4} onPress={() => {
                  symbol == "X" ? setb4("X") :setb4("O")
                  symbol == "X" ? handleChange(1,0,"X"):handleChange(1,0,"O")
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd4(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b4}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d5} onPress={() => {
                  symbol == "X" ? setb5("X") :setb5("O")
                  symbol == "X" ? handleChange(1,1,"X"):handleChange(1,1,"O")
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd5(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b5}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d6} onPress={() => {
                  symbol == "X" ? setb6("X") :setb6("O")
                  symbol == "X" ? handleChange(1,2,"X"):handleChange(1,2,"O")
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd6(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b6}</Pressable>
            </View>

          </View>
          <View style={styles.centeredView,{flexDirection:'row'}}>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d7} onPress={() => {
                  symbol == "X" ? setb7("X") :setb7("O")
                  symbol == "X" ? handleChange(2,0,"X"):handleChange(2,0,"O") 
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd7(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b7}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d8} onPress={() => {
                  symbol == "X" ? setb8("X") :setb8("O")
                  symbol == "X" ? handleChange(2,1,"X"):handleChange(2,1,"O") 
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd8(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b8}</Pressable>
            </View>
            <View style={styles.modalView}>
                <Pressable style={styles.modalView} disabled={d9} onPress={() => {
                  symbol == "X" ? setb9("X") :setb9("O")
                  symbol == "X" ? handleChange(2,2,"X"):handleChange(2,2,"O") 
                  playernumber == 1 ? setplayernumber(2) : setplayernumber(1)
                  symbol == "X" ? setsymbol("O"): setsymbol("X")
                  setd9(true)
                  setcount(count+1)
                  checkwinner()
                  checkcount()
                }}>{b9}</Pressable>
            </View>

          </View>
        </View>
        
      </Modal>
      <Modal animationType="slide"
        transparent={true}
        visible={drawmodal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setdrawmodal(!drawmodal);
        }}>
          <View style={styles.modalView}>
          <Text>Draw</Text>
          </View>
      </Modal>
      <Modal animationType="slide"
        transparent={true}
        visible={winnermodal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setwinnermodal(!winnermodal);
        }}>
        <View style={styles.modalView}>
        <Text>Winner</Text>
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