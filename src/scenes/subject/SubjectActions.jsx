import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const SubjectActions = ({ params, rowId, setRowId }) => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Box>
      <Tooltip title="Edit class details">
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete this class">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SubjectActions;
