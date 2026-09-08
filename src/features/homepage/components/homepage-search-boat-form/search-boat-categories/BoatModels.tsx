import { Tags } from "lucide-react";

export const BoatModels = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-model" className="form-label">
        <Tags
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
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite model
        </option>

        <option value="a1">A1</option>
        <option value="s2">S2</option>
        <option value="s3">S3</option>
        <option value="44">44</option>
      </select>
    </div>
  );
};
