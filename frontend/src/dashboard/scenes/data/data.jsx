import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
/* import { useNavigate } from 'react-router-dom'; */

const Data = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  /* const navigate = useNavigate(); */

  const [boxes, setBoxes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/packages');
        setBoxes(response.data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  /* const handleRowClick = (params) => {
    navigate(`/user/${params.id}`);
  }; */

  const columns = [
    {
      field: "loaded",
      headerName: "Colis Chargés",
      headerAlign: "center",
      align: "center",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "delivered",
      headerName: "Colis Livrés",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "returned",
      headerName: "Colis en Retour",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "other",
      headerName: "Autre",
      headerAlign: "center",
      align: "center",
      flex: 1,
    }/* ,
    {
      field: "address1",
      headerName: "Adresse 1",
      flex: 1,
    },
    {
      field: "address2",
      headerName: "Adresse 2",
      flex: 1,
    } */
  ];

  return (
    <Box m="20px">
      {error && <div>Erreur: {error.message}</div>}
      <Header
        title="DONNEES "
        subtitle="Aperçu de mes données"
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
          rows={boxes.map(box => ({
            id: box?._id,
            loaded: box?.loaded,
            delivered: box?.delivered,
            returned: box?.returned,
            other: box?.other/* ,
            address1: package?.address1,
            address2: package?.address2 */
          }))}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            pagination: {
              labelRowsPerPage: 'Lignes par page'
            }
          }}
          /* onRowClick={params => handleRowClick(params)} */
        />
      </Box>
    </Box>
  );
};

export default Data;
