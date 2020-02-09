import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles';


import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import asyncValidate from '../asyncValidate/asyncValidate'

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },

// }));

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
// });

// const classes = useStyles();



class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Registration</h1>

        <input 
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        placeholder="First Name" />
        <br />
        <input placeholder="Last Name" />
        <br />
        <input placeholder="Username" />
        <br />
        {/* the password textfield hides the password from showing as it's typed */}
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Password" />
        <br />
        <input placeholder="City" />
        <br />
        <input placeholder="State" />
        <br />
        <input placeholder="Job Title/Occupation" />
        <p>Github URL or another link to your portfolio</p>
        <input />

        <p>How much time can you commit to a project?</p>
        <TextField></TextField>
        <p>List your known programming languages</p>
        <textarea></textarea>
        <p>What qualifications do you have? Include degrees, certifications, courses, etc.</p>
        <textarea></textarea>
        <br />
        <Button variant="contained" color="primary">Register!</Button>
      </div>

    );
  }
}


export default App;
