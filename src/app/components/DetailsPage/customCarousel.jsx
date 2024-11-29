import { useState } from 'react';
import { Dialog, DialogContent, DialogActions, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { images} from './imageListData'
import './carouselStyle.css'



function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);

  const handleDialogOpen = (index) => {
    setOpenDialog(true);
    setCurrentIndex(index);
    setDialogIndex(index);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handlePrevDialog = () => {
    setDialogIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextDialog = () => {
    setDialogIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='carousel-container'>
        <div className='carousel-grid'>
            <div className='carousel-image large-image' onClick={() => handleDialogOpen(0)}>
                <div style={{backgroundImage: `url(${images[0].img})`}} className='image'></div>
            </div>
            <div className='carousel-image small-image' onClick={() => handleDialogOpen(1)}>
                <div style={{backgroundImage: `url(${images[1].img})`}} className='image'></div>
            </div>
            <div className='carousel-image small-image' onClick={() => handleDialogOpen(2)}>
                <div style={{backgroundImage: `url(${images[2].img})`}} className='image'></div>
                <div className='hover-overlay'>More Images</div>
            </div>
        </div>
        <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
            <DialogContent>
                <div className='dialog-content'>
                    <IconButton onClick={handlePrevDialog} className='arrow-button'>
                        <ArrowBack onClick={()=> {currentIndex > 0 && setCurrentIndex(currentIndex - 1)}} fontSize='large'></ArrowBack>
                    </IconButton>
                    <div style={{backgroundImage: `url(${images[currentIndex].img})`}} src={images[dialogIndex]} className='dialog-image'></div>
                    <IconButton onClick={handleNextDialog} className='arrow-button'>
                        <ArrowForward onClick={()=> {currentIndex < images.length - 1 && setCurrentIndex(currentIndex + 1)}} fontSize='large'></ArrowForward>
                    </IconButton>
                </div>
            </DialogContent>
            <DialogActions>
                <IconButton onClick={handleDialogClose} className='close-button'>
                    Close
                </IconButton>
            </DialogActions>
        </Dialog> 
    </div>
  )
}

export default CustomCarousel;
