import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const Footer = () => {
  return (
    <footer>
      <Box
        //padding (x,y)for mobile
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={10} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>

              
            </Grid>
            {/* ------------------------ */}

            <Grid item xs={10} sm={4}>
              <Box borderBottom={1}>About</Box>
              <Box>
                <Link href="/About" color="inherit">
                  get to know us
                </Link>
              </Box>
            </Grid>

             {/* ------------------------ */}

             <Grid item xs={10} sm={4}>
              <Box borderBottom={1}>Recomended Websites To Get Your inspiration</Box>
              <Box>
                {/* website1 */}
                <Link href="https://www.asos.com/" color="inherit">
                  ASOS
                </Link>
              </Box>
              <Box>
                 {/* website2 */}
                 <Link href="https://www.urbanoutfitters.com/" color="inherit">
                  Urban Outfitters
                </Link>
              </Box>

              
            </Grid>













          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Material UI workshop &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
