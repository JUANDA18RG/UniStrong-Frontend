import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TraerRutinadeeEntrenador } from "../../api/Ejericios";

const SelectRutina = ({ onSelectionChange, personaId }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const response = await TraerRutinadeeEntrenador(personaId);
        console.log("Rutinas obtenidas:", response.data);
        setRutinas(response.data);
      } catch (error) {
        console.error("Error al obtener las rutinas:", error);
      }
    };

    if (personaId) {
      fetchRutinas();
    }
  }, [personaId]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectionChange(value);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="rutina-select-label">Rutina</InputLabel>
      <Select
        labelId="rutina-select-label"
        id="rutina-select"
        value={selectedOption}
        label="Rutina"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Seleccione una rutina</em>
        </MenuItem>
        {rutinas.map((rutina) => (
          <MenuItem key={rutina.id} value={rutina.id}>
            {rutina.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectRutina;
