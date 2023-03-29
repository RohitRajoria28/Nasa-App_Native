import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import API_KEY from "../Constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [id, setId] = useState<number>();
  const [finalID, setFinalID] = useState<number>();
  const [asteridName, setName] = useState<string | null>(null);
  const [data, setData] = useState<string[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [nasa_jpl_url, Setnasa_jpl_url] = useState<string>();
  const [IPH, setIPH] = useState<boolean>();

  const navigation = useNavigation();

  const Asteroids = [
    2465633, 3426410, 3553060, 3726710, 3727181, 3727639, 3730577, 3731587,
    3747356, 3758838, 54191333, 54218591, 2440012, 3713989, 3726788, 3727036,
    3727179, 3727662, 3727663, 3759353, 3759690, 3827337, 3843641, 3986741,
    54088823,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/neo/rest/v1/neo/${finalID}?api_key=${API_KEY}`
        );
        const result = await response.json();
        const Name = await result.name;
        const nasa_url = await result.nasa_jpl_url;
        const isIPH = await result.is_potentially_hazardous_asteroid;
        setData([...data, result]);
        console.log(data);
        setName(Name);
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

  useEffect(() => {
    if (asteridName !== null) {
      setFlag(true);
      {
        if (
          asteridName !== null &&
          nasa_jpl_url !== undefined &&
          IPH !== undefined
        ) {
          console.log(asteridName + " " + nasa_jpl_url + " " + IPH + " ");
          navigation.navigate("AsteroidData", {
            state: { asteridName, nasa_jpl_url, IPH, data },
          });
        }
      }
    }
  }, [data]);

  const handleChange = (text: string) => {
    setId(parseInt(text));
  };

  const handleClick = () => {
    setFinalID(id);
  };

  const handleRandom = () => {
    const randomIndex: number = Math.floor(Math.random() * Asteroids.length);
    setFinalID(Asteroids[randomIndex]);
  };

  return (
    <View>
      <View style={styles.mainForm}>
        <Text style={styles.mainWelcome}>Welcome to Asteroid World</Text>
        <TextInput
          data-testid="input-value"
          style={styles.mainInput}
          placeholder="Enter Asteroid ID"
          keyboardType="numeric"
          value={id?.toString() || ""}
          onChangeText={handleChange}
        />
        <TouchableOpacity
          style={styles.mainRandom}
          onPress={() => navigation.navigate("RandomAsteroid")}
        >
          <Text style={styles.mainRandom}>Generate Random Asteroid</Text>
        </TouchableOpacity>

        <Button
          title="Submit"
          style={styles.mainSubmit}
          disabled={!id}
          onPress={handleClick}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginTop: "5%",
    textAlign: "center",
  },
  mainWelcome: {
    color: "#b328f3",
    fontFamily: "Georgia, Times New Roman, Times, serif",
  },
  appLogo: {
    height: "40%",
    pointerEvents: "none",
  },
  formContainer: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
  },
  mainForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainInput: {
    margin: "5px 10px 10px",
    height: 30,
  },
  mainRandom: {
    margin: "5px 10px 10px",
    paddingBottom: "10",
    borderRadius: "10px",
    backgroundColor: "lightyellow",
    height: 30,
  },
  Randombutton: {
    backgroundColor: "#007AFF",
    margin: "5px 10px 10px",
    paddingBottom: 20,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  mainSubmit: {
    margin: "5px 10px 10px",
    height: 30,
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  appLink: {
    color: "#61dafb",
  },
});

export default Home;
