import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useValue } from "../../context/ContextProvider";
import AddMember from "./AddMember";
import TeamActions from "./TeamActions";
import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../../actions/user";

const Team = ({ setSelectedLink, link }) => {
  const {
    state: { currentUser, users },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setSelectedLink(link);
    if (users.length === 0) getUsers(dispatch, currentUser);
  }, [currentUser, dispatch, setSelectedLink, users, link]);

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);

  const columns = useMemo(
    () => [
      { field: "_id", headerName: "ID", width: 120 },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 200,
        cellClassName: "name-column--cell",
        // editable: true,
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        minWidth: 100,
        // editable: true,
      },
      {
        field: "contact",
        headerName: "Phone Number",
        flex: 1,
        minWidth: 150,
        // editable: true,
      },
      { field: "email", headerName: "Email", flex: 1.5, minWidth: 150 },
      {
        field: "role",
        headerName: "Access Level",
        flex: 1.4,
        minWidth: 150,
        type: "singleSelect",
        valueOptions: ["admin", "editor", "viewer"],
        editable: currentUser?.role === "admin",
      },
      {
        field: "actions",
        headerName: "",
        width: 120,
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => (
          <TeamActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId, currentUser?.role]
  );

  return (
    <>
      <AddMember />
      <Box m="20px" width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="TEAM" subtitle="Managing the Team Members" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
              onClick={() => dispatch({ type: "OPEN_DIALOG" })}
            >
              <PersonAddIcon sx={{ mr: "10px" }} />
              Add Member
            </Button>
          </Box>
        </Box>

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
          }}
        >
          <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onCellEditStart={(params) => setRowId(params.id)}
          />
        </Box>
      </Box>
    </>
  );
};

export default Team;
