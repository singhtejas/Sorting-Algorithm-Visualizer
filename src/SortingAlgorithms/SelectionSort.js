// function that returns the sorted array using selection sort for the animation:
export function getSelectionSortVisuals(array) {
    let visuals = [];
    let helperArray = array.slice();
    selectionSort(helperArray, visuals);
    
    return visuals;
}

function selectionSort(helperArray, visuals) 
{   
    //finds the new smallest element value and puts it at the beginning:
    for (let i = 0; i < helperArray.length; i++) 
    {
        let indexOfMin = i; 
        for (let j = i + 1; j < helperArray.length; j++) 
        {
            //
            visuals.push(["color-indicator", j, indexOfMin]);//comparison values to color
            visuals.push(["revert-color", j, indexOfMin]); //revert coloring

            if (helperArray[j] < helperArray[indexOfMin]) 
            {
                indexOfMin = j;
            }
        }

        visuals.push(["swap", indexOfMin, helperArray[i]]);
        visuals.push(["swap", i, helperArray[indexOfMin]]);

        // swap values:
        if(indexOfMin !== i)
        {
            let temp = helperArray[indexOfMin];
            helperArray[indexOfMin] = helperArray[i];
            helperArray[i] = temp;
        }
        
    }
}
