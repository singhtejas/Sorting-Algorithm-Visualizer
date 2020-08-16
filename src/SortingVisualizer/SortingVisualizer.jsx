import React, { Component } from 'react';
import './SortingVisualizer.css';
import {getMergeSortVisuals} from '../SortingAlgorithms/MergeSort';
import {getBubbleSortVisuals} from '../SortingAlgorithms/BubbleSort';
import {getInsertionSortVisuals} from '../SortingAlgorithms/InsertionSort';
import {getSelectionSortVisuals} from '../SortingAlgorithms/SelectionSort';

class SortingVisualizer extends Component
{

    constructor(props)
    {
        super(props);

        this.state = 
        {
            array: []
        };
    }

    componentDidMount()
    {
        document.body.style.backgroundColor ='#eae7dc';
        this.refreshArray();
    }

    refreshArray()
    {
        const array = [];
        for(let i = 0; i <210; i++)
        {
            array.push(Math.floor(Math.random()*(715 - 10 + 1))+ 10);
        }
        array.backgroundColor = '#00887a';
        this.setState({array});

    }

    // Soritng Algorithms Below (Merge Sort, Selection Sort, Insertion Sort, and Bubble Sort):
    //      - for the methods below, similar structure is used uniformily to improve readability
    mergeSorter(){
 
        const visuals = getMergeSortVisuals(this.state.array);
        for(let i = 0; i < visuals.length; i++)
        {
            let isColorChange;
             if(visuals[i][0] == "color-indicator" || visuals[i][0] == "revert-color")
             {
                 isColorChange = true;
             }
             else
                isColorChange = false;

            const arrayBars = document.getElementsByClassName('bars');

            if(isColorChange === true)
            {
               const [indicator, firstBar_index, secondBar_index] = visuals[i];
               const color = (visuals[i][0] == "color-indicator") ? 'yellow' : '#00887a';
               const firstBar_Style = arrayBars[firstBar_index].style;
               const secondBar_Style = arrayBars[secondBar_index].style;
            

                setTimeout(() =>
                {
                    firstBar_Style.backgroundColor = color;
                    secondBar_Style.backgroundColor = color;

                }, i* 3);

            } else
            {
                setTimeout(() => 
                {
                    const [overwrite, barOneIdx, newHeight] = visuals[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },i* 3);
            }

        }
    }

    bubbleSorter()
    {
        const visuals = getBubbleSortVisuals(this.state.array);

        for (let i = 0; i < visuals.length; i++)
         {
            let isColorChange;
             if(visuals[i][0] == "color-indicator" || visuals[i][0] == "revert-color")
             {
                 isColorChange = true;
             }
             else
                isColorChange = false;

            const arrayBars = document.getElementsByClassName('bars');

            if(isColorChange === true) 
            {
                const color = (visuals[i][0] == "color-indicator") ? 'yellow' : '#00887a';
                const [indicator, firstBar_index, secondBar_index] = visuals[i]; 
                const firstBar_Style = arrayBars[firstBar_index].style;
                const secondBar_Style = arrayBars[secondBar_index].style;

                setTimeout(() => 
                {
                    firstBar_Style.backgroundColor = color;
                    secondBar_Style.backgroundColor = color;
                },i * 3);
            }
            else 
            {
                const [willSwap, barIndex, newHeight] = visuals[i];
                const barStyle = arrayBars[barIndex].style;

                setTimeout(() => 
                {
                    barStyle.height = `${newHeight}px`;
                },i * 3);  
            }
        }
    }

    insertionSorter(){
        const visuals = getInsertionSortVisuals(this.state.array);

        for (let i = 0; i < visuals.length; i++)
         {
             let isColorChange;
             if(visuals[i][0] == "color-indicator" || visuals[i][0] == "revert-color")
             {
                 isColorChange = true;
             }
             else
                isColorChange = false;
                
            const arrayBars = document.getElementsByClassName('bars');

            if(isColorChange === true) 
            {
                const color = (visuals[i][0] == "color-indicator") ? 'yellow' : '#00887a';
                const [indicator, firstBar_index, secondBar_index] = visuals[i]; 
                const firstBar_Style = arrayBars[firstBar_index].style;
                const secondBar_Style = arrayBars[secondBar_index].style;

                setTimeout(() => 
                {
                    firstBar_Style.backgroundColor = color;
                    secondBar_Style.backgroundColor = color;
                },i * 3);
            }
            else {
                const [value, barIndex, newHeight] = visuals[i];
                const barStyle = arrayBars[barIndex].style;

                setTimeout(() => 
                {
                    barStyle.height = `${newHeight}px`;
                },i * 3);  
            }
        }
    }   

    selectionSorter(){
        const visuals = getSelectionSortVisuals(this.state.array);

        for (let i = 0; i < visuals.length; i++) 
        {
            let isColorChange;
             if(visuals[i][0] == "color-indicator" || visuals[i][0] == "revert-color")
             {
                 isColorChange = true;
             }
             else
                isColorChange = false;
            const arrayBars = document.getElementsByClassName('bars');

            if(isColorChange === true)
            {
                const color = (visuals[i][0] === "color-indicator") ? 'yellow' : '#00887a';
                const [temp, firstBar_index, secondBar_index] = visuals[i];
                const firstBar_Style = arrayBars[firstBar_index].style;
                const secondBar_Style = arrayBars[secondBar_index].style;

                setTimeout(() => 
                {
                    firstBar_Style.backgroundColor = color;
                    secondBar_Style.backgroundColor = color;
                },i * 3);
            }
            else 
            {
                const [temp, barIndex, newHeight] = visuals[i];
                const barStyle = arrayBars[barIndex].style;

                setTimeout(() => 
                {
                    barStyle.height = `${newHeight}px`;
                },i * 3);  
            }
        }
    }

    render(){
        const {array} = this.state;

        return(
        <div className = "container">
            {array.map((currentValue, index) => (
                <div 
                    className = "bars" 
                    key={index}
                    style = {{height: `${currentValue}px`}}>
                </div>
                
            ))}
            <footer className= "footer">
            <br></br>
                <u>Generate a New Array</u>: <button onClick= {() => this.refreshArray()}> Randomize Array </button> &nbsp; &nbsp;
                <u>Algorithms</u>: <button onClick= {() => this.mergeSorter()}> Merge Sort </button> &nbsp;
                <button onClick= {() => this.bubbleSorter()}> Bubble Sort</button> &nbsp;
                <button onClick= {() => this.insertionSorter()}> Insertion Sort</button> &nbsp;
                <button onClick= {() => this.selectionSorter()}> Selection Sort </button> &nbsp;
            </footer>
            <br></br>
                
        </div>
        );
    }
}

export default SortingVisualizer;