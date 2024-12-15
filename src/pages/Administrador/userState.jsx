import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  List,
  ListItem,
  ListItemText,
  Switch,
} from "@mui/material";
import { motion } from "framer-motion";

import Logo from "../../assets/images/Logo1.png";
import { TraerUsuarios, DesactivarUser } from "../../api/Ejericios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function UserState() {
  const [selectedType, setSelectedType] = useState("coach");
  const [userList, setUserList] = useState([]);
  const [changedUsers, setChangedUsers] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  const handleTypeChange = (event, newType) => {
    if (newType !== null) {
      setSelectedType(newType);
    }
  };

  const handleToggleActive = (id) => {
    setUserList((prevList) =>
      prevList.map((user) => {
        if (user.id === id) {
          const updatedUser = { ...user, state: !user.state };
          const userIndex = changedUsers.findIndex(
            (u) => u.email === user.email
          );
          if (userIndex === -1) {
            setChangedUsers((prev) => [
              ...prev,
              { email: user.email, state: updatedUser.state },
            ]);
          } else {
            const updatedChangedUsers = [...changedUsers];
            updatedChangedUsers[userIndex].state = updatedUser.state;
            setChangedUsers(updatedChangedUsers);
          }
          return updatedUser;
        }
        return user;
      })
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await TraerUsuarios();
        console.log(response.data);
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = userList.filter(
    (user) => user.userType === selectedType
  );

  const handleSaveChanges = async () => {
    try {
      const response = await DesactivarUser({ emails: changedUsers });
      console.log("response", response);
      console.log("Usuarios enviados:", changedUsers);
      if (response.status === 200) {
        enqueueSnackbar("Usuarios actualizados correctamente", {
          variant: "success",
        });
        console.log("Usuarios actualizados correctamente");
        setChangedUsers([]);
      }
    } catch (error) {
      console.log("Error al enviar usuarios:", error);
      enqueueSnackbar("Error al actualizar usuarios", {
        variant: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "jet.main",
        p: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          height: "100vh",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "600px",
            p: 4,
            boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
            borderRadius: "16px",
            backgroundColor: "white",
            overflow: "auto",
            maxHeight: "100%",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                padding: "10px",
                border: "5px solid #ff0000",
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "redRYB.main", mt: 2 }}
            >
              Gestión de Usuarios
            </Typography>
            <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "redRYB.main",
              "&:hover": {
                backgroundColor: "redPigment.main",
              },
              mt: 2,
              width: "200px", 
              marginBottom: "10px",
              

            }}
            onClick={() => navigate('/Visualizar')} 
          >
            Visulizar Usuarios
          </Button>
            <Typography variant="subtitle1">
              Cambia el estado de los usuarios por tipo
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={selectedType}
            exclusive
            onChange={handleTypeChange}
            fullWidth
            sx={{ mb: 4 }}
          >
            <ToggleButton
              value="coach"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "redRYB.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "redRYB.main",
                  },
                },
              }}
            >
              Entrenador
            </ToggleButton>
            <ToggleButton
              value="nutriologo"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "redRYB.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "redRYB.main",
                  },
                },
              }}
            >
              Nutriólogo
            </ToggleButton>
            <ToggleButton
              value="cliente"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "redRYB.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "redRYB.main",
                  },
                },
              }}
            >
              Cliente
            </ToggleButton>
          </ToggleButtonGroup>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Usuarios {selectedType}
          </Typography>
          <List>
            {filteredUsers.map((user) => (
              <ListItem
                key={user.id}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText primary={user.email} />
                <Switch
                  checked={user.state}
                  onChange={() => handleToggleActive(user.id)}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#FF2625",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#FF2625",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSaveChanges}
            sx={{
              backgroundColor: "redRYB.main",
              "&:hover": {
                backgroundColor: "redPigment.main",
              },
            }}
          >
            Guardar Cambios
          </Button>
        </Card>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          p: 2,
        }}
      >
        <motion.img
          src={"https://images3.alphacoders.com/123/1233907.jpg"}
          alt="Nutriólogo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </Box>
    </Box>
  );
}

export default UserState;
