import React, { useEffect, useState } from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import Logo from "../../assets/images/Logo1.png";
import { VisualizarCoachRequest, VisualizarNutriRequest, VisualizarClienteRequest } from "../../api/visualizar";

const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');

    const obtenerUser = async () => {
        try {
            const clienteResponse = await VisualizarClienteRequest();
            const coachResponse = await VisualizarCoachRequest();
            const nutriResponse = await VisualizarNutriRequest();
            const combinedUsers = [
                ...clienteResponse.data.map(user => ({ ...user, type: 'Cliente' })),
                ...coachResponse.data.map(user => ({ ...user, type: 'Entrenador' })),
                ...nutriResponse.data.map(user => ({ ...user, type: 'Nutricionista' }))
            ];
            setUsers(combinedUsers);
            setLoading(false);
        } catch (error) {
            setError("Error fetching users");
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerUser();
        return () => {
            setUsers([]);
            setLoading(false);
            setError(null);
        };
    }, []);

    const filteredUsers = filter ? users.filter(user => user.type === filter) : users;

    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

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
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <Typography variant="h4" sx={{ color: 'red', fontWeight: 'bold', marginBottom: 3, marginTop: 3, textAlign: 'center' }}>
                        Usuarios registrados
                    </Typography>

                    {/* Filtro de tipo de usuario mejorado */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', paddingRight: 2, marginBottom: 1 }}>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel>Filtrar por tipo</InputLabel>
                            <Select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                label="Filtrar por tipo"
                                size="small"
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    '& .MuiSelect-icon': {
                                        color: 'red',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        borderColor: '#ccc',
                                    },
                                }}
                            >
                                <MenuItem value="">Todos</MenuItem>
                                <MenuItem value="Cliente">Cliente</MenuItem>
                                <MenuItem value="Entrenador">Entrenador</MenuItem>
                                <MenuItem value="Nutri">Nutri</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Tabla de usuarios */}
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
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Tipo de Usuario
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Username
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Correo
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Nombre
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        DNI
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Teléfono
                                    </TableCell>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '1.2rem',
                                        border: '3px solid #ccc',
                                        padding: 2,
                                        textAlign: 'center',
                                    }}>
                                        Estado
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredUsers.map((user, index) => (
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
                                            {user.user.username}
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                                            {user.user.email}
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                                            {user.user.name}
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                                            {user.user.dni}
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                                            {user.user.phone_number}
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #ccc', textAlign: 'center', fontSize: '1.0rem' }}>
                                            {user.user.state ? 'Activo' : 'Inactivo'}
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