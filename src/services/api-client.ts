import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0802650a7cec4990991dc50e433871fe'
    }
})