import {Box, Stack ,ThemeProvider ,createTheme} from '@mui/material'
import Addpost from './Component/Addpost';
import Navbar from './Component/Navbar'
import Lsidebar from './Component/Lsidebar'
import Feed from './Component/Feed';
import Rsidebar from './Component/Rsidebar';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Lsidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rsidebar />
      </Stack>
      <Addpost />
    </Box>
    </ThemeProvider>
  );
}

export default App;
