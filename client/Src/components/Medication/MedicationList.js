import React, { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMedications, markAsTaken } from "../../api/medications";
import { AuthContext } from "../../context/AuthContext";

const MedicationList = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data: meds = [], isLoading } = useQuery({
    queryKey: ["medications"],
    queryFn: () => fetchMedications(user.id),
  });

  const mutation = useMutation({
    mutationFn: markAsTaken,
    onSuccess: () => {
      queryClient.invalidateQueries(["medications"]);
    },
  });

  const handleMark = (id) => {
    const today = new Date().toISOString().split("T")[0];
    mutation.mutate({ medicationId: id, date: today });
  };

  const adherence = meds.length
    ? (
        (meds.filter((m) => m.taken_today === 1).length / meds.length) *
        100
      ).toFixed(0)
    : 0;

  if (isLoading) return <p>Loading medications...</p>;

  return (
    <div>
      <h3>Medication List</h3>
      <p>Adherence: {adherence}%</p>
      <ul>
        {meds.map((med) => (
          <li key={med.id}>
            {med.name} - {med.dosage} ({med.frequency}){" "}
            {med.taken_today ? (
              <span>✅ Taken</span>
            ) : (
              <button onClick={() => handleMark(med.id)}>Mark as Taken</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
