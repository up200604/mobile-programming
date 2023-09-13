import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { getWetherByName } from './src/services/wether';
import { useState } from 'react';

// Componente View -> DIV HTML
// Componente Text -> p HTML

export default function App() {
    const [city, setCity] = useState("");
    const [wether, setWether] = useState();
    const [error, setError] = useState(false);

    const onPressHanddle = async () => {
        const resp = await getWetherByName(city);
        const errorExist = Boolean(resp.error)

        console.log({
            resp,
            errorExist
        })

        setError(errorExist);
        setWether(resp);
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
                !error && wether && (
                    <View>
                        <Text>Contry: {wether.location.country}</Text>
                        <Text>Region: {wether.location.region}</Text>
                        <Text>City: {wether.location.name}</Text>
                        <Text>Temp: {wether.current.temp_c}</Text>
                        <Text>Condition: {wether.current.condition.text}</Text>
                    </View>
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
        borderWidth: 1,
        height: 40,
        width: 250,
        marginVertical: 10
    }
});
