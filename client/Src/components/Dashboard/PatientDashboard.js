import React from "react";
import MedicationForm from "../Medication/MedicationForm";
import MedicationList from "../Medication/MedicationList";

const PatientDashboard = () => {
  return (
    <div>
      <h2>Patient Dashboard</h2>
      <MedicationForm />
      <MedicationList />
    </div>
  );
};

export default PatientDashboard;
