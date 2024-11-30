import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ObtenerUsuarios } from "../../api/Ejericios";

const SelectUser = ({ onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await ObtenerUsuarios();
        setUsuarios(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectionChange(value);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="user-select-label">Usuario</InputLabel>
      <Select
        labelId="user-select-label"
        id="user-select"
        value={selectedOption}
        label="Usuario"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Seleccione un usuario</em>
        </MenuItem>
        {usuarios.map((usuario) => (
          <MenuItem key={usuario.id} value={usuario.user.email}>
            {usuario.user.email}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectUser;
