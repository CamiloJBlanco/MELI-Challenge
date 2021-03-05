import axios from 'axios';
import Constant from './Constant';

const makeSearch = async search => {
    let url = Constant.url + "api/items?limit=4&q=" + search;
    const response = await axios.get(url)
    return response.data
}

const getItem = async id => {
    let url = Constant.url + "api/items/" + id;
    const response = await axios.get(url)
    return response.data
}


export default {makeSearch, getItem};