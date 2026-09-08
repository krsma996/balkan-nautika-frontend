import { Layers3 } from "lucide-react";

export const BoatMaterialType = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-material" className="form-label">
        <Layers3
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Materijal trupa
      </label>

      <select
        id="boat-material"
        name="material"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite materijal
        </option>

        <option value="aluminijum">Aluminijum</option>
        <option value="fiberglass">Fiberglass</option>
        <option value="drvo">Drvo</option>
        <option value="celik">Čelik</option>
        <option value="karbon">Karbon</option>
      </select>
    </div>
  );
};
