import React,  { Component } from 'react';
import CardList from './CardList64';
import { pt } from './pt64';
import SearchBox from './SearchBox';
import './index64.css';

class App extends Component {  
    constructor() {    
        super();    
        this.state = {      
            pt64: pt,      
            searchPlace: ''    
        };  
    }  
    onSearchChange = event => {    
        this.setState({ searchPlace: event.target.value });  
    };  

    render() {    
        const filteredPt = this.state.pt64.filter(pt => {      
            return pt.name        
            .toLowerCase()        
            .includes(this.state.searchPlace.toLowerCase());    
        });
    
    return (
    <div className='tc'>      
    <h1>208410364-藍冠勛-demo project</h1>
      <SearchBox searchChange={this.onSearchChange}/>      
      <CardList pt={filteredPt} />;    
      </div>  
    );
}
}

export default App;