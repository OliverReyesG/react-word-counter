import AppBar from '@mui/material/AppBar';
import { Container, IconButton, Toolbar, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

const TopBar = ({ prefersDarkMode, handleThemeChange }) => {
  return (
    <AppBar>
      <Toolbar>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          maxWidth="lg"
        >
          <Typography variant="h5">Word Counter</Typography>
          <IconButton onClick={handleThemeChange} data-testid="theme-toggle">
            {prefersDarkMode ? (
              <DarkMode />
            ) : (
              <LightMode sx={{ color: 'white' }} />
            )}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
