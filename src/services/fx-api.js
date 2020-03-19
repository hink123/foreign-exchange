const API_KEY = process.env.API_KEY;

export function getExchangeRate(curr1, curr2, timeFormat) {
    let endpoint = `https://www.alphavantage.co/query?function=${timeFormat}&from_symbol=${curr1}&to_symbol=${curr2}&interval=60min&apikey=${API_KEY}`
    return fetch(endpoint).then(res => res.json());
}