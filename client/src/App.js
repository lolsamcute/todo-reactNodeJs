import React from 'react';
import Tasks from './Tasks';
import { Paper, TextField } from '@material-ui/core';
import { Checkout, Button } from '@material-ui/core';
import './App.css';

class App extends Tasks {
  state = {tasks:[], currentTask: ""}
  render() {
    const {tasks} = this.state;
    return (<div className="App flex">
      <Paper elevation={3} className="container">
        <div className="heading">Assessment TO-DO</div>
        <form onSubmit={this.handleSubmit} className="flex" style={{margin:"15px 0"}}
        >

          <TextField
          variant="outlined"
          size="small"
          style={{width: "80px"}}
          value={this.state.currentTask}
          required={true}
          onChange={this.handleChange}
          placeholder="Add New TO-DO"
          />

          <Button 
          style={{height: "40px"}}
          color="primary"
          variant="outlined"
          type="submit"
          >

          Add Task
          </Button>

          
        </form>

    

      </Paper>
    </div>);
  }
}

export default App;
