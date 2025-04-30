import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add error handling interceptor
api.interceptors.response.use(
    response => response,
    error => {
        if (process.env.REACT_APP_ENV === 'development') {
            console.error('API Error:', error.response?.data || error.message);
        }
        return Promise.reject(error);
    }
);

export const manufacturerService = {
    getAll: () => api.get('/manufacters/'),
    getById: (id: number) => api.get(`/manufacters/${id}`),
    create: (data: any) => api.post('/manufacters/', data),
    update: (id: number, data: any) => api.put(`/manufacters/${id}`, data),
    delete: (id: number) => api.delete(`/manufacters/${id}`),
};

export const itemService = {
    getAll: () => api.get('/items/'),
    getById: (id: number) => api.get(`/items/${id}`),
    create: (data: any) => api.post('/items/', data),
    update: (id: number, data: any) => api.put(`/items/${id}`, data),
    delete: (id: number) => api.delete(`/items/${id}`),
};

export const userService = {
    getAll: () => api.get('/users/'),
    getById: (id: number) => api.get(`/users/${id}`),
    create: (data: any) => api.post('/users/', data),
    update: (id: number, data: any) => api.put(`/users/${id}`, data),
    delete: (id: number) => api.delete(`/users/${id}`),
}; 