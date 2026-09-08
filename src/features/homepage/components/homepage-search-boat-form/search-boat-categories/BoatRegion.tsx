import { MapPin } from "lucide-react";

export const BoatRegion = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-region" className="form-label">
        <MapPin
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Region
      </label>

      <select
        id="boat-region"
        name="region"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite region
        </option>

        <option value="jadran">Jadran</option>
        <option value="dunav">Dunav</option>
        <option value="mediteran">Mediteran</option>
      </select>
    </div>
  );
};
