import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Link,
  Container,
  Stack,
} from "@mui/material";
import { Phone, Email, Person } from "@mui/icons-material";
import Logo from "../assets/images/logo_fin1solutions.png";

const Footer = () => {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Motor Insurance", href: "/motorinsurance" },
    { label: "Health Insurance", href: "/healthinsurance" },
    { label: "General Insurance", href: "/generalinsurance" },
    { label: "Vehicle Loans", href: "/vehicleloans" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "white",
        width: "90%",
        px: "5%",
        pt: 8,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Quick Links with vertical dividers */}
        {/* <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 4 }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link
                href={item.href}
                underline="none"
                sx={{
                  color: "white",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "grey.600",
                    height: 16,
                    my: "auto",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack> */}

        {/* Three Column Layout */}
        <Grid container spacing={4}>
          {/* Left Column: Logo and Address */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Company Logo"
              sx={{
                height: 40,
                width: 170,
                mb: 2,
                objectFit: "contain",
              }}
            />
            <Typography variant="body2" sx={{ maxWidth: "sm", mb: 2 }}>
              No. 264, Anbu Colony, Flat No. 4, Ground Floor, Anna Nagar,
              Chennai, Tamil Nadu - 600 050
            </Typography>
            <Stack spacing={1} alignItems="flex-start">
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Person /> Proprietor - R Gopinath
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Phone /> +91 98410 61758
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Email /> gopi@fin1solutions.com
              </Typography>
            </Stack>
          </Grid>

          {/* Center Column: Contact Buttons */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<Phone />}
              fullWidth
              sx={{
                maxWidth: 250,
                backgroundColor: "#1E88E5",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
              onClick={() => window.open("tel:+919841061758")}
            >
              Call Us: +91 98410 61758
            </Button>
            <Button
              variant="contained"
              startIcon={<Email />}
              fullWidth
              sx={{
                maxWidth: 250,
                backgroundColor: "#1E88E5",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
              onClick={() => window.open("mailto:gopi@fin1solutions.com")}
            >
              Email Us: gopi@fin1solutions.com
            </Button>
          </Grid>

          {/* Right Column: Map */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 200,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Fin1Solutions&zoom=13&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "grey.600", my: 4 }} />

        {/* Disclaimer Text */}
        <Box sx={{ maxWidth: "lg", mx: "auto" }}>
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
              fontSize: "10px",
              lineHeight: 1.6,
              textAlign: "justify",
              mb: 1,
            }}
          >
            Fin1Solutions | Sole Proprietor - R Gopinath | Reg. Office - No.
            264, Anbu Colony, Flat No. 4, Groud Floor, Anna Nagar, Chennai,
            Tamil Nadu - 600 050. | Standard T&C Apply* For more details on risk
            factors, terms, and conditions, please read the sales brochure
            carefully before concluding a sale. Visitors are hereby informed
            that their information submitted on the website may be shared with
            insurers. Product information is authentic and solely based on the
            information received from the insurers.
          </Typography>
          {/* <Typography
            variant="body2"
            sx={{
              color: "grey.500",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            © 2024-2028 Fin1Solutions All Rights Reserved
          </Typography> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
