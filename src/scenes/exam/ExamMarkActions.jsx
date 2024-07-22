import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const ExamMarkActions = ({ row, rowId, setRowId }) => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Box>
      <Tooltip title="Edit student score ">
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete student score">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ExamMarkActions;
