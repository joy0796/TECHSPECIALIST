"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Typography,
  Button,
  Stack,
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import "../../../src/app/globals.css"; // Ensure this path is correct based on your project structure

interface TabData {
  label: string;
  image: string;
  heading: string;
}

interface HeroSectionProps {
  activeTab: TabData;
  activeIndex: number;
  tabs: TabData[];
  onTabClick: (index: number) => void;
}

const HeroSection = ({
  activeTab,
  activeIndex,
  tabs,
  onTabClick,
}: HeroSectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isWhiteText = [
    "Digital Transformation",
    "Information Security",
  ].includes(activeTab.label);
  const headingColor = isWhiteText ? "#FFFFFF" : "#3E3E3E";
  const backgroundTextColor = isWhiteText ? "#F3F4F6" : "#4B5563";

  return (
    <Box
      component="section"
      className="w-full pt-28 md:pt-[16rem] pb-12 relative z-10 md:pl-4"
    >
      <Box className="flex flex-col-reverse lg:flex-row">
        <Box className="w-full md:ml-10  lg:mt-8 space-y-4 text-center md:text-left">
          <div
            className="font-black text-[23px] font-sans uppercase"
            style={{ color: headingColor }}
          >
            {activeTab.label}
          </div>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "63px",
              color: backgroundTextColor,
              whiteSpace: 'pre-line' 
            }}
            className="font-custom "
       
          >
            {activeTab.heading}
          </Typography>

          {/* <Typography variant="body1" className="text-lg" style={{ color: backgroundTextColor }}>
            {activeTab.backgroundText}
          </Typography> */}

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            className="pt-2 justify-center md:justify-start"
          >
            <Link href="/casestudy3" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderColor: isWhiteText ? "#fff" : "#000",
                  color: isWhiteText ? "#fff" : "#000",
                  padding: "1rem 2rem",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: isWhiteText ? "#fff" : "#000",
                    color: isWhiteText ? "#000" : "#fff",
                  },
                }}
              >
                Get a Free IT Audit
              </Button>
            </Link>

            <Link href="/casestudy2" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: isWhiteText ? "#fff" : "#3E3E3E",
                  color: isWhiteText ? "#000" : "#fff",
                  padding: "1rem 3rem",
                  fontSize: "16px",

                  "&:hover": {
                    backgroundColor: isWhiteText ? "#f3f3f3" : "#2f2f2f",
                  },
                }}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>

      <Tabs
        value={activeIndex}
        onChange={(e, index) => onTabClick(index)}
        variant="standard"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          px: 4,
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          return (
            <Tab
              key={tab.label}
              disableRipple
              label={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {isActive && (
                    <Box
                      sx={{
                        height: "4px",
                        backgroundColor: "#F97316",
                        borderRadius: "2px 2px 0 0",
                        width: "100%",
                        mb: "6px",
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: isActive ? "#3E3E3E" : "#979595",
                      textTransform: "none",
                      fontSize: "27px",
                      fontFamily: "font-sans",
                    }}
                  >
                    {tab.label}
                  </Typography>
                </Box>
              }
              sx={{
                minWidth: 0,
                padding: "0 8px",
                mr: "50px",
                mt: "160px",

                // marginRight: index !== tabs.length - 1 ? 4 : 0, // Add space between tabs
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default HeroSection;
