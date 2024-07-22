import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../Components/Header";
import TeacherActions from "./TeacherActions";

const Teachers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Full Name",
      minWidth: 150,
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    { field: "email", headerName: "Email", minWidth: 180, flex: 1 },
    {
      field: "class",
      headerName: "Class",
      minWidth: 100,
      flex: 1,
      editable: true,
    },
    {
      field: "cost",
      headerName: "Subjects",
      minWidth: 100,
      flex: 1,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 100,
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: ["male", "female"],
      renderCell: (params) => (
        <Typography sx={{ mt: "15px" }}>{"Male"}</Typography>
      ),
    },
    { field: "date", headerName: "Age", minWidth: 80, flex: 1 },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <TeacherActions {...{ params }} />,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Teachers" subtitle="List of Teachers" />
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
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
          height: 500,
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Teachers;
