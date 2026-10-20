import { Anchor } from "lucide-react";
import { getBrandsByType } from "../../models/SearchBoatFormModel.types";

interface BoatModelsProps {
  boatType: string;
  value: string;
  onChange: (value: string) => void;
}

export const BoatModels = ({ boatType, value, onChange }: BoatModelsProps) => {
  const options = getBrandsByType(boatType);
  const disabled = !boatType;

  return (
    <div className="form-field">
      <label htmlFor="boat-model" className="form-label">
        <Anchor
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Model
      </label>

      <select
        id="boat-model"
        name="boatModel"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="form-control"
      >
        <option value="">
          {disabled ? "Prvo izaberite tip plovila" : "Svi modeli"}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};