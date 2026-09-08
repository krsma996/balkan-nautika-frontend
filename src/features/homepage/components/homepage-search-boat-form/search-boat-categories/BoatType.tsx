import { ShipWheel } from "lucide-react";

export const BoatType = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-type" className="form-label">
        <ShipWheel
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Tip plovila
      </label>

      <select
        id="boat-type"
        name="boatType"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite tip plovila
        </option>

        <option value="camac">Čamac</option>
        <option value="jahta">Jahta</option>
        <option value="gliser">Gliser</option>
        <option value="katamaran">Katamaran</option>
      </select>
    </div>
  );
};
