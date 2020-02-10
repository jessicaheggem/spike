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
// import asyncValidate from '../asyncValidate/asyncValidate'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
})

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>Registration</h1>
          <TextField placeholder="First Name" />
          <br />
          <TextField placeholder="Last Name" />
          <br />
          <TextField placeholder="Username" />
          <br />
          {/* the password textfield hides the password from showing as it's typed */}
          <TextField
            id="standard-password-input"
            label="Password"
            // className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            placeholder="Password" />
          <br />
          <TextField placeholder="City" />
          <br />
          <TextField placeholder="State" />
          <br />
          <TextField placeholder="Job Title/Occupation" />
          <p>Github URL or another link to your portfolio</p>
          <TextField
            placeholder="Link"
          />
          <p>How much time can you commit to a project?</p>
          <TextField
            multiline
            rows="4"
            placeholder="Enter time here"
          />
          <p>List your known programming languages</p>
          <TextField
            multiline
            rows="4"
            placeholder="List programming languages here"
          />
          <p>What qualifications do you have? Include degrees, certifications, courses, etc.</p>
          <TextField
            multiline
            rows="4"
            placeholder="List qualifications here"
          />
          <br />
          <br />
          <br />
          <Button variant="contained" color="primary">Register!</Button>
          <br />
        </div>
      </ThemeProvider>

    );
  }
}


export default App;
