import { Box, Typography, Grid, CardMedia, CardContent, Chip } from '@mui/material';
import boat from './images/boat.jpg'
import dog from './images/dog.jpg'
import shop from './images/shop.jpg'
import beach from './images/beach.jpg'

const TreasureComponent = () => {
  const treasures = [
    { title: 'Green Lake', category: 'Nature', image: boat },
    { title: 'Dog Clubs', category: 'Pool', image: dog },
    { title: 'Labour and Wait', category: 'Shopping', image: shop, popular: true },
    { title: 'Snorkeling', category: 'Beach', image: beach },
  ];

  return (
    <Box sx={{ padding: 2, marginLeft: 15, marginRight: 15 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Treasures to Choose</Typography>
      <Grid container spacing={2}>
        {treasures.map((treasure, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ position: 'relative', borderRadius: 2 }}>
              {treasure.popular && (
                <Chip label="Popular Choice" color="primary" sx={{position: 'absolute',top: 8,right: 8,zIndex: 1,backgroundColor: 'pink',color: 'black',}}/>
              )}
              <CardMedia sx={{borderRadius: 2}} component="img" height="140" image={treasure.image} alt={treasure.title}/>
              <CardContent>
                <Typography variant="h6" component="div">
                  {treasure.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {treasure.category}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TreasureComponent;
