
import React from 'react';
import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline }  from '@mui/material';
function Layout() {
  return (
    <Box style={{display: "flex", height: "100vh"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}}>
        <Grid item flexBasis={100}>Menu</Grid>
        <Grid item flex={1} >
          <Grid>Header</Grid>
          <Grid>Branding</Grid>
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
          </Grid>
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid xs={4}>Container 1</Grid>
            <Grid xs={4}>Container 2</Grid>
            <Grid xs={4}>Container 3</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Layout;