import axios from "axios";
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

export const getAllArticles = async () => {
  try {
    const response = await api.get("/articles/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getArticleById = async (id: string) => {
  const response = await axios.get(`/articles/${id}`);
  return response.data;
};

