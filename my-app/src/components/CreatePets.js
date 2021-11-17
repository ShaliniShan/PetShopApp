import React, { useState } from 'react';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const CreatePets = () => {
  const paperStyle = {padding:'30px 20px', width:300, margin:"20px auto"}
  const headerStyle = {margin:0}
  const avatarStyle = {backgroundColor: 'green'}
  const history = useHistory()
  let [name,setName] = useState('');
  const [nameError, setNameError] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)

      if(name === ''){
          setNameError(true)
      }

     if(name){
         //If name exists, write to json server
          fetch('http://localhost:3002/pet', {//Please don't change->Json server
              method: 'POST',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({ name })
          }).then(() => history.push('/'))
     }
     Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }


  return (//Buttons to handle side-menu and form fields
    <><div>
      <Link to="/" style={{ textDecoration: 'none'}}>
        <button id = 'addButton' variant="outlined">
          Add Pets
        </button>
      </Link>
      <Link to="/listPets" style={{ textDecoration: 'none'}}>
          <button id = 'listButton' variant="outlined">
          List of Pets
          </button>
      </Link>
      </div>
    <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar>
              <PetsRoundedIcon style={avatarStyle} />
            </Avatar>
            <h2 style={headerStyle}>Add Pets</h2>
            <Typography variant='caption'>Please fill this form to add your pets</Typography>
          </Grid>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              fullWidth label='name'
              required
              error={nameError} />
            <br />
            <Button type='submit' variant='contained' color='primary'>Register</Button>
          </form>
        </Paper>
      </Grid></>
  )
}
  export default CreatePets;
