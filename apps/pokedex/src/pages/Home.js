import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Link } from 'react-router-native';

function Home() {
    return (
        <View>
            <View style={styles.main}>
                <Image source={require('../../assets/pokebola.png')} />
                <View style={styles.inputs}>
                    <TextInput style={{ borderWidth: 1 }} placeholder='Search a Pokemon!' />
                    <Button title='Search' />
                </View>
                <View>
                    <Text>Filters!!!</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default Home;
