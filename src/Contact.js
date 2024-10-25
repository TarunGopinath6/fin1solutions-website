import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import logo from "./assets/images/logo_fin1solutions.png";

const ContactUsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#fff",
        color: "#333",
        px: { xs: 3 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 3, md: 4 },
          textAlign: "center",
          width: "100%",
          background: { md: "linear-gradient(135deg, #f0f4ff, #dfe7fd)" },
          backgroundColor: { xs: "#fff" },
          color: "#455b94",
        }}
      >
        <img
          src={logo}
          alt="Fin1Solutions Logo"
          style={{ width: 180, marginBottom: 16 }}
        />
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            mb: 2,
            px: { xs: 2, sm: 6 },
            fontSize: { xs: 16, md: 20 },
          }}
        >
          The one-stop solution to all your Insurance and Finance needs.
        </Typography>
      </Box>

      {/* Contact Information Section */}
      <Box
        sx={{
          my: 6,
          px: { xs: 2, sm: 3 },
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{ mb: 4, fontWeight: "bold", fontSize: { xs: 24, md: 32 } }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Proprietor - R Gopinath",
              phone: "+91 98410 61758",
              email: "gopi@fin1solutions.com",
            },
            {
              name: "Admin",
              phone: "+91 72999 61758",
              email: "admin@fin1solutions.com",
            },
          ].map((contact, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      sx={{ fontSize: { xs: 18, md: 20 }, mb: 3 }}
                    >
                      {contact.name}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={1}>
                      <PhoneIcon sx={{ mr: 3, color: "#6d83f2", mb: 1 }} />
                      <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
                      >
                        {contact.phone}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <EmailIcon sx={{ mr: 3, color: "#6d83f2" }} />
                      <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: 14, md: 16 } }}
                      >
                        {contact.email}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Location Section */}
      <Box sx={{ width: "100%", maxWidth: 900, textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: { xs: 24, md: 32 },
          }}
        >
          Our Location
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            px: { xs: 2, sm: 6 },
            fontSize: { xs: 14, md: 16 },
            color: "#666",
          }}
        >
          No. 264, Anbu Colony, Flat No - 4, Ground Floor, Anna Nagar, Chennai -
          600 050
        </Typography>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Fin1Solutions&zoom=13&maptype=roadmap"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </Box>

      {/* Services Section */}
      {/* <Box sx={{ my: 6, px: { xs: 2, sm: 3 }, maxWidth: 900, width: "100%" }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: 24, md: 32 },
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <DirectionsCarIcon />, label: "Motor Insurance" },
            { icon: <BusinessCenterIcon />, label: "General Insurance" },
            { icon: <HealthAndSafetyIcon />, label: "Health Insurance" },
            { icon: <AttachMoneyIcon />, label: "Vehicle Loans" },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: { xs: 2, md: 3 },
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "10px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <IconButton
                    sx={{ color: "#6d83f2", fontSize: { xs: 24, md: 30 } }}
                  >
                    {service.icon}
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      mt: 1.5,
                      color: "#555",
                      fontSize: { xs: 14, md: 16 },
                    }}
                  >
                    {service.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
};

export default ContactUsPage;
