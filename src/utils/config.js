// export const api = VITE_API;

// let method = GET;
// let token =  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTAwZjZhZDhiNTkyMzM3NTYxYTRhMzI2NGNhZmIwNyIsIm5iZiI6MTcyODMzOTYzOC44MTksInN1YiI6IjY3MDQ1ZWI2YTVmMjlmNDNhNTc0MGI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qFOlxHMhE_zfXhw6GT7_PyQ1ei4sOhDvDHAE60aCQu4';


export const requestConfig = (method, data, token = null, image = null) => {
    let config;

    config = {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}

