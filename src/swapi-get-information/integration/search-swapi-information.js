import axios from 'axios';

axios.create({
    timeout: 600000,
    headers: {'Content-Type': 'application/json'}
});

export default {
    getPlanetInformation: (id) => {
        return axios.get(`https://swapi.py4e.com/api/planets/${id}/`);
    }
};
