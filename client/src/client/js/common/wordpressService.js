import axios from 'axios';

const baseUrl = 'http://localhost:8888/highlanddance/server/';
const apiUrl = '/api/v1/';

export async function loadHome(language) {
    return await axios.get(baseUrl + language + apiUrl + 'home');
}

export async function loadAbout(language) {
    return await axios.get(baseUrl + language + apiUrl + 'about');
}

export async function loadClasses(language) {
    return await axios.get(baseUrl + language + apiUrl + 'classes');
}

export async function loadTeacher(language) {
    return await axios.get(baseUrl + language + apiUrl + 'teacher');
}

export async function loadPartner(language) {
    return await axios.get(baseUrl + language + apiUrl + 'partner');
}