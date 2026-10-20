import { Euro } from "lucide-react";

export const BoatPrice = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-price-from" className="form-label">
        <Euro
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Cena
        <span className="normal-case tracking-normal text-[#385170]/60">
          (€)
        </span>
      </label>

      <div className="grid grid-cols-2 gap-3">
        <input
          id="boat-price-from"
          name="priceFrom"
          type="number"
          min="0"
          inputMode="numeric"
          placeholder="Od"
          aria-label="Minimalna cena"
          className="form-control"
        />

        <input
          id="boat-price-to"
          name="priceTo"
          type="number"
          min="0"
          inputMode="numeric"
          placeholder="Do"
          aria-label="Maksimalna cena"
          className="form-control"
        />
      </div>
    </div>
  );
};
