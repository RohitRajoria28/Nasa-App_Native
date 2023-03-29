 
import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text} from 'react-native'


const RandomAsteroid = () => {

   const [id, setId] = useState<number>();
  const [finalID,setFinalID] = useState<number>();
  const [asteridName,setName]=useState<string | null>(null);
  const [data, setData] = useState<string[]>([]);
  const [flag,setFlag]=useState<boolean>(false);
  const [finalFlag,setFinalFlag]=useState<boolean>(false);
  const [nasa_jpl_url,Setnasa_jpl_url]=useState<string>();
  const [IPH,setIPH]=useState<string>();

  const Asteroids  =[2465633,3426410,3553060,3726710,3727181,3727639,3730577,3731587,3747356,3758838,54191333,54218591,2440012,3713989,3726788,3727036,3727179,3727662,3727663,3759353,3759690,3827337,3843641,3986741,54088823];
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${finalID}?api_key=l5cVGLqbDBUwiEM174GwCJ4zjuPDWYwychzz0JEG`);
        const result = await response.json();
        const Name=await result.name
        const nasa_url=await result.nasa_jpl_url;
         const isIPH= await result.is_potentially_hazardous_asteroid;
          setData([...data,result]);
          setName((Name)) 
          Setnasa_jpl_url(nasa_url);
          setIPH(isIPH);
      } catch (error) {
        console.error(error);
      }
    };
    
    if (finalID) {
      fetchData();
      
    }
  }, [finalID]);
  useEffect(()=>{
    console.log(asteridName);
    console.log(data);
    console.log(IPH)
    if(asteridName!=null){
      setFlag(true);
      
    } 
  },[data])

  
 useEffect(()=>{
    const handleRandom=()=>{
        const randomIndex: number = Math.floor(Math.random() *Asteroids.length);  
        setFinalID(Asteroids[randomIndex]);
      }
    if(!flag){
        handleRandom();
    }
      
 } )
 
  return (
    
    <View>
       <View style={styles.mainForm} >
        <View  >
          
          
          {flag && (
            <View  >
               <View></View>
               <View ></View>

               <Text style={styles.asteroidd}  >Your Random  Asteroid Data  🌠</Text>
              <Text   >1. Name : <Text style={styles.line2}  > {asteridName}</Text></Text>
              <Text   >2. nasa_jpl_url: <Text style={styles.line2} > {nasa_jpl_url}</Text> </Text>
              <Text   >3. is_potentially_hazardous_asteroid : 
              
              {
                IPH ? <Text style={styles.line2} >true</Text>: <Text style={styles.line2} >false</Text>
              } 
               </Text>
             
            </View>
          )} 

        </View>
       </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    },
    mainForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    formContainer: {
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center',
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
  

export default RandomAsteroid