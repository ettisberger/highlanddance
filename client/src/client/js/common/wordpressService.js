import axios from 'axios';
import {API_URL, BASE_URL} from './constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export async function loadHome(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}home`);
}

export async function loadDancing(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}dancing`);
}

export async function loadHighlandHustle(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}hustle`);
}

export async function loadClasses(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}classes`);
}

export async function loadTeacher(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}teacher`);
}

export async function loadPartner(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}partner`);
}

export async function loadGallery(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}gallery`);
}

export async function loadStudio() {
    return axios.get(`${process.env.REACT_APP_API_URL}studio`);
}

export async function loadVideos(language) {
    return axios.get(`${process.env.REACT_APP_API_URL}videos`);
}

export async function sendMail(name, firstname, email, text) {
    return axios.post(`${process.env.REACT_APP_API_URL}mail`, {name, firstname, email, text});
}
