import axios from 'axios';

class WordPressService {

    constructor() {
        this.baseUrl = 'http://localhost:8888/highlanddance/server/';
        this.apiUrl = '/api/v1/';
    }

    loadHome(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'home');
    }
}

export default WordPressService;