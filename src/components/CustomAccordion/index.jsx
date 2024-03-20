import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Comment ça marche ?</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div>Pourquoi choisir skillmanag ?</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>Vous pouvez travailler avec des indépendants correspondant à vos critères.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div>Comment s'inscrire en tant que prestataire ?</div>
        </AccordionSummary>
        <AccordionDetails>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div>Comment s'inscrire en tant qu'entreprise ?</div>
        </AccordionSummary>
        <AccordionDetails>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div>Vous ne trouvez pas de réponse à votre question ?</div>
        </AccordionSummary>
        <AccordionDetails>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
