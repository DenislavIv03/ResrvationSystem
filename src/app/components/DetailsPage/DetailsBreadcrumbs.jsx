import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.')
}



export default function detailsBreadcrumb() {
    return (
      <div role="presentation" onClick={handleClick}>
      <Breadcrumbs sx={{marginLeft: '30px', marginTop: '20px'}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/Home" sx={{fontSize: '18px'}}>Home</Link>
        <Link underline="hover" color="inherit" sx={{ fontSize: '18px', color: 'text.primary' }}>RoomDetails</Link>
        <Typography sx={{fontSize: '36px', color: '#152C5B', fontWeight: '600px',flexDirection: 'column', paddingLeft: '320px'}}>
          Village Angga
          <Typography sx={{paddingLeft: '50px'}}>Bogor, Indonesia</Typography>
        </Typography>
      </Breadcrumbs>
    </div>
    );
}