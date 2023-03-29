import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
const AsteroidData = ({route}) => {
    console.log(route);
  return (
    <View style={styles.center} >
        <Text style={styles.asteroidd} >Asteroid DATA</Text>
        <Text  >Name : <Text style={styles.line2} >{route.params.state.asteridName}</Text> </Text>
        <Text>nasa_jpl_url: <Text style={styles.line2} > {route.params.state.nasa_jpl_url}</Text></Text>
        <Text>is_potentially_hazardous_asteroid :
            <Text style={styles.line2}>
         {route.params.state.IPH ? <Text>True</Text> : <Text>False</Text>  }

            </Text>
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    },
    asteroidd: {
      marginTop: '20vh',
      color: 'rgb(231, 50, 134)',
    },
    line2: {
      color: 'rgb(189, 65, 185)',
    },
    asteroid: {
      width: 60,
      height: 40,
      borderRadius: '20px 20px 0 0',
      backgroundColor: 'linear-gradient(45deg, #b98686 25%, transparent 25%, transparent 75%, #874545 75%, #d53c3c)',
      boxShadow: '0 0 10px rgba(250, 2, 2, 0.5)',
      position: 'absolute',
      top: -20,
      left: -40,
      animationName: 'asteroid',
      animationDuration: '3s',
      animationTimingFunction: 'steps(10, end)',
      animationIterationCount: 'infinite',
    },
    asteroid2: {
      width: 40,
      height: 20,
      backgroundColor: '#b5b5b5',
      border: '1px solid #5a5a5a',
      boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.3)',
      position: 'absolute',
      left: -40,
      top: -20,
      animationName: 'asteroid2',
      animationDuration: '20s',
      animationTimingFunction: 'steps(10, end)',
      animationIterationCount: 'infinite',
    },
    button: {
      display: 'inline-block',
      padding: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      textDecorationLine: 'none',
      color: '#ffffff',
      backgroundColor: '#007bff',
      borderWidth: 0,
      borderRadius: 4,
      cursor: 'pointer',
      transitionProperty: 'all',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease',
    },
    buttonHover: {
      backgroundColor: '#0069d9',
    },
    buttonFocus: {
      
      shadowColor: '#ffffff',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 0,
      shadowOpacity: 1,
      borderWidth: 2,
      borderColor: '#007bff',
    },
    buttonActive: {
      transform: [{ translateY: 1 }],
    },
}) ;
  

export default AsteroidData