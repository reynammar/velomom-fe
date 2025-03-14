import api from "../core/core";

export const getVideo = async () => {
    try {
        const response = await api.get('/videos/');
        console.log('API Response:', response);
        console.log('API Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

export const getAllVideos = async () => {
  try {
    const response = await api.get("/videos/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
