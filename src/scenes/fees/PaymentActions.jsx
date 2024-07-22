import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const PaymentActions = ({ params, rowId, setRowId }) => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Box>
      <Tooltip title="Edit payment details">
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete this payment">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default PaymentActions;
