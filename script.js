const str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nobis odit, perferendis voluptates vero quas nisi doloribus ducimus et! Odit officiis deleniti in autem enim eius nihil rerum animi ducimus."

const decodeText = (text)=>{
    const array = text.split(" ")
    let newArray = []

    array.forEach((word) => {
    let wordLength = word.length
    console.log(wordLength)
    if (word.match(/[!,.]/ig)){
        wordLength--
    }
    if(wordLength % 2 === 0){
        newArray.push(word.split("").reverse().join(""))
        console.log(newArray)
    }
    if(wordLength % 2 === 1){
        newArray.push(word.toUpperCase())
    }

})

return newArray.join(" ")

}

console.log(decodeText(str))