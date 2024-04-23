

//my solution
function flickSwitch(arr){
    let switchOn = true
    return arr.map(thing => {
      if (thing === "flick") {
        switchOn = !switchOn
      }
      return switchOn
    })
      
  }