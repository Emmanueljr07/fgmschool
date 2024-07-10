import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useValue } from "../../context/ContextProvider";
import AddMember from "./AddMember";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const {
    // state: {currentUser},
    dispatch,
  } = useValue();

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
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      minWidth: 100,
    },
    { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1.5, minWidth: 150 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1.4,
      minWidth: 150,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            marginTop={"10px"}
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
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
    <>
      <AddMember />
      <Box m="20px">
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
              onClick={() => dispatch({ type: "OPEN_ADD_MEMBER" })}
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
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default Team;
