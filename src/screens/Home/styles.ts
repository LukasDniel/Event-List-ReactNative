import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#122519',
      padding: 24,
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#222222',
      borderRadius: 5,
      color: '#fff',
      padding: 16,
    },

    btnText: {
      color: '#fff',
      fontSize: 30
    },
    btn: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#007e80',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      gap: 10,
      marginTop: 36,
      marginBottom: 42,
    },
    listEmpty: {
      color: '#fff',
      textAlign: 'center'
    },
    qtdNames:{
      fontSize: 22,
      textAlign: 'center',
      color: '#fff',
      marginBottom: 42
    }
  })