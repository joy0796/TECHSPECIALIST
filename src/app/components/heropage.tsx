// components/HeroSection.tsx
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

interface TabData {
  label: string;
  image: string;
  backgroundText: string;
}

interface HeroSectionProps {
  activeTab: TabData;
  activeIndex: number;
  tabs: TabData[];
  onTabClick: (index: number) => void;
}

const HeroSection = ({ activeTab, activeIndex, tabs, onTabClick }: HeroSectionProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="section" className="w-full pt-28 md:pt-[19rem] pb-12 relative z-10 md:pl-4">
      <Box className="flex flex-col-reverse lg:flex-row">
        <Box className="w-full md:ml-20 md:pr-[6rem] lg:mt-0 space-y-4 text-center md:text-left">
          <Typography variant="h6" className="uppercase text-[#3E3E3E]">
            {activeTab.label}
          </Typography>

          <Typography
            variant="h3"
            className="font-semibold text-[#3E3E3E] leading-tight text-3xl md:text-[53px]"
          >
            Cross-Sectoral Collaboration:
            <br />
            AI Partnerships Driving Nigeria&apos;s
            <br />
            Digital Economy
          </Typography>

          <Typography variant="body1" className="text-gray-600 text-lg">
            {activeTab.backgroundText}
          </Typography>

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            className="pt-2 justify-center md:justify-start"
          >
            <Link href="/casestudy3" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  padding: "1rem 2rem",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
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
                  backgroundColor: "#3E3E3E",
                  padding: "1rem 3rem",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#2f2f2f",
                  },
                }}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>

      <Box className="max-w-10xl mx-auto px-4 mt-28 md:mt-40 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Tabs
          value={activeIndex}
          onChange={(e, index) => onTabClick(index)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          textColor="primary"
          indicatorColor="secondary"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              sx={{
                fontWeight: 700,
                color: activeIndex === index ? "#000" : "#979595",
                borderTop: activeIndex === index ? "4px solid #F97316" : "none",
                paddingTop: activeIndex === index ? "8px" : "4px",
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default HeroSection;
