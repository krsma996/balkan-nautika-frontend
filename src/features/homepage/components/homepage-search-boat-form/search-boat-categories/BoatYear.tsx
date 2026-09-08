import { CalendarDays } from "lucide-react";

export const BoatYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="form-field">
      <label htmlFor="boat-year-from" className="form-label">
        <CalendarDays
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Godište
      </label>

      <div className="grid grid-cols-2 gap-3">
        <input
          id="boat-year-from"
          name="yearFrom"
          type="number"
          min="1900"
          max={currentYear}
          inputMode="numeric"
          placeholder="Od"
          aria-label="Minimalno godište"
          className="form-control"
        />

        <input
          id="boat-year-to"
          name="yearTo"
          type="number"
          min="1900"
          max={currentYear}
          inputMode="numeric"
          placeholder="Do"
          aria-label="Maksimalno godište"
          className="form-control"
        />
      </div>
    </div>
  );
};