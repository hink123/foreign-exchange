import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Email already taken!');
    })
    .then(({token}) => {
        tokenService.setToken(token);
    });
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout() {
    tokenService.removeToken();
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
}

// function addFavorite(currencies) {
//     return fetch(BASE_URL + 'favorites', {
//         method: 'POST',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }),
//         body: JSON.stringify(currencies)
//     }).then(res => res.json());
// }

// function deleteFavorite(idx) {
//     return fetch(`${BASE_URL}favorites/${idx}`, {
//         method: 'DELETE',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         })
//     }).then(res => res.json());
// }

export default {
    signup,
    getUser,
    logout, 
    login
};