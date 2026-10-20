import { Fuel } from "lucide-react";

export const BoatFuel = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-fuel" className="form-label">
        <Fuel
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Gorivo
      </label>

      <select
        id="boat-fuel"
        name="fuel"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite gorivo
        </option>

        <option value="dizel">Dizel</option>
        <option value="benzin">Benzin</option>
        <option value="elektricno">Električno</option>
        <option value="hibrid">Hibrid</option>
      </select>
    </div>
  );
};
