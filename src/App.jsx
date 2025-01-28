import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { GrCentos } from "react-icons/gr";
import { TbSettingsStar } from "react-icons/tb";
import { FcBullish } from "react-icons/fc";
import { GrLike } from "react-icons/gr";
import { CiCloudSun } from "react-icons/ci";
import { CiTablets1 } from "react-icons/ci";

function App() {
  return (
    <>
      <section className="Section-1">
        <div className="container">
          <p className="text">
            <GrCentos className="ll" /> Sitemark
          </p>
          <div className="hero">
            <div>
              <TbSettingsStar className="ff" />
            </div>
            <div>
              <p className="text-ls">Adaptable performance</p>
              <p className="text-lg">
                Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks.
              </p>
            </div>
          </div>
          <div className="hero">
            <div>
              <FcBullish className="ff" />
            </div>
            <div>
              <p className="text-ls">Built to last</p>
              <p className="text-lg">
                Experience unmatched durability that goes above and beyond with
                lasting investment.
              </p>
            </div>
          </div>
          <div className="hero">
            <div>
              <CiCloudSun className="ff" />
            </div>
            <div>
              <p className="text-ls">Innovative functionality</p>
              <p className="text-lg">
                Stay ahead with features that set new standards, addressing your
                evolving needs better than the rest.
              </p>
            </div>
          </div>
          <div className="hero">
            <div>
              <CiTablets1 className="ff" />
            </div>
            <div>
              <p className="text-ls">Adaptable performance</p>
              <p className="text-lg">
                Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="box-input">
          <p className="text-k">Sign in</p>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { m: 1 },
                }}
              >
                <TextField
                  helperText="Please enter your name"
                  id="demo-helper-text-misaligned"
                  label="Name"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { m: 1 },
                }}
              >
                <TextField
                  helperText="Please enter your password"
                  id="demo-helper-text-misaligned"
                  label="Password"
                />
              </Box>
            </div>
          </Box>
          <Button sx={{marginLeft :'30%' ,display : 'flex' , justifyContent : 'center' , alignItems : 'center'}} variant="contained" disableElevation>
            Disable elevation
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
