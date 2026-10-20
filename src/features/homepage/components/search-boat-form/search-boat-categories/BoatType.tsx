import { ShipWheel } from "lucide-react";
import { NAUTICAL_BRANDS } from "../../models/SearchBoatFormModel.types";

interface BoatTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export const BoatType = ({ value, onChange }: BoatTypeProps) => {
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
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-control"
      >
        <option value="" disabled>
          Izaberite tip plovila
        </option>

        {NAUTICAL_BRANDS.map((group) => (
          <option key={group.key} value={group.key}>
            {group.label}
          </option>
        ))}
      </select>
    </div>
  );
};