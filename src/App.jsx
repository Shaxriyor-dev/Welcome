import "./App.css";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { GrCentos } from "react-icons/gr";
import { TbSettingsStar } from "react-icons/tb";
import { FcBullish } from "react-icons/fc";
import { CiCloudSun } from "react-icons/ci";
import { CiTablets1 } from "react-icons/ci";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
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
          <Button
            sx={{
              background: "#0091ff",
              width: "385px",
              height: "50px",
              marginLeft: "2%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="contained"
            disableElevation
          >
            Login
          </Button>
          <div className="flex-ason">
            <p className="leks">
              Don't have an account?{" "}
              <a
                className="link-login"
                href="https://mui.com/material-ui/getting-started/templates/sign-in-side"
              >
                Sign up
              </a>
            </p>
            <div className="divs">
              <div className="ffff"></div>
              <p className="se">or</p>
              <div className="ffff"></div>
            </div>
            <div className="huuk">
              <Button onClick={handleOpen}>
                {" "}
                <FcGoogle />
                Sign in with Google
              </Button>
              <Backdrop
                sx={(theme) => ({
                  color: "#fff",
                  fontSize: '20px',
                  background : '#0091ff',
                  fontFamily : '"Lexend Giga", serif',
                  zIndex: theme.zIndex.drawer + 1,
                })}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <Button onClick={handleOpen}>
                {" "}
                <FcGoogle />
                Sign in with Facebook
              </Button>
              <Backdrop
                sx={(theme) => ({
                  color: "#fff",
                  zIndex: theme.zIndex.drawer + 1,
                })}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
