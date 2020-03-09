const API_KEY = process.env.API_KEY;

export function getExchangeRate(curr1, curr2) {
    let endpoint = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${curr1}&to_symbol=${curr2}&interval=5min&apikey=${API_KEY}`
    return fetch(endpoint).then(res => res.json());
}