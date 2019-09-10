import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

@inject(stores => ({
  changeField: stores.form.changeField
}))
@observer
class Form extends Component {
  handleChange = e => {
    const { target } = e;
    this.props.changeField(target.name, target.value);
  };

  render() {
    return (
      <form className="form">
        <TextField
          label="First Name"
          name="firstName"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Last Name"
          name="lastName"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          onChange={this.handleChange}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Street"
          name="street"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="City"
          name="city"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Nickname"
          name="nickname"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          name="password"
          onChange={this.handleChange}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <Button className="form__submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
