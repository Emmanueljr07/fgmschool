import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../Components/Header";
import { useTheme } from "@mui/material";
import StudentActions from "./StudentActions";

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name", //Apppend First and last Name
      minWidth: 180,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Date of Birth",
      type: "number",
      minWidth: 100,
      headerAlign: "left",
      align: "left",
    },
    { field: "gender", headerName: "Gender", flex: 1, minWidth: 100 },
    { field: "parent", headerName: "Parent", flex: 1, minWidth: 160 },
    { field: "class", headerName: "Class", flex: 1, minWidth: 100 },
    { field: "phone", headerName: "Contact", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 180 },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <StudentActions {...{ params }} />,
    },
    // { field: "address", headerName: "Address", minWidth: 220 },
  ];

  return (
    <Box m="20px">
      <Header title="Students" subtitle="List of Students" />
      <Box
        m="40px 0 0 0"
        height="130vh"
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
