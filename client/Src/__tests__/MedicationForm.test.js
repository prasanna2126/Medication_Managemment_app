import { render, screen } from "@testing-library/react";
import MedicationForm from "../components/Medication/MedicationForm";
import { AuthContext } from "../context/AuthContext";

test("renders medication form", () => {
  render(
    <AuthContext.Provider value={{ user: { id: 1 } }}>
      <MedicationForm />
    </AuthContext.Provider>
  );
  expect(screen.getByPlaceholderText("Medication Name")).toBeInTheDocument();
});
