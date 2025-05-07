import axiosInstance from '../api/axionsConfig';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post('/auth/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  // Para verificar si el usuario está autenticado
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get('/auth/check-auth');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Para registrar un nuevo usuario
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserDetails: async () => {
    try {
      const response = await axiosInstance.get('/auth/user/details');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};