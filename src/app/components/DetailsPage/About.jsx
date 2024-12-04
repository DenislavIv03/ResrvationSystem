import { Box, Typography, Stack } from "@mui/material";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';


export default function About()  {
  return (
    <Box sx={{float: "left", width: '45%', padding: '10px', marginLeft: '140px'}}>
        <Typography color="#152C5B" variant="h6" sx={{lineHeight: '1.5'}}>About the place</Typography>
        <Typography color="#B0B0B0" sx={{wordSpacing: '2px', lineHeight: '1.5'}}>
            Minimal techno is a minimalist subgenre of techno music. 
            It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. 
            Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
        </Typography>
        <Typography color="#B0B0B0" sx={{wordSpacing: '2px', lineHeight: '1.5'}}>
            Such trends saw the demise of the soul-infused techno that typified the original Detroit sound.
            Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
        </Typography>
        <Typography color="#B0B0B0" sx={{wordSpacing: '2px', lineHeight: '1.5'}}>
            Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. 
            The national agency for design: enabling Singapore to use design for economic growth and to make lives better.
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2} sx={{ marginTop: '16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BedOutlinedIcon fontSize="small"/>
          <Typography variant="body2">5 Bedrooms</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ChairOutlinedIcon fontSize="small"/>
          <Typography variant="body2">1 Living Room</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BathtubOutlinedIcon fontSize="small"/>
          <Typography variant="body2">3 Bathrooms</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TableRestaurantOutlinedIcon fontSize="small"/>
          <Typography variant="body2">1 Dining Room</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <WifiOutlinedIcon fontSize="small"/>
          <Typography variant="body2">10 Mbps Wi-Fi</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AcUnitOutlinedIcon fontSize="small"/>
          <Typography variant="body2">7 Units Ready</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <KitchenOutlinedIcon fontSize="small"/>
          <Typography variant="body2">2 Refrigerators</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PersonalVideoOutlinedIcon fontSize="small"/>
          <Typography variant="body2">4 TVs</Typography>
        </Box>
      </Stack>
    </Box>
  )
}
