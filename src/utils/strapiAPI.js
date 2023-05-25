const API_URL = 'http://127.0.0.1:1355/api'

const strapiAPI = {

    get: async function ({path='/',API_URL = API_URL, body = {}}){
        const { data } = await axios.get(`${API_URL+path}`, body);
        return data
    },

    post: async function ({path='/',API_URL = API_URL, body = {}}){
        const { data } = await axios.post(`${API_URL+path}`, body);
        return data
    },

    delete: async function ({path='/',API_URL = API_URL, body = {}}){
        const { data } = await axios.delete(`${API_URL+path}`, body);
        return data
    },

    put: async function ({path='/',API_URL = API_URL, body = {}}){
        const { data } = await axios.put(`${API_URL+path}`, body);
        return data
    }

}


module.exports = strapiAPI
