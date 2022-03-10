function notRepeating(expression){

    //Looking for first letter in string that does not repeat
      const expressionToArray = expression.split("") //Converting string in array of letters
    
      let repeatingLetters = {} //Void object
    
      expressionToArray.reduce((prev, current) => {
          
          if(!repeatingLetters[current]) repeatingLetters[current]=1
          //if there is not in repeatingLetters{}, create repeatingLetters[current] prop
          else repeatingLetters[current]++ //else it already exist, increase your ocurrency
  
      }, repeatingLetters)
  
      for (var [key, value] of Object.entries(repeatingLetters)) {
        //iterating obj repeatingLetters
          if(value === 1){ //if the letter appears only once
              console.log(key)
              return
          }
      }
      
      
    }
    
    const expression = "ddfaaree"
    
  notRepeating(expression)
  