import api from ".";

export const deleteCarImage = async (id: number) =>
  await api.delete(`/api/car-images/${id}`);
