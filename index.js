function findMinAndRemove(array){
    let min=array[0]
    let index=0
    for (let i=0; i< array.length;i++){
        if (array[i]<min){
            min=array[i]
            index=i
        }
    }
    array.splice(index, 1)
    return min
}

function selectionSort(array){
let newArray=[]
while (array.length>0){
    newArray.push(findMinAndRemove(array))
}
return newArray
}
