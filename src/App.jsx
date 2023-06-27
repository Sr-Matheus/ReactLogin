import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';



function App() {

  function signin()
  {
    alert('Obrigado por testar!');
  }


  return (
    <>
      <Box sx={{display: 'flex', '& > :not(style)': { m: 1, width: 500, height: 500,},}}>
        
        <Paper elevation={24} className='paper' >
            <div className='content'>
            <h1 className='title'>Entrar</h1>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="Usuario" label="Usuário" variant="standard" margin="dense" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockOpenIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="Usuario" label="Senha" variant="standard"  type="password" margin="dense" />
              </Box>
          </div>
          
          <Button className='button' variant="contained" onClick={() => signin() }>Entrar</Button>
          
        </Paper>
          
      </Box>
    </>
  )
}

export default App
