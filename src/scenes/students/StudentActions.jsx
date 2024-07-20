import { Check, Delete, Edit, Preview } from "@mui/icons-material";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { useValue } from "../../context/ContextProvider";
import { green } from "@mui/material/colors";

const StudentActions = ({ params, rowId, setRowId }) => {
  // const {
  //   dispatch,
  //   state: { currentUser, students },
  // } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEdit = () => {
    setLoading(true);

    // const { name, id } = params.row; // details of the student to update
    // const result = await updateStatus(
    //   { name, id, etc },
    //   _id,
    //   dispatch,
    //   currentUser
    // );
    // if (result) {
    //   setSuccess(true);
    //   setRowId(null);
    //   // const user = users.find(user=>user._id === _id)
    //   // user.role = role
    //   // user.active = active
    //   getUsers(dispatch, currentUser);
    // }
    setLoading(false);
  };

  const handleDelete = () => {};

  const handlePreview = () => {};

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowId]);
  return (
    <Box>
      <Tooltip title="View student details">
        <IconButton onClick={handlePreview}>
          <Preview />
        </IconButton>
      </Tooltip>
      {success ? (
        <IconButton>
          <Check />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleEdit}
          disabled={params.id !== rowId || loading}
        >
          <Edit />
        </IconButton>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
      <Tooltip title="Delete this student">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default StudentActions;
