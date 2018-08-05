import Config from 'react-native-config';

class Api {
    static _getApiUrl(resource) {
        return Config.API_BASE + resource;
    }
    static _request(resource, method, query={}, body={}) {

    }
    static post(resource, body) {

    }
    static put(resource, body) {

    }
    static patch(resource, body) {

    }
    static get(resource, query={}) {

    }
}

export default Api;

