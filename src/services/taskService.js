import axiosInstance from '../api/axionsConfig';

export const taskService = {
    createTask: async (newTaskData) => {
        try {
            const response = await axiosInstance.post('/task/create', newTaskData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Puedes extender este servicio con más funciones como:
    // getTasks, updateTask, deleteTask, etc.
};

export default taskService;