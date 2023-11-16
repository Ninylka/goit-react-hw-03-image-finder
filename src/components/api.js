import axios from "axios";
const KEY_URL = "39700521-aba51b42bae9e0a28fdb59303"
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchSearch = async ({ query, page}) => {
   
    const searchParams = new URLSearchParams({
        key: KEY_URL,
        q: query,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
        page,
        per_page: 12,
    });

    const response = await axios.get(`?${searchParams}`);
    return response.data;
};


