import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { motion, useInView } from "framer-motion";

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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import logo_hdfcbank from "./assets/images/logo_hdfcbank.png";
import logo_yesbank from "./assets/images/logo_yesbank.png";
import logo_hdfcergo from "./assets/images/logo_hdfcergo.png";
import logo_cholams from "./assets/images/logo_cholams.png";
import logo_futuregenerali from "./assets/images/logo_futuregenerali.jpg";
import logo_royalsundaram from "./assets/images/logo_royalsundaram.png";
import logo_starhealth from "./assets/images/logo_starhealth.png";
import logo_iffcotokio from "./assets/images/logo_iffcotokio.png";
import logo_fin1solutions from "./assets/images/logo_fin1solutions.png";
import insurance_handshake from "./assets/images/insurance_handshake.jpg";
import clock from "./assets/images/24bar7.png";
import personalized from "./assets/images/personalized.png";
import bestPrice from "./assets/images/best-price.png";
import experience from "./assets/images/experience.png";
import multipleOptions from "./assets/images/multiple-options.png";
import relaxed from "./assets/images/relaxed.png";

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
    value: 25,
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
    value: 2500,
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
    value: 40000,
    icon: (
      <DescriptionIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 4,
        }}
      />
    ),
  },
  {
    label: "Loan Amount Disbursed",
    value: "700",
    icon: (
      <CurrencyRupeeOutlinedIcon
        sx={{
          color: "#e54c38",
          fontSize: 35,
          marginRight: 4,
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
    image: clock,
    title: "24/7 Claim Support",
    description:
      "Our executives are avialable round the clock to service your needs, to the best of their abilities.",
  },
  {
    image: personalized,
    title: "Personalized Policy",
    description:
      "Everyone's needs are different & our experienced executives get you the best solutions that fit your wallet.",
  },
  {
    image: bestPrice,
    title: "Transparent Pricing",
    description:
      "No hidden charges or overcharging. We ensure you get the best price and know what you're paying for.",
  },
  {
    image: experience,
    title: "28 Years in Business",
    description:
      "Reliability and Customer Satisfaction are the pillars we've built our organization on for almost 3 decades.",
  },
  {
    image: multipleOptions,
    title: "Extensive Options",
    description:
      "We represent all the market leaders in Insurance and compare quotes & features, to give you the best policy.",
  },
  {
    image: relaxed,
    title: "Sit back and relax",
    description:
      "We take utmost care of your every need from quote, to discounts, claims, renewals and service.",
  },
];

const reviews = [
  {
    text: "This is my 4th vehicle purchase in the last 2 years with FIN 1 Solutions. I am very happy and satisfied the way they negotiate with dealer for better offers and also attractive interest rate from Bank for vehicle loan. Best product and price for all my vehicle and health insurance,  not to mention customer service at the time of claim. Kudos to Mr.Gopinath. Wishing the entire team all the best.",
    author: "M. Sam Edmond",
    designation: "Managing Director - Antans Constructions Pvt. Ltd.",
  },
  {
    text: "First experience is the best experience with FIN 1 Solutions. Whole process of buying the pre owned vehicle were Professionally handled by the team. I felt like buying a new car, because the way your team delivered the vehicle. The purchase was done in a transparent manner right from vehicle test drive, service history check and price. I will strongly recommend my friends and relatives to your company for vehicle purchase. Thank you for the wonderful experience. Best wishes to all.",
    author: "S. Ramesh",
    designation: "Civil Contractor",
  },
  {
    text: "Once again, FIN 1 Solutions has done a great job and I’m totally happy and satisfied by the purchase of my new Innova Crysta. Thank you for offering the best deal from dealer, low interest rate and best insurance premium. Happy to associate with you for more than 2 decades. Wish you all the best!",
    author: "C.R. Suresh Babu",
    designation: "Managing Partner - Precision Profiles India",
  },
  {
    text: "This is my 3rd pre-owned car purchase in the last 8 years from FIN 1 Solutions. I am extremely happy because Transparency in the price and quality of the car delivered. Direct negotiation with seller made my purchase even more pleasure. Not to mention seamless and swift process and after sales service. Thank you and wish you all the best.",
    author: "S. Balachandran",
    designation: "Proprietor - BluRay Interior Design",
  },
  {
    text: "I have been a customer of Mr.Gopinath since 2003. Since then all my car purchase financing , car insurance and personal medical insurance has been through his company. He has always got us the best interest rates and dealer discounts and his service is always reliable. He is definitely an expert in this field and is very professional with his approach. wish him and his team the very best.",
    author: "K. Saravana Prakash",
    designation: "Managing Director - Kalyan Grand Hotel, Vandalur",
  },
];

export default function Home() {
  // useEffect(() => {
  //   const duration = 2000; // Total animation time in milliseconds
  //   const increments = stats.map((stat) => stat.value / (duration / 50)); // Number of increments needed for each value

  //   const intervalId = setInterval(() => {
  //     setCounters((prevCounters) =>
  //       prevCounters.map((counter, index) => {
  //         if (index === 0 || index === 4) {
  //           // Skip increment for "Years of Experience" and "Google Rating"
  //           return stats[index].value;
  //         }
  //         if (counter < stats[index].value) {
  //           // Ensure no value exceeds its target
  //           return Math.floor(counter + increments[index], stats[index].value);
  //         }
  //         return counter;
  //       })
  //     );
  //   }, 50);

  //   return () => clearInterval(intervalId);
  // }, []);

  //   COUNTER STUFF

  useEffect(() => {
    const duration = 2000; // Total animation time in milliseconds
    const interval = 50; // Update interval in milliseconds
    const totalSteps = duration / interval; // Total steps for each increment

    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          if (index === 0 || index === 4) {
            // Skip increment for "Years of Experience" and "Google Rating"
            return stats[index].value;
          }

          const targetValue = stats[index].value;
          const increment = Math.ceil(targetValue / totalSteps);

          if (counter < targetValue) {
            // Ensure the counter reaches but does not exceed the target
            return Math.min(counter + increment, targetValue);
          }
          return counter;
        })
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

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

  // CUSTOMER REVIEWS STUFF
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically change review every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentReview, isPaused]);

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);

  // QUOTE STUFF
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

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
          variant="contained"
          // onClick={() => handleCloseNavMenu(page)}
          sx={{
            my: 2,
            mb: 0,
            mx: 2,
            backgroundColor: "#f03d1f",
            color: "#fff",
            display: { xs: "block", sm: "none", md: "none" },
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

      {/* INSURNANCE OPTIONS */}
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
                  // onClick={() => alert(`Clicked on ${category.name}`)}
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
                  // onClick={() => alert(`Clicked on ${category.name}`)}
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
                  // onClick={() => alert(`Clicked on ${category.name}`)}
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
                width: { xs: "70%", md: "25%" },
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
                  width: "90%",
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
                      {index === 4
                        ? stats[index].value
                        : index === 3
                        ? `${counters[index].toLocaleString()}Cr+`
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
      {/* CHANNEL AND INSURANCE PARTNERS */}
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
              // logo_futuregenerali,
              // logo_iffcotokio,
              logo_hdfcergo,
              logo_royalsundaram,
              logo_starhealth,
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
                      minHeight: "90px",
                      height: "90px",
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

      {/* WHY FIN1SOLUTIONS */}
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
      <Box
        sx={{
          maxHeight: { md: "70vh" },
          background: "white",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens
          overflow: "hidden",
        }}
      >
        {/* Left Section: Text and Logo */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            paddingRight: { md: "20px" },
            flexDirection: { xs: "row", md: "column" }, // Horizontal on mobile, vertical on desktop
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#4559b4",
              fontWeight: "500",
              fontSize: { xs: 28, md: 40 },
              marginRight: { xs: 1, md: 0 },
            }}
          >
            Why
          </Typography>
          <img
            src={logo_fin1solutions}
            alt="Company Logo"
            style={{
              width: "50%",
              marginLeft: { xs: "8px", md: "0" }, // Space between "Why" and logo
            }}
          />

          {/* Hide image on xs/sm screens */}
          <Box
            component="img"
            src={insurance_handshake}
            alt="Family shaking hands with insurance agent"
            sx={{
              display: { xs: "none", md: "block" }, // Hide on small screens
              width: "70%",
              borderRadius: "10px",
              marginTop: 3,
            }}
          />
        </Box>

        {/* Right Section: Card Grid */}
        <Box
          container
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            }, // Two cards per row on small screens
            gap: 2,
            alignItems: "center",
            paddingLeft: { md: "20px" },
            marginTop: { xs: 3, md: 0 },
          }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                width: "100%",
                height: { xs: 250, sm: 280, md: 300 },
                marginBottom: 2,
              }}
            >
              <Card
                sx={{
                  height: "250px",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: 2,
                  p: 2,
                  overflow: "hidden",
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
                    backgroundColor: "#1E88E5",
                    color: "white",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="50px"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: "contain",
                    borderRadius: "5px 5px 0 0",
                    marginBottom: "5px",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 3, fontSize: "18px" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "14px" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* CUSTOMER REVIEWS */}
      <Box
        sx={{
          width: { xs: "80%", md: "70%" },
          mx: "auto",
          px: { xs: 5, md: 15 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          color: "text.secondary",
          height: { xs: "60vh", sm: "50vh", md: "50vh" }, // Consistent height for all content
        }}
      >
        {/* Review Content */}
        <Box
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          sx={{
            cursor: "pointer",
            position: "relative",
            height: "100%", // Full height for consistent spacing
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 12, sm: 18 },
              mb: 1,
              textAlign: "justify",
              maxHeight: "50%", // Set a fixed height for the review text area
              overflow: "hidden",
            }}
          >
            "{reviews[currentReview].text}"
          </Typography>
          <Box
            sx={{
              mt: 5,
              position: "absolute",
              bottom: "15%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: 12, sm: 16 },
                color: "text.secondary",
                fontWeight: "bold",
              }}
            >
              - {reviews[currentReview].author}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: 12, sm: 16 },
                color: "text.secondary",
                fontWeight: "bold",
              }}
            >
              {reviews[currentReview].designation}
            </Typography>
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            color: "text.secondary",
            "&:hover": { color: "text.primary" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            color: "text.secondary",
            "&:hover": { color: "text.primary" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* STEVE JOBS QUOTE */}
      <Box
        ref={ref} // Attach ref to the component
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "100%",
          padding: { xs: "5px", sm: "40px" },
          backgroundColor: "transparent",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
          transition={{ duration: 1 }}
          style={{ width: "100%", textAlign: "center" }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: "0.05em",
              color: "text.primary",
              width: { xs: "100%", md: "70%" },
              mx: "auto",
              background: "linear-gradient(90deg, #1E88E5, #8E24AA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <motion.div>Get closer than ever to your customer.</motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}} // Trigger when in view
              transition={{ duration: 2, delay: 1 }}
              style={{
                background: "linear-gradient(90deg, #1E88E5, #43A047)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
              }}
            >
              So close that you tell them what they need,
            </motion.div>
            <motion.div>well before they realize it themselves.</motion.div>
            <motion.div>- Steve Jobs</motion.div>
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}
