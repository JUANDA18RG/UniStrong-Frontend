import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ViewUsers = () => {
  const users = [
    { type: 'Cliente', username: 'jdoe123', email: 'jdoe@mail.com', name: 'John Doe', dni: '12345678', phone: '555-1234' },
    { type: 'Entrenador', username: 'msmith321', email: 'msmith@mail.com', name: 'Mary Smith', dni: '98765432', phone: '555-9876' },
    { type: 'Nutricionista', username: 'aperez456', email: 'aperez@mail.com', name: 'Ana Pérez', dni: '11223344', phone: '555-5567' },
    { type: 'Cliente', username: 'bgreen789', email: 'bgreen@mail.com', name: 'Bob Green', dni: '66778899', phone: '555-6678' },
    { type: 'Entrenador', username: 'dwhite234', email: 'dwhite@mail.com', name: 'David White', dni: '22334455', phone: '555-2234' },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          overflow: 'hidden',
          width: '100%',
          padding: { xs: 2, sm: 4 },
          height: '100%',
          minHeight: '100vh',
          backgroundColor: 'common.black',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            backgroundColor: 'cultured.main',
            marginTop: '100px',
            padding: 2,
            borderRadius: 2,
            boxShadow: 2,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'red',
              fontWeight: 'bold',
              marginBottom: 2,
              textAlign: 'center',
            }}
          >
            Información de Usuarios
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              width: '100%',
              maxHeight: '80vh',
              boxShadow: 3,
              borderRadius: 2,
              border: '1px solid #ddd',
              overflowY: 'auto',
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem', 
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    Tipo de Usuario
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem',
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    Username
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem',
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    Correo
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem',
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    Nombre
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem',
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    DNI
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'red',
                      fontSize: '1.2rem',
                      border: '3px solid #ccc',
                      padding: 2,
                      textAlign: 'center',
                    }}
                  >
                    Teléfono
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        user.type === 'Cliente'
                          ? '#d3d3d3' 
                          : user.type === 'Entrenador'
                          ? '#c1c1c1' 
                          : '#b0b0b0', 
                      '&:hover': {
                        backgroundColor: '#9e9e9e',
                      },
                    }}
                  >
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.type}
                    </TableCell>
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.username}
                    </TableCell>
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.email}
                    </TableCell>
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.name}
                    </TableCell>
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.dni}
                    </TableCell>
                    <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                      {user.phone}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewUsers;
