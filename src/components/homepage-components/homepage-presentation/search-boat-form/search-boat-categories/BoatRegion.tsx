export const BoatRegion = () =>{
    return (
      <div>
        <select className="p-2 border rounded w-full max-h-48 overflow-y-auto">
          <option value="">Izaberite region</option>
          <optgroup label="1. Grupa (Beograd)">
            <option value="beograd-centar">Beograd - Centar</option>
            <option value="beograd-vozda">Beograd - Voždovac</option>
            <option value="beograd-novi-beograd">Beograd - Novi Beograd</option>
          </optgroup>
          <optgroup label="2. Grupa (Širi okrug)">
            <option value="subotica">Subotica</option>
            <option value="nis">Niš</option>
            <option value="novi-sad">Novi Sad</option>
            <option value="kragujevac">Kragujevac</option>
          </optgroup>
        </select>
      </div>
    );
}