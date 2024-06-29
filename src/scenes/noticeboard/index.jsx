import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const NoticeBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Notice Board" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            quasi id expedita temporibus nobis, ipsa quia vel qui nemo culpa
            illo doloremque, nam voluptatibus, commodi perferendis? Illo, iste
            possimus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            quasi id expedita temporibus nobis, ipsa quia vel qui nemo culpa
            illo doloremque, nam voluptatibus, commodi perferendis? Illo, iste
            possimus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            quasi id expedita temporibus nobis, ipsa quia vel qui nemo culpa
            illo doloremque, nam voluptatibus, commodi perferendis? Illo, iste
            possimus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            quasi id expedita temporibus nobis, ipsa quia vel qui nemo culpa
            illo doloremque, nam voluptatibus, commodi perferendis? Illo, iste
            possimus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
            quasi id expedita temporibus nobis, ipsa quia vel qui nemo culpa
            illo doloremque, nam voluptatibus, commodi perferendis? Illo, iste
            possimus!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default NoticeBoard;
