import React, { useEffect } from "react";

//mui
import { Box } from "@mui/system";

//Components
import AboutCard from "../Components/AboutCard";
import HomeSteps from "../Components/HomeSteps";
import Stepper from "../Components/Stepper";
import { useNavigate } from "react-router-dom";

function Home() {
  // useEffect(() => {
  //   setInterval(() => {
  //     if (document.hidden) {
  //       document.title = "Come Back";
  //     } else {
  //       document.title = "Home";
  //     }
  //   }, 10);
  //   return () => {
  //     clearInterval();
  //   };
  // });
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/app/dishes");
  }, [navigate]);

  return (
    <div>
      <div style={{ margin: "10px" }}>
        {/* <Stepper /> */}
        {/* <Box sx={{ marginTop: "50px" }}>
          <HomeSteps />
          <hr style={{ opacity: "0.2", marginTop: "60px" }} />
          <AboutCard />
        </Box> */}
      </div>
    </div>
  );
}

export default Home;
