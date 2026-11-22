
import { Globe2 } from "lucide-react";

export const BoatCountry = () => {
  return (
    <div className="form-field">
      <label htmlFor="boat-country" className="form-label">
        <Globe2
          aria-hidden="true"
          className="form-label-icon"
          size={16}
          strokeWidth={2}
        />

        Država
      </label>

      <select
        id="boat-country"
        name="country"
        defaultValue=""
        className="form-control"
      >
        <option value="" disabled>
          Izaberite državu
        </option>

        <option value="albanija">Albanija</option>
        <option value="alzir">Alžir</option>
        <option value="bosna-i-hercegovina">Bosna i Hercegovina</option>
        <option value="crna-gora">Crna Gora</option>
        <option value="egipat">Egipat</option>
        <option value="francuska">Francuska</option>
        <option value="grcka">Grčka</option>
        <option value="hrvatska">Hrvatska</option>
        <option value="italija">Italija</option>
        <option value="izrael">Izrael</option>
        <option value="kipar">Kipar</option>
        <option value="liban">Liban</option>
        <option value="libija">Libija</option>
        <option value="malta">Malta</option>
        <option value="maroko">Maroko</option>
        <option value="monako">Monako</option>
        <option value="palestina">Palestina</option>
        <option value="slovenija">Slovenija</option>
        <option value="spanija">Španija</option>
        <option value="sirija">Sirija</option>
        <option value="tunis">Tunis</option>
        <option value="turska">Turska</option>
      </select>
    </div>
  );
};
