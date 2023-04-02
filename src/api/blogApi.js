import api from "./api";

const createBlog = (data) => api.post(`/blog/create`, data);

const updateBlog = (id, data) => api.put(`/blog/update/${id}`, data);

const getBlog = (id) => api.get(`/blog/getById/${id}`);

export { createBlog, updateBlog, getBlog };
