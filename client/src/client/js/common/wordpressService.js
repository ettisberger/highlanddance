import axios from 'axios';

class WordPressService {

    constructor() {
        this.baseUrl = 'http://localhost:8888/highlanddance/server/';
        this.apiUrl = '/api/v1/';
    }

    loadHome(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'home');
    }

    loadAbout(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'about');
    }

    loadClasses(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'classes');
    }

    loadTeacher(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'teacher');
    }

    loadPartner(language) {
        return axios.get(this.baseUrl + language + this.apiUrl + 'partner');
    }
}

export default WordPressService;