import React, { useState, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext";
import { addMedication } from "../../api/medications";

const MedicationForm = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    frequency: "",
  });

  const mutation = useMutation({
    mutationFn: addMedication,
    onSuccess: () => {
      queryClient.invalidateQueries(["medications"]);
      setForm({ name: "", dosage: "", frequency: "" });
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ ...form, userId: user.id });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Medication</h3>
      <input
        name="name"
        placeholder="Medication Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="dosage"
        placeholder="Dosage (e.g. 1 tablet)"
        value={form.dosage}
        onChange={handleChange}
        required
      />
      <input
        name="frequency"
        placeholder="Frequency (e.g. Once a day)"
        value={form.frequency}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MedicationForm;
