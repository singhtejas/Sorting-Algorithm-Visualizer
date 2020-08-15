// function that returns the sorted array using merge sort for the animation:
export function getMergeSortVisuals(array)
{
    let visuals = []; //creating a new array called visuals which will have comparing values for animations purposes
    let helperArray = array.slice(); 
    mergeSortHelper(helperArray,0,helperArray.length-1,visuals); 

    return visuals; 

}

//function that will split the array into smaller arrays, then merge them:
function mergeSortHelper(helperArray, startIndex, lastIndex, animations) 
{
    // no further call when index is alone:
    if(startIndex === lastIndex) 
    {
        return;
    }

    //math.floor used to round the middle value down to get the middle index:
    const middleIndex = Math.floor((startIndex + lastIndex)/2); 
    mergeSortHelper(helperArray,startIndex, middleIndex, animations); 
    mergeSortHelper(helperArray,middleIndex+1, lastIndex, animations); 
    merger(helperArray,startIndex,middleIndex, lastIndex,animations); 
    
}
// inputs the left and right half of sorted arrays into a 'sortedArray' array and inputs merge sort comparison...
// ...values into an animation array in order to color code later :
function merger(helperArray,startIndex, middleIndex, lastIndex,animations) 
{
    let sortedArray = []; 
    let start = startIndex; 
    let afterMiddle = middleIndex + 1; 

    while ((start <= middleIndex) && ((afterMiddle) <= lastIndex)) 
    {
        animations.push(["color-indicator", start, afterMiddle]); //comparison values to color
        animations.push(["revert-color", start, afterMiddle]); //revert color


        if(helperArray[start] <= helperArray[afterMiddle]) 
        {
            sortedArray.push(helperArray[start++]);
        } else
        {
            sortedArray.push(helperArray[afterMiddle++]);
        }
    }

    while(start <= middleIndex)
    {
        animations.push(["color-indicator", start, start]); //comparison values to color
        animations.push(["revert-color", start, start]); //revert color
      
        //copy elements into sortedArray:
        sortedArray.push(helperArray[start++]); 
    }

    while((afterMiddle) <= lastIndex)
    {
        animations.push(["color-indicator", afterMiddle, afterMiddle]); //comparison values to color
        animations.push(["revert-color", afterMiddle, afterMiddle]); //revert color
      
        //copy elements into sortedArray:
        sortedArray.push(helperArray[afterMiddle++]); 

    }
    for (let i = startIndex; i <= lastIndex; i++) 
    {
        animations.push(["color-indicator", i, i - startIndex]);
        animations.push(["overwrite", i, sortedArray[i - startIndex]]);
        animations.push(["revert-color", i, i - startIndex]);
        helperArray[i] = sortedArray[i - startIndex];
    }

}

