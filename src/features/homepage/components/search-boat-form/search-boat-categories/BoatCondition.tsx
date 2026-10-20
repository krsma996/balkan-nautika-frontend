import { BadgeCheck } from "lucide-react";

export const BoatCondition = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-condition" className="form-label">
        <BadgeCheck
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Stanje
      </label>

      <select
        id="boat-condition"
        name="condition"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite stanje
        </option>

        <option value="novo">Novo plovilo</option>
        <option value="polovno">Polovno plovilo</option>
        <option value="sve">Nova i polovna plovila</option>
      </select>
    </div>
  );
};
