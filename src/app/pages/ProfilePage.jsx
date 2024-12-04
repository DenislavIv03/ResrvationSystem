import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import { useState } from "react";
import Password from "../components/Password";
import { Tab, TextField } from "@mui/material";

export default function MyProfile() {
  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const[email,setEmail] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              sx={{ fontSize: 12, fontWeight: 500 }}
            >
              Users
            </Link>
            <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
        <Tabs value={0}>
          <Tab label="Settings" />
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the
              networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" sx={{ position: "relative" }} spacing={1}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  bgcolor: "grey.300",
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  backgroundImage: `url(${file})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Box>

              <input type="file" onChange={handleChange} />
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <TextField
                  id="outlined-controlled"
                  label="First Name"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />

                <TextField
                  id="outlined-controlled"
                  label="Last Name"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </Stack>
              <Stack direction="row" spacing={2}>
              <TextField
                  id="outlined-controlled"
                  label="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <CardOverflow
                  sx={{ borderTop: "1px solid", borderColor: "divider" }}
                >
                  <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                    <Button size="sm" variant="outlined" color="neutral">
                      Cancel
                    </Button>
                    <Button size="sm" variant="solid">
                      Save
                    </Button>
                  </CardActions>
                </CardOverflow>
                <Card>
                  <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Change Password</Typography>
                    <Typography level="body-sm">
                      Update your account password to keep your profile secure.
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack spacing={2} sx={{ my: 1 }}>
                    <Password
                      label="Current Password"
                      value={currentPassword}
                      handleChange={setCurrentPassword}
                    />

                    <Password
                      label="New Password"
                      value={newPassword}
                      handleChange={setNewPassword}
                    />
                    <Password
                      label="Confirm Password"
                      value={confirmPassword}
                      handleChange={setConfirmPassword}
                    />
                  </Stack>
                  <Card>
                    {}
                    <CardOverflow
                      sx={{ borderTop: "1px solid", borderColor: "divider" }}
                    >
                      <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                        <Button size="sm" variant="outlined" color="neutral">
                          Cancel
                        </Button>
                        <Button size="sm" variant="solid">
                          Save
                        </Button>
                      </CardActions>
                    </CardOverflow>
                  </Card>
                </Card>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
