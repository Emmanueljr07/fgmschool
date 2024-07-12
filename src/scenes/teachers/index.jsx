import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../Components/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Teachers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onEditButtonClick = (e, row) => {
    e.stopPropagation();
    console.log(row);
    //do whatever you want with the row
  };
  const onDeleteButtonClick = (e, row) => {
    e.stopPropagation();
    console.log(row.id);
    //do whatever you want with the row
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Full Name",
      minWidth: 150,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", minWidth: 150, flex: 1 },
    { field: "email", headerName: "Email", minWidth: 180, flex: 1 },
    {
      field: "cost",
      headerName: "Subjects",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ mt: "15px" }}>{params.row.cost}</Typography>
      ),
    },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 100,
      flex: 1,
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
      renderCell: (params) => {
        return (
          <Box
            sx={{
              // backgroundColor: "whitesmoke",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={(e) => onEditButtonClick(e, params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={(e) => onDeleteButtonClick(e, params.row)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Teachers" subtitle="List of Teachers" />
      <Box
        m="40px 0 0 0"
        height="150vh"
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
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Teachers;
