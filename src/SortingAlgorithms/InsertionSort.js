// function that returns the sorted array using insertion sort for the animation:
export function getInsertionSortVisuals(array)
{
    let visuals = [];
    let helperArray = array.slice();

    insertionSort(helperArray, visuals);

    return visuals;
}

function insertionSort(helperArray,visuals)
{
    const len = helperArray.length;
    // comparing elements sequentially:
    for(let i = 1; i < len; i++)
    {
        let currentValue  = helperArray[i];
        let j = i - 1;

        visuals.push(["color-indicator", j, i]); //comparison values to color
        visuals.push(["revert-color",j, i]); // revert the color

        while(j>=0 && helperArray[j] > currentValue)
        {
            visuals.push(["color-indicator", j, i]); //comparison values to color
            visuals.push(["revert-color",j, i]); // revert color

            visuals.push(["overwrite", j+1, helperArray[j]]);
            helperArray[j+1] = helperArray[j];
            j--;

        }

        // overwrite values in visuals array:
        visuals.push(["overwrite", j+1, currentValue]);
        helperArray[j+1] = currentValue;
    }


}