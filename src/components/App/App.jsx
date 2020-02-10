import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
// import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
// import { Field, reduxForm } from 'redux-form'
// import { makeStyles } from '@material-ui/styles';
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
import asyncValidate from '../asyncValidate/asyncValidate'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
})


class App extends Component {

  render() {
    return (
      
      <form autoComplete="on">
        <ThemeProvider theme={theme}>
          <div className="App">
            <h1>Registration</h1>
            <TextField
              required
              id="standard-required"
              label="First Name"
              margin="normal"
            />
            <br />
            <TextField
              required
              id="standard-name"
              label="Last Name"
              margin="normal"
            />
            <br />
            <TextField
              required
              id="standard-name"
              label="Username"
              margin="normal"
            />
            <br />
            {/* the password textfield hides the password from showing as it's typed */}
            <TextField
              required
              id="standard-password-input"
              label="Password"
              // className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              placeholder="Password" />
            <br />
            <TextField
              required
              id="standard-name"
              label="City"
              margin="normal"
            />
            <br />
            <TextField
              required
              id="standard-name"
              label="State"
              margin="normal"
            />
            <br />
            <TextField
              required
              id="standard-name"
              label="Job Title/Occupation"
              margin="normal"
              // variant="outlined"
            />
            <p>Github URL or another link to your portfolio</p>
            <TextField
              required
              placeholder="Link"
              margin="normal"
              variant="outlined"
            />
            <p>How much time can you commit to a project?</p>
            <TextField
              required
              multiline
              rows="4"
              placeholder="Enter time here"
              margin="normal"
              variant="outlined"
            />
            <p>List your known programming languages</p>
            <TextField
              required
              multiline
              rows="4"
              placeholder="List programming languages here"
              margin="normal"
              variant="outlined"
            />
            <p>What qualifications do you have? Include degrees, certifications, courses, etc.</p>
            <TextField
              multiline
              rows="4"
              placeholder="List qualifications here"
              margin="normal"
              variant="outlined"
            />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
            >Register!
            </Button>
            <br />
          </div>
        </ThemeProvider>
      </form>

    );
  }
}


export default App;
