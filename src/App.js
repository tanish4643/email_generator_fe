import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      result: null
    };
  }

  fetchEmail(data){
    this.setState({loading: true});

    fetch(`http://localhost:4000/generate`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => { 
      this.setState({
        result:{
          status: res.status,
          message: res.message
        },
        loading: false
      });
    }).catch(err => { 
      this.setState({loading: false});
    });
  }

  render(){
    const {result,loading} = this.state;

    return(
      <div style={{height:'100%'}}>
        <header>
            <h1>EMAIL DERIVATOR</h1>
        </header>
        <main>
          {
            result ?
            <Result result={result} resetForm={() => this.setState({ result: null })} /> :
            <Form loading={loading} fetchEmail={(data) => this.fetchEmail(data)} />
          }
        </main>
      </div>
    )
  }
}

export default App;
