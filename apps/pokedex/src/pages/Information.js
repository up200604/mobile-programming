import { Button, Text, View, } from 'react-native';
import { Link } from 'react-router-native';

function Information() {
    return (
        <View>
            <Text>Information Page</Text>

            <Link to='/'>
                <Text> Go To Home!!!</Text>
            </Link>
        </View>
    );
}

export default Information;