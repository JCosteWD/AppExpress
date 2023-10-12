import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Colis = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [packages, setPackages] = useState([])
/*   const [error, setError] = useState(null) */
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/packages')
          setPackages(response.data.data)
        } catch (error) {
/*           setError(error) */
        }
      };
  
      fetchData()
    }, [])

  const columns = [
/*     { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registre ID" }, */
    {
      field: "loaded",
      headerName: "Colis Chargés",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "delivered",
      headerName: "Colis Livrés",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "returned",
      headerName: "Colis ramenés",
      type: "number",
      flex: 1,
    },
    {
      field: "other",
      headerName: "Autre",
      type: "number",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="Listing de vos Employés"
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
          rows={packages.map(colis => ({
            id: colis?._id,
            loaded: colis?.loaded,
            delivered: colis?.delivered,
            returned: colis?.returned,
            other: colis?.other
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

export default Colis;