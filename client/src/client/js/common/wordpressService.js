import axios from 'axios';
import {API_URL, BASE_URL} from './constants';


export async function loadHome(language) {
    return await axios.get(BASE_URL + language + API_URL + 'home');
}

export async function loadAbout(language) {
    return await axios.get(BASE_URL + language + API_URL + 'about');
}

export async function loadClasses(language) {
    return await axios.get(BASE_URL + language + API_URL + 'classes');
}

export async function loadTeacher(language) {
    return await axios.get(BASE_URL + language + API_URL + 'teacher');
}

export async function loadPartner(language) {
    return await axios.get(BASE_URL + language + API_URL + 'partner');
}