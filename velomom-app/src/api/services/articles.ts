import api from "../core/core";





export const getArticles = async () => {
    try {
        const response = await api.get('/articles/');
        console.log('API Response:', response);
        console.log('API Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};
