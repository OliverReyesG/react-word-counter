import { useState, useEffect, useMemo } from 'react';
import useCountText from './utils/useCountText';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Box,
  Divider,
  FormControl,
  TextField,
  FormHelperText,
} from '@mui/material';

import TopBar from './Components/TopBar';

function App() {
  // Theme Creation
  const [prefersDarkMode, setPrefersDarkMode] = useState(true);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const handleDarkModeChange = (e) => {
    setPrefersDarkMode(!prefersDarkMode);
  };

  const [text, setText] = useState('');
  const { charCount, wordCount, sentenceCount, paragraphCount } =
    useCountText(text);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleThemeChange = (e) => {
    setPrefersDarkMode(!prefersDarkMode);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <TopBar
            prefersDarkMode={prefersDarkMode}
            handleThemeChange={handleThemeChange}
          />
          <Container
            maxWidth="lg"
            sx={{ mt: 12, display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                flexWrap: 'wrap',
                textAlign: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Characters: {charCount}</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h5">Words: {wordCount}</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h5">Sentences: {sentenceCount}</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h5">Paragraphs: {paragraphCount}</Typography>
            </Box>
            <FormControl fullWidth>
              <TextField
                id="textInput"
                label="Write your text here"
                type="text"
                value={text}
                onChange={handleTextChange}
                fullWidth
                multiline
                minRows={15}
              ></TextField>
            </FormControl>
            <footer>
              <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h5" textAlign="center">
                  By: Oliver Reyes
                </Typography>
              </Box>
            </footer>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
