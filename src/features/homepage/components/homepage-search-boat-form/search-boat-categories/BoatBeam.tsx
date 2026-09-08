import { Ruler } from "lucide-react";

export const BoatBeam = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-beam-from" className="form-label">
        <Ruler
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Širina trupa
        <span className="normal-case tracking-normal text-[#385170]/60">
          (m)
        </span>
      </label>

      <div className="grid grid-cols-2 gap-3">
        <input
          id="boat-beam-from"
          name="beamFrom"
          type="number"
          min="0"
          step="0.1"
          inputMode="decimal"
          placeholder="Od"
          aria-label="Minimalna širina trupa"
          className="form-control"
        />

        <input
          id="boat-beam-to"
          name="beamTo"
          type="number"
          min="0"
          step="0.1"
          inputMode="decimal"
          placeholder="Do"
          aria-label="Maksimalna širina trupa"
          className="form-control"
        />
      </div>
    </div>
  );
};
