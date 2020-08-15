import React from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';


function App(){
    return(
      <div className="App">
          <div className = "header">
          <h1><u>Sorting Algorithms Visualizer</u></h1>
             <i><p> ** To exit an Algorithm, please refresh the page ** </p></i> 
              <p> By: Tejas Singh </p>

          </div>
          
          <SortingVisualizer></SortingVisualizer>
      </div>
    );
  }

export default App; 
