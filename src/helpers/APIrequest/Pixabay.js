import axios from 'axios';

const URL = 'https://pixabay.com/api';
const KEY_API = '15687137-c5f0f01058e95950ce1cda2fd';

export const getImagesPXB = async (string, pageValue) => {
    return await axios.get(URL, {
        params: {
            q: string,
            page: pageValue,
            key: KEY_API,
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12,
        }
    })
};


