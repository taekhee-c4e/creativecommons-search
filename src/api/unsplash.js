import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3cb6db6b7f60faed2441a10e29e91e91d2a407fff3a35ff750515db524618b96'
    }
});
