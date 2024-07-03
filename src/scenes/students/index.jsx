import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../Components/Header";
import { useTheme } from "@mui/material";

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    // { field: "registrarId", headerName: "First Name" },
    {
      field: "name",
      headerName: "Name", //Apppend First and last Name
      width: 180,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Date of Birth",
      type: "number",
      width: 180,
      headerAlign: "left",
      align: "left",
    },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "parent", headerName: "Parent", width: 200 },
    { field: "class", headerName: "Class", width: 150 },
    { field: "phone", headerName: "Contact", width: 180 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 220 },
  ];

  return (
    <Box m="20px">
      <Header title="Students" subtitle="List of Students" />
      <Box
        m="40px 0 0 0"
        height="130vh"
        sx={{
          "& .MuiDataGrid-root": {
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell": {
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Students;
