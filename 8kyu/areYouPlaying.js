// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r"){
      name+= " plays banjo"
    }else {
      name+= " does not play banjo"
    }
    return name;
  }
  
  //lower or upper, name
  //if starts with R or r -> returns name + " plays banjo"
  //else -> returns name + "does not play banjo"
  //robert -> robert plays banjo
  //suzie -> suzie does not play banjo
  //check for case and make lower
  //

/* other solutions */

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }
//
  function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
//
function areYouPlayingBanjo(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
  }
//
  function areYouPlayingBanjo(n)
{ 
  // Imaginate a new Person
  var theCandidate = new Person(n);
  
  // Invoke the power of Instrumentology
  var theRitual = new Instrumentology();
  theRitual.beginAudit(theCandidate);
  
  // See if the Person now plays the banjo
  return theCandidate.queryInstrument("banjo");
}


function Person(name) {
  this.name = name;
  this.instrumentsPlayed = [];
}

Person.prototype.getFirstLetterOfName = function() {
  if(this.name.length > 0) {
    var firstLetter = this.name.substr(0,1);
    firstLetter = firstLetter.toLowerCase();
    return firstLetter;
  } else {
    return false;
  }
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.queryInstrument = function(instrument) {
  for(var i = 0; i < this.instrumentsPlayed.length; i++) {
    if(instrument == this.instrumentsPlayed[i].getName()) 
      return this.getName() + " plays " + instrument;
  }
  return this.getName() + " does not play " + instrument;
}

Person.prototype.learnInstrument = function(instrument) {
  if(instrument instanceof Instrument) {
    this.instrumentsPlayed.push(instrument);
  }
}

function Instrumentology() {
  this.theBookOfInstrumentology = [
    { letter: "a", instrument: new Instrument("flute") },
    { letter: "b", instrument: new Instrument("guitar") },
    { letter: "c", instrument: new Instrument("bongos") },
    { letter: "r", instrument: new Instrument("banjo") },
    { letter: "s", instrument: new Instrument("tambourine") },
    { letter: "z", instrument: new Instrument("triangle") }];
}


Instrumentology.prototype.beginAudit = function(person) {
  person.learnInstrument(this.consultTheSacredTexts(person.getFirstLetterOfName()));
}

Instrumentology.prototype.consultTheSacredTexts = function(telemetry) {
  for(var i = 0; i < this.theBookOfInstrumentology.length; i++) {
    if(this.theBookOfInstrumentology[i].letter == telemetry) {
      return this.theBookOfInstrumentology[i].instrument;
    }
  }
}


function Instrument(name) {
  this.name = name;
}

Instrument.prototype.getName = function() {
  return this.name;
}

//

const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`


//clever
const areYouPlayingBanjo = name => {
	const plays = name.toLowerCase().startsWith('r')
		? 'plays'
		: 'does not play';
	return `${name} ${plays} banjo`;
}


//test cases    
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })

describe("Random tests", () => {  
  
  const lst = ["Adam", "Bob", "chelsea", "daniel", "Ethan", "fanny", "george", "harry", 
               "Ignatious", "Kyle", "Lavender", "michelle", "peter", "Ragu", "Ryle", "Reaven", 
               "royce", "richard", "rubi", "Reanor", "resh", "Samantha", "trishan", "valde"]
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let word = lst[randint(0, lst.length - 1)]
    let expected = word.toLowerCase()[0] == 'r'? `${word} plays banjo`: `${word} does not play banjo`
    it(`areYouPlayingBanjo(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(areYouPlayingBanjo(word), expected);
    });
  }
})