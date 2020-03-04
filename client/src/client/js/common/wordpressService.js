import axios from 'axios';
import { API_URL, BASE_URL } from './constants';


export async function loadHome(language) {
  return axios.get(`${BASE_URL + language + API_URL}home`);
}

export async function loadAbout(language) {
  return axios.get(`${BASE_URL + language + API_URL}about`);
}

export async function loadHighlandHustle(language) {
  return axios.get(`${BASE_URL + language + API_URL}hustle`);
}

export async function loadClasses(language) {
  return axios.get(`${BASE_URL + language + API_URL}classes`);
}

export async function loadTeacher(language) {
  return axios.get(`${BASE_URL + language + API_URL}teacher`);
}

export async function loadPartner(language) {
  return axios.get(`${BASE_URL + language + API_URL}partner`);
}

export async function loadGallery(language) {
  return axios.get(`${BASE_URL + language + API_URL}gallery`);
}

export async function loadVideos(language) {
  return axios.get(`${BASE_URL + language + API_URL}videos`);
}

export async function sendMail(name, firstname, email, text) {
  return axios.post(`${BASE_URL + API_URL}mail`, { name, firstname, email, text });
}
