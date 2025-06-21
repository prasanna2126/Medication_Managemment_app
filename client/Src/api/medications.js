import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchMedications = async (userId) => {
  const res = await axios.get(`${BASE_URL}/medications/${userId}`);
  return res.data;
};

export const addMedication = async (medication) => {
  const res = await axios.post(`${BASE_URL}/medications`, medication);
  return res.data;
};

export const markAsTaken = async ({ medicationId, date }) => {
  const res = await axios.post(`${BASE_URL}/medications/mark`, {
    medicationId,
    date,
  });
  return res.data;
};
