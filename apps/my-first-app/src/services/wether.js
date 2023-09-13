import currentWether from '../api/source/data.json';
import errorWether from '../api/source/error.json';

export async function getWether() {
    return currentWether;
}

export async function getWetherByName(cityName) {
    const findCity = currentWether.find((city) => {
        return city.location.name === cityName
    });

    // if (findCity === undefined) {
    //     return errorWether;
    // } else {
    //     return findCity
    // }

    // return findCity === undefined ? errorWether : findCity;

    return findCity || errorWether;
}