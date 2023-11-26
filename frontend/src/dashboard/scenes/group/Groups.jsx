import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../../theme"
import Header from "../../components/Header"
import { useTheme } from "@mui/material"


const Groups = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/groups')
        setGroups(response.data.groups)
      } catch (error) {
      }
    }

    fetchData()
  }, [])

  const columns = [
    {
      field: "depot",
      headerName: "Dépôt",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },    
  ]

  return (
    <Box m="20px">
      <Header
        title="DEPOTS"
        subtitle="Gérez Vos Dépôt"
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
          rows={groups.map(group => ({
            id: group?._id,
            depot: group?.depot,
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
  )
}

export default Groups