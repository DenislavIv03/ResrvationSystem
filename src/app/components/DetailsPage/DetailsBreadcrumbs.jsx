import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.')
}

const StyledBreadCrumbs = styled (Breadcrumbs) ({
  marginLeft: '30px',
  marginRight: '20px'
})

const StyledLink = styled (Link) ({
  fontSize: '18px',
  color: 'inherit',
  "&:last-child": {
    color: "text.primary"
  }
})

const TitleText = styled (Typography) ({
  fontSize: '36px',
  color: '#152C5B',
  fontWeight: '540',
  paddingLeft: '380px'
})

const SubtitleText = styled (Typography) ({
  fontSize: '16px',
  color: 'gray',
  paddingLeft: '3px'
})


export default function detailsBreadcrumb() {
    return (
      <Grid container>
        <Grid item xs={12}>
        <div role="presentation" onClick={handleClick}>
          <StyledBreadCrumbs aria-label="breadcrumb">
            <StyledLink underline="hover" href="/Home">Home</StyledLink>
            <StyledLink underline="hover">RoomDetails</StyledLink>
            <Grid item container direction="column" alignItems="flex-start">
            <TitleText>Village Angga
            <SubtitleText>Bogor, Indonesia</SubtitleText>
            </TitleText>
        </Grid>
      </StyledBreadCrumbs>
    </div>
        </Grid>
      </Grid>
      
    );
}