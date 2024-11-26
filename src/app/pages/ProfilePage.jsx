
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';


export default function MyProfile() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
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
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              Settings
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
<Card>
  <Box sx={{ mb: 1 }}>
    <Typography level="title-md">Personal info</Typography>
    <Typography level="body-sm">
      Customize how your profile information will appear to the networks.
    </Typography>
  </Box>
  <Divider />
  <Stack
    direction="row"
    spacing={3}
    sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
  >
    <Stack direction="column" spacing={1}>
      <AspectRatio
        ratio="1"
        maxHeight={200}
        sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
      >
        
      </AspectRatio>
      <IconButton
        aria-label="upload new picture"
        size="sm"
        variant="outlined"
        color="neutral"
        sx={{
          bgcolor: 'background.body',
          position: 'absolute',
          zIndex: 2,
          borderRadius: '50%',
          left: 100,
          top: 170,
          boxShadow: 'sm',
        }}
      >
        <EditRoundedIcon />
      </IconButton>
    </Stack>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Stack spacing={1}>
        <FormLabel>Name</FormLabel>
        <FormControl
          sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
        >
          <Input size="sm" placeholder="First name" />
          <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2}>
      <FormControl sx={{ flexGrow: 1 }}>
          <FormLabel>Email</FormLabel>
          <Input
            size="sm"
            type="email"
            startDecorator={<EmailRoundedIcon />}
            placeholder="email"
            defaultValue="siriwatk@test.com"
            sx={{ flexGrow: 1 }}
          />
        </FormControl>
        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
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
    <FormControl>
      <FormLabel>Current Password</FormLabel>
      <Input size="sm" type="password" placeholder="Enter current password" />
    </FormControl>
    <FormControl>
      <FormLabel>New Password</FormLabel>
      <Input size="sm" type="password" placeholder="Enter new password" />
    </FormControl>
    <FormControl>
      <FormLabel>Confirm New Password</FormLabel>
      <Input size="sm" type="password" placeholder="Confirm new password" />
    </FormControl>
  </Stack>
  <Card>
    {}
    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
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
