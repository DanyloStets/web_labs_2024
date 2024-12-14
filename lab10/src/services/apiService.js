import axios from "axios";
import {BASE_URL, FILTER_URL} from "../constants/apiUrls";

function generateFilterUrl({price, pass, author}) {
    let url = '';
    url += price !== '' ? `?price=${price}` : '?';
    url += pass !== '' ? `&pass=${pass}` : '';
    url += author !== '' ? `&author=${author}` : '';
    return url;
}

export async function getAllAirplanesRequest() {
    console.log(BASE_URL)
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function getAirplaneById(bookId) {
    try {
        const response = await axios.get(BASE_URL + `/${bookId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFilteredAirplanes({price, pass, author}) {
    const url = generateFilterUrl({price, pass, author});
    console.log(FILTER_URL + url);

    try {
        const response = await axios.get(FILTER_URL + url);
        if (response && response.data) {
            return response.data;
        } else {
            console.error('No data received');
        }
    } catch (error) {
        console.error(error);
    }
}
