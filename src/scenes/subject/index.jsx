import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../Components/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useValue } from "../../context/ContextProvider";
import AddSubject from "./AddSubject";
import SubjectActions from "./SubjectActions";

const Subject = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { dispatch } = useValue();

  const columns = [
    { field: "id", headerName: "ID", width: 80, flex: 0.2, minWidth: 80 },
    {
      field: "name",
      headerName: "Subjects",
      flex: 0.5,
      minWidth: 150,
      width: 180,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Class",
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
      renderCell: (params) => <SubjectActions {...{ params }} />,
    },
  ];

  return (
    <>
      <AddSubject />
      <Box m="20px">
        <Header title="Subjects" subtitle="List of all the subjects" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "18px",
            padding: "6px 10px",
          }}
          onClick={() => dispatch({ type: "OPEN_DIALOG" })}
        >
          <AddCircleIcon sx={{ mr: "10px" }} />
          Add Subjects
        </Button>
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
            height: 500,
            width: 700,
          }}
        >
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Subject;
