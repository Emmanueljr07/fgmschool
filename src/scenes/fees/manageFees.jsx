import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../Components/Header";
import PaymentActions from "./PaymentActions";
import { useEffect } from "react";

const ManageFees = ({ setSelectedLink, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    setSelectedLink(link);
  });

  const columns = [
    { field: "id", headerName: "ID", width: 80, flex: 0.2, minWidth: 80 },
    // { field: "txtId", headerName: "ID", width: 80, flex: 0.2, minWidth: 80 },
    {
      field: "user",
      headerName: "Students",
      flex: 0.5,
      minWidth: 150,
      width: 180,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Amount Paid",
      flex: 0.5,
      minWidth: 120,
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      minWidth: 120,
      width: 150,
    },
    {
      field: "date",
      headerName: "Date Paid",
      flex: 0.5,
      minWidth: 120,
      width: 150,
    },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <PaymentActions {...{ params }} />,
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="Manage Fees" subtitle="List of all the students fees" />
        <Box
          m="40px 0 0 0"
          height="100vh"
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
              margin: "10px 0",
            },
          }}
        >
          <DataGrid
            rows={mockTransactions}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ManageFees;
