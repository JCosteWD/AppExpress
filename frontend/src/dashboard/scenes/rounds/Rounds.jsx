import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


const Rounds = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tours, setTours] = useState([])
/*   const [error, setError] = useState(null)
  const [editUserId, setEditUserId] = useState(null) */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours')
        setTours(response.data.tours)
      } catch (error) {
        /* setError(error) */
      }
    };

    fetchData()
  }, [])

  const columns = [
    /* { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registre ID" }, */
    {
      field: "tournee",
      headerName: "Tournée",
      headerAlign: "center",
      align: "center",
    },    
    {
      field: "depot",
      headerName: "Dépôt",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="TOURNEES"
        subtitle="Gérez Vos Tournées"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={tours.map(tour => ({
            id: tour?._id,
            depot: tour?.depot,
            tournee: tour?.tournee
          }))}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            pagination: {
              labelRowsPerPage: 'Lignes par page'
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Rounds;