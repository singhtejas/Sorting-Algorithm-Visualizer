// function that returns the sorted array using bubble sort for the animation:
export function getBubbleSortVisuals(array) 
{
    let visuals = [];
    let helperArray = array.slice();
    bubbleSort(helperArray,visuals);
    return visuals;
}

function bubbleSort(helperArray, visuals) 
{
    let lastIndex = helperArray.length-1;
    while(lastIndex > 0) 
    {
        //iterate from the first to last index:
        let willSwap = false;
        for(let i = 0; i < lastIndex; i++) 
        {
            visuals.push(["color-indicator", i, i + 1]); //comparison values to color
            visuals.push(["revert-color", i, i + 1]); // revert color
            
            if(helperArray[i] > helperArray[i + 1]) 
            {
                //push values in visuals array for animatino pursposes:
                willSwap = true;
                visuals.push(["yes-swap", i, helperArray[i + 1]]);
                visuals.push(["yes-swap", i + 1, helperArray[i]]);

                //swap values:
                let temp = helperArray[i]; 
                helperArray[i] = helperArray[i+1];
                helperArray[i+1] = temp;
            }
        }
        if(willSwap === false)
        {
            break;
        }
        lastIndex--;
    }
}
