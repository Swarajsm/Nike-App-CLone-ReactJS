import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Comment() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        height: 300,
        margin: 'auto',
      }}
    >
      <TextField fullWidth label="Write a review" id="fullWidth" />
    </Box>
  );
}