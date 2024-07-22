import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const ExamListActions = ({ params, rowId, setRowId }) => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Box>
      <Tooltip title="Edit exam ">
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete this exam">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ExamListActions;
