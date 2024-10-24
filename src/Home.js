import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { motion } from "framer-motion";

import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import LocalTaxiOutlinedIcon from "@mui/icons-material/LocalTaxiOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import CarRentalOutlinedIcon from "@mui/icons-material/CarRentalOutlined";
import NoCrashOutlinedIcon from "@mui/icons-material/NoCrashOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import HailIcon from "@mui/icons-material/Hail";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import ElderlyIcon from "@mui/icons-material/Elderly";
import GoogleIcon from "@mui/icons-material/Google";
import GroupsIcon from "@mui/icons-material/Groups";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import DescriptionIcon from "@mui/icons-material/Description";

import logo_hdfcbank from "./assets/images/logo_hdfcbank.png";
import logo_yesbank from "./assets/images/logo_yesbank.png";
import logo_hdfcergo from "./assets/images/logo_hdfcergo.png";
import logo_cholams from "./assets/images/logo_cholams.png";
import logo_futuregenerali from "./assets/images/logo_futuregenerali.jpg";
import logo_royalsundaram from "./assets/images/logo_royalsundaram.png";
import logo_starhealth from "./assets/images/logo_starhealth.png";
import logo_iffcotokio from "./assets/images/logo_iffcotokio.png";

const general_insurance_categories = [
  {
    name: "Car Insurance",
    icon: (
      <DirectionsCarFilledOutlinedIcon
        sx={{ fontSize: 40, marginBottom: 0.5 }}
      />
    ),
  },
  {
    name: "Two-Wheeler Insurance",
    icon: <TwoWheelerOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Passenger Carrying Insurance",
    icon: <LocalTaxiOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Goods Carrying Insurance",
    icon: (
      <LocalShippingOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />
    ),
  },
  {
    name: "MISC-D Commercial Insurance",
    icon: (
      <PrecisionManufacturingOutlinedIcon
        sx={{ fontSize: 40, marginBottom: 0.5 }}
      />
    ),
  },
];

const loan_categories = [
  {
    name: "New Car Loan",
    icon: <CarRentalOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Used Car Loan",
    icon: <NoCrashOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Refinance on existing car",
    icon: (
      <CurrencyRupeeOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />
    ),
  },
];

const health_insurance_categories = [
  {
    name: "Individual Health Insurance",
    icon: <HailIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Family Health Insurance",
    icon: <FamilyRestroomIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Personal-Accident Insurance",
    icon: (
      <LocalHospitalOutlinedIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />
    ),
  },
  {
    name: "Group-Mediclaim Insurance",
    icon: <BusinessIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Women-Care Health Insurance",
    icon: <PregnantWomanIcon sx={{ fontSize: 40, marginBottom: 0.5 }} />,
  },
  {
    name: "Senior-Citizen Health Insurance",
    icon: <ElderlyIcon sx={{ fontSize: 45, marginBottom: 1 }} />,
  },
];

const stats = [
  {
    label: "Our Employees",
    value: 16,
    icon: (
      <GroupsIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 4,
        }}
      />
    ),
  },
  {
    label: "Our Customers",
    value: 700,
    icon: (
      <SensorOccupiedIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 4,
        }}
      />
    ),
  },
  {
    label: "Policies Disbursed",
    value: 5000,
    icon: (
      <DescriptionIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 1,
        }}
      />
    ),
  },
  {
    label: "Google Rating",
    value: 4.9,
    icon: (
      <GoogleIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 4,
        }}
      />
    ),
  },
];

const cardsData = [
  {
    image: "https://via.placeholder.com/150",
    title: "Card 1",
    description: "This is the first card.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Card 2",
    description: "This is the second card.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Card 3",
    description: "This is the third card.",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Card 4",
    description: "This is the fourth card.",
  },
  // Add more cards here...
];

export default function Home() {
  useEffect(() => {
    const duration = 2000; // Total animation time in milliseconds
    const increments = stats.map((stat) => stat.value / (duration / 50)); // Number of increments needed for each value

    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          if (index === 0 || index === 3) {
            // Skip increment for "Years of Experience" and "Google Rating"
            return stats[index].value;
          }
          if (counter < stats[index].value) {
            // Ensure no value exceeds its target
            return Math.floor(counter + increments[index], stats[index].value);
          }
          return counter;
        })
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  //   COUNTER STUFF
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState(stats.map((stat) => 0)); // Initialize counters to 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start counting when section is visible
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container maxWidth="xl" sx={{ overflowX: "hidden" }}>
      {/* Header Text */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          // onClick={() => handleCloseNavMenu(page)}
          sx={{
            my: 2,
            mb: 0,
            mx: 2,
            color: "#0056b3",
            display: { xs: "block", sm: "none", md: "none" },
            borderColor: "#0056b3",
          }}
        >
          Call: +91 98410 61758
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          marginTop: 3,
        }}
      >
        <Typography fontSize={28} fontWeight={1000} color="#43a4e4">
          Choose from the
        </Typography>
        <Typography
          fontSize={28}
          fontWeight={1000}
          sx={{ marginRight: 1.5, marginLeft: 1.5, color: "darkBlue" }}
        >
          Best Insurance Plans
        </Typography>
        <Typography fontSize={28} fontWeight={1000} color="#43a4e4">
          to protect your future
        </Typography>
      </Box>
      <Box
        container
        sx={{
          display: { sm: "none", md: "flex" },
          marginTop: 3.5,
          gap: 3,
          width: { xs: "100%", md: "90%" },
          marginX: { xs: "0%", md: "5%" },
        }}
      >
        <Box
          xs={12}
          sm={12}
          md={6}
          sx={{
            borderRadius: 10,
            border: "1px solid #e0e0e0",
            p: 1,
            pb: 0,
            mb: 0,
            width: { sm: "100%", md: "70%" },
            textAlign: "center",
            marginTop: { xs: 2, sm: 2, md: 0 },
            px: { xs: 0, sm: 0, md: 5 },
          }}
        >
          {/* Title Section */}
          <Typography
            variant="h6"
            fontSize={18}
            fontWeight="500"
            sx={{ mb: 1.1 }}
          >
            Motor Insurance
          </Typography>

          {/* Category Grid2 with Equal Ratio */}
          <Grid2
            container
            sx={{
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "space-between" },
              mb: 1,
            }}
          >
            {general_insurance_categories.map((category, index) => (
              <Grid2
                key={index}
                sx={{
                  width: { xs: "32.5%", sm: "45%", md: "inherit" },
                  display: "flex",
                  justifyContent: "center", // Center align content
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    flexDirection: "column",
                    color: "darkBlue",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "translate(0,-15%)",
                      backgroundColor: "#fff",
                    },
                    width: "100%", // Ensure button takes full Grid2 width
                  }}
                  onClick={() => alert(`Clicked on ${category.name}`)}
                >
                  {category.icon}
                  <Typography
                    variant="subtitle1"
                    fontSize={15}
                    fontWeight="bold"
                  >
                    {category.name.split(" ")[0]}
                  </Typography>
                  <Typography fontSize={14} variant="body2">
                    {category.name.split(" ").slice(1).join(" ")}
                  </Typography>
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box
          xs={12}
          sm={12}
          md={6}
          sx={{
            borderRadius: 10,
            border: "1px solid #e0e0e0",
            p: 1,
            pb: 0,
            mb: 0,
            width: { sm: "100%", md: "30%" },
            textAlign: "center",
            marginTop: { xs: 2, sm: 2, md: 0 },
            px: { xs: 0, sm: 0, md: 5 },
          }}
        >
          {/* Title Section */}
          <Typography
            variant="h6"
            fontSize={18}
            fontWeight="500"
            sx={{ mb: 1.1 }}
          >
            Vehicle Loans
          </Typography>

          {/* Category Grid2 with Equal Ratio */}
          <Grid2
            container
            sx={{
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "space-between" },
            }}
          >
            {loan_categories.map((category, index) => (
              <Grid2
                item
                key={index}
                sx={{
                  width: { xs: "32.5%", sm: "45%", md: "inherit" },
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    flexDirection: "column",
                    color: "darkBlue",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "translate(0,-15%)",
                      //   transition: "0.5s ease-in-out",
                      backgroundColor: "#fff",
                    },
                    width: "100%", // Ensure button takes full Grid2 width
                  }}
                  onClick={() => alert(`Clicked on ${category.name}`)}
                >
                  {category.icon}
                  <Typography
                    variant="subtitle1"
                    fontSize={15}
                    fontWeight="bold"
                  >
                    {category.name.split(" ")[0]}
                  </Typography>
                  <Typography fontSize={14} variant="body2">
                    {category.name.split(" ").slice(1).join(" ")}
                  </Typography>
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Box
        container
        sx={{
          display: { sm: "none", md: "flex" },
          marginTop: 3,
          width: { xs: "100%", md: "90%" },
          marginX: { xs: "0%", md: "5%" },
        }}
      >
        <Box
          xs={12}
          sm={12}
          md={6}
          sx={{
            borderRadius: 10,
            border: "1px solid #e0e0e0",
            p: 1,
            pb: 0,
            mb: 0,
            width: { sm: "100%", md: "100%" },
            textAlign: "center",
            marginTop: { xs: 2, sm: 2, md: 0 },
            px: { xs: 0, sm: 0, md: 5 },
          }}
        >
          {/* Title Section */}
          <Typography
            variant="h6"
            fontSize={18}
            fontWeight="500"
            sx={{ mb: 1.1 }}
          >
            Health Insurance
          </Typography>

          {/* Category Grid2 with Equal Ratio */}
          <Grid2
            container
            sx={{
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "space-between" },
            }}
          >
            {health_insurance_categories.map((category, index) => (
              <Grid2
                item
                xs={4}
                sm={4}
                md={2.4}
                key={index}
                sx={{
                  width: { xs: "32.5%", sm: "45%", md: "inherit" },
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    flexDirection: "column",
                    color: "darkBlue",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "translate(0,-15%)",
                      //   transition: "0.5s ease-in-out",
                      backgroundColor: "#fff",
                    },
                    width: "100%", // Ensure button takes full Grid2 width
                  }}
                  onClick={() => alert(`Clicked on ${category.name}`)}
                >
                  {category.icon}
                  <Typography
                    variant="subtitle1"
                    fontSize={15}
                    fontWeight="bold"
                  >
                    {category.name.split(" ")[0]}
                  </Typography>
                  <Typography fontSize={14} variant="body2">
                    {category.name.split(" ").slice(1).join(" ")}
                  </Typography>
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Divider sx={{ marginTop: 5 }} />
      {/* <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          width: "100%",
        }}
        ref={sectionRef}
      >
        <Grid2 container spacing={4} justifyContent="space-evenly">
          {stats.map((stat, index) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={2} // Adjust for equal spacing in a 12-column Grid2
              key={index}
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stats[index]["icon"]}

                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#e54c38"
                    sx={{ fontSize: 38, mb: 1 }}
                  >
                    {index === 3
                      ? stats[index].value // Static for "Years of Experience" and "Google Rating"
                      : `${counters[index].toLocaleString()}+`}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontSize: 14, color: "gray" }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box> */}
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          width: "100%",
          background: "linear-gradient(to bottom   right, #f7f9fc, #e1eaf6)", // Elegant background
        }}
        ref={sectionRef}
      >
        <Grid2 container spacing={4} justifyContent="space-evenly">
          {stats.map((stat, index) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={2} // Adjust for equal spacing in a 12-column Grid2
              key={index}
              sx={{
                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-8px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              {/* Card for modern feel */}
              <Card
                sx={{
                  padding: "20px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff", // White background for a clean corporate feel
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Icon with size and color */}
                  <Box
                    sx={{ marginRight: 2, color: "#e54c38", fontSize: "40px" }}
                  >
                    {stats[index]["icon"]}
                  </Box>

                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{
                        fontSize: 38,
                        mb: 1,
                        color: "#e54c38",
                        lineHeight: "1.2",
                      }}
                    >
                      {index === 3
                        ? stats[index].value
                        : `${counters[index].toLocaleString()}+`}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: 14,
                        color: "#6b6b6b", // Muted gray for corporate elegance
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          paddingY: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Channel Partner Section */}
        <Box sx={{ width: "100%", textAlign: "center", marginBottom: "75px" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontSize: 30,
                color: "gray",
                fontWeight: "500",
              }}
            >
              Channel Partners
            </Typography>
            <Divider
              sx={{
                width: "100px",
                margin: "0 auto",
                backgroundColor: "gray",
                height: "1px",
              }}
            />
          </motion.div>

          <Grid2 container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {[logo_hdfcbank, logo_yesbank].map((logo, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={index}>
                <motion.div
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <img
                      src={logo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* Insurance Partner Section */}
        <Box sx={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: "gray",
                fontSize: 30,
                fontWeight: "500",
              }}
            >
              Insurance Partners
            </Typography>
            <Divider
              sx={{
                width: "100px",
                margin: "0 auto",
                backgroundColor: "gray",
                height: "1px",
              }}
            />
          </motion.div>

          <Grid2 container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {[
              logo_futuregenerali,
              logo_iffcotokio,
              logo_starhealth,
              logo_hdfcergo,
              logo_royalsundaram,
              logo_cholams,
            ].map((logo, index) => (
              <Grid2 item xs={6} sm={4} md={2} key={index}>
                <motion.div
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <img
                      src={logo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      {/* <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "white",
          padding: "50px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: 40,
            left: 40,
            color: "blue",
          }}
        >
          <Typography variant="h2" sx={{ color: "#4559b4", marginRight: 2 }}>
            Why
          </Typography>
        </Box>
        <Box
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }} // Start from below the screen
              whileInView={{ opacity: 1, y: 0 }} // Slide in as you scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation
              style={{
                width: "24%",
                height: 300,
                marginBottom: "20px",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "white",
                  color: "black",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1E88E5", // Change to blue on hover
                    color: "white", // Change text color to white on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box> */}
    </Container>
  );
}
