import { Box, gridClasses } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../Components/Header";
import { useTheme } from "@mui/material";
import StudentActions from "./StudentActions";
import { useEffect, useMemo, useState } from "react";
import { grey } from "@mui/material/colors";

const Students = ({ setSelectedLink, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    setSelectedLink(link);
  });

  const [pageSize, setPageSize] = useState(20);
  const [rowId, setRowId] = useState(null);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name", //Apppend First and last Name
        minWidth: 180,
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Date of Birth",
        type: "number",
        minWidth: 100,
        headerAlign: "left",
        editable: true,
        align: "left",
      },
      {
        field: "gender",
        headerName: "Gender",
        flex: 1,
        minWidth: 100,
        type: "singleSelect",
        valueOptions: ["male", "female"],
        editable: true,
      },
      {
        field: "parent",
        headerName: "Parent",
        flex: 1,
        minWidth: 160,
        editable: true,
      },
      { field: "class", headerName: "Class", flex: 1, minWidth: 100 },
      {
        field: "phone",
        headerName: "Contact",
        flex: 1,
        minWidth: 150,
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 180,
        editable: true,
      },
      {
        field: "actions",
        headerName: "",
        width: 120,
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => (
          <StudentActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );

  return (
    <Box m="20px">
      <Header title="Students" subtitle="List of Students" />
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
          height: 600,
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[20, 50, 100]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? grey[200] : grey[900],
            },
          }}
          processRowUpdate={(params) => setRowId(params.id)}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Students;
