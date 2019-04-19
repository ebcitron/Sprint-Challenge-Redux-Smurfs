import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import SmurfsList from '../components/SmurfsList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
  name:'',
  age:'',
  height:'',
  };
  componentDidMount = () =>{
    this.props.getSmurfs();
  };
  handleChanges = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  };

  handleNewSmurf = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };


  render() {
   console.log(this.props);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList smurfs = {this.props.smurfs} />
        <form onSubmit = {this.handleNewSmurf}>
        <input
        type = "text"
        name = "name"
        value = {this.state.name}
        placeholder = "Name"
        onChange = {this.handleChanges}
        /> 

        <input
        type = "text"
        name = "age"
        value = {this.state.age}
        placeholder = "Age"
        onChange = {this.handleChanges}
        /> 

        <input
        type = "text"
        name = "height"
        value = {this.state.height}
        placeholder = "Height"
        onChange = {this.handleChanges}
        /> 
        <button onClick = {this.handleNewSmurf} > Add Smurf </button>
          </form>       
      </div>
    );
  }

}
 const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
    };
  };
export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
