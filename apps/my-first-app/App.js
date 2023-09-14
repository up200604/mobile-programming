import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';
import { getWetherByName } from './src/services/wether';
import { useState } from 'react';

// Componente View -> DIV HTML
// Componente Text -> p HTML

export default function App() {
    const [city, setCity] = useState("");
    const [wether, setWether] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const onPressHanddle = async () => {
        setLoading(true)
        try {
            const resp = await getWetherByName(city);
            const errorExist = Boolean(resp.error)
            setError(errorExist);
            setWether(resp);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const handdleChangeText = (e) => {
        setCity(e);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Wether App</Text>
            <View>
                <Text>Write a City</Text>
                <TextInput
                    placeholder='City'
                    style={styles.input}
                    value={city}
                    onChangeText={handdleChangeText}

                />
                <Button
                    title='Search'
                    onPress={onPressHanddle}
                />
            </View>
            {
                loading && <Text>Loading!!!!!!</Text>
            }
            {
                !error && !loading && wether && (
                    <>
                        <View style={{ marginTop: 20 }}>
                            <Text>Contry: {wether.location.country}</Text>
                            <Text>Region: {wether.location.region}</Text>
                            <Text>City: {wether.location.name}</Text>
                            <Text>Temp: {wether.current.temp_c}</Text>
                            <Text>Condition: {wether.current.condition.text}</Text>
                        </View>
                        <Image
                            style={{
                                width: 64,
                                height: 64
                            }}
                            source={{
                                uri: 'https:' + wether.current.condition.icon
                            }}
                        />
                    </>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        fontSize: 30,// <- Los pixeles son dependiendo del dispositivo
        color: "#8CC7FF"
    },
    input: {
        width: 250,
        marginVertical: 10,
    }
});
