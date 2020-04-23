import tokenService from './tokenService';
const BASE_URL = '/api/favorites/'

function addFavorite(currencies) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(currencies)
    }).then(res => res.json());
}

function deleteFavorite(idx) {
    return fetch(`${BASE_URL}${idx}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    }).then(res => res.json());
}

function getFavorites() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    }).then(res => res.json());
}

export default {
    addFavorite,
    deleteFavorite,
    getFavorites
}