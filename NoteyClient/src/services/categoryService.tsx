import api from "../api";

export const getCategories = async () => {
  try {
    const response = await api.get("notes/categories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
