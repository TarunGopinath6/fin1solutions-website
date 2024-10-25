import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone"; // Icon for the CTA button

import underconstruction from "./assets/images/under-construction.png";

const UnderConstructionPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        p: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Vehicle Loans
      </Typography>
      <Box
        component="img"
        src={underconstruction}
        sx={{
          display: { xs: "block", md: "block" }, // Hide on small screens
          width: "100px",
          borderRadius: "10px",
          p: 3,
        }}
      />
      <Typography variant="h5" gutterBottom>
        This page is under construction, visit back soon!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 3,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* <Typography variant="body1">
          Call to get an instant quotation:
        </Typography> */}
        <Button
          variant="contained"
          color="primary"
          href="tel:+919841061758"
          startIcon={<PhoneIcon />}
          sx={{
            mt: { xs: 1, sm: 0 },
            textTransform: "none",
            fontSize: "1rem",
            px: 3,
            py: 1,
          }}
        >
          Click to get an instant quotation: +91 98410 61758
        </Button>
      </Box>
    </Box>
  );
};

export default UnderConstructionPage;
