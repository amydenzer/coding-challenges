// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)


// Solutions
function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
  }

//Solution
  const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;


//Solution

function duckDuckGoose(players, goose) {
    let circle = goose;
    while(players.length < circle) {
      circle -= players.length
    }
    return players[circle - 1 ].name
  }
  

  //Explanation
//   The given code defines a function called duckDuckGoose that selects a player based on the number goose. Let's break down the function step by step:

// Function Declaration:
// javascript
// Copy code
// const duckDuckGoose = (players, goose) => ...
// This is a declaration of an arrow function named duckDuckGoose that takes two arguments: players and goose.

// players: An array of players. Each player is expected to have a property name.
// goose: A number that represents the count.
// The Function Body:
// javascript
// Copy code
// players[(goose - 1) % players.length].name;
// (goose - 1): Since arrays in JavaScript are 0-based (i.e., the first item is at index 0, the second at index 1, and so on), we subtract 1 from the goose number to get the correct index.

// % players.length: This is the modulus operator. It returns the remainder when goose - 1 is divided by the number of players. This ensures that if the goose number exceeds the number of players, we wrap around to the beginning of the array. It's a way to make the counting circular.

// players[...]: We're using the computed index to get the corresponding player from the players array.

// .name: We access the name property of the selected player.

// Example:
// Imagine the game where children sit in a circle and count off in turn. The one who lands on the "goose" number is "it". If you have 5 players named "A", "B", "C", "D", and "E" and the goose number is 7, the counting would go "A, B, C, D, E, A, B..." and "B" would be "it". The function mimics this game logic.
// Given:

// javascript
// Copy code
// const players = [
//   {name: "A"},
//   {name: "B"},
//   {name: "C"},
//   {name: "D"},
//   {name: "E"}
// ];

// console.log(duckDuckGoose(players, 7));  // Outputs "B"
// Overall, the duckDuckGoose function helps to simulate the Duck, Duck, Goose game by selecting the player who is "it" based on the goose count.

//test

// const { assert } = require('chai');
// _ = require('underscore');

// class Player {
//   constructor(name) {
//   	this.name = name;
//   }
// }


// let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
// let players = ex_names.map( (n) => new Player(n) );
// let pass = false;


// describe("fixed tests", function(){
//   it("should find the correct goose", function(){
//     assert.strictEqual(duckDuckGoose(players, 1),  "a");
//     assert.strictEqual(duckDuckGoose(players, 3),  "c");
//     assert.strictEqual(duckDuckGoose(players, 10), "z");
//     assert.strictEqual(duckDuckGoose(players, 20), "z");
//     assert.strictEqual(duckDuckGoose(players, 30), "z");
//     assert.strictEqual(duckDuckGoose(players, 18), "g");
//     assert.strictEqual(duckDuckGoose(players, 28), "g");
//     assert.strictEqual(duckDuckGoose(players, 12), "b");
//     assert.strictEqual(duckDuckGoose(players, 2),  "b");
//     assert.strictEqual(duckDuckGoose(players, 7),  "f");
//   });
// });


// describe("randomized tests", function(){
//   it("should find the correct goose", function(){
    // let names = ["troubledruddy", "neuromarake", "pausefork", "eleazarstudies", "thighsubscript", "bulldarkened", "harmonicsupport", "peduncleinventory", "layingbinnacle", "chinaboots", "nappiesfunding", "pesounwieldy", "sproutpolicies", "mineradopt", "chinnockstaking", "bulginggrubby", "slugdebonair", "signtrouble", "spot!virgo", "carriagestaffnet", "hoursant", "pruneawe", "carrotssecretariat", "fundscocoa", "josiehung", "flavourederror", "decisivecrater", "filmsbeijing", "milderholy", "axelinitial", "pheasantecozone", "hashwhisper", "cronzgrotesque", "jerkycodswallop", "chadgin", "greetbling", "teachingmatch", "piedopossum", "cannonburgee", "questbaloo", "propertycompound", "obeisancequote", "junglegamepad", "ornatesleepover", "maternalsatellite", "pizzaactin", "jacktobermory", "vaguebelle", "taigaexcellent", "citiesdrolsay", "wavetrolly", "outspokengoshawk", "uggersvenogram", "currishwe", "offensivedunny", "binnaclebubba", "selfieampere", "tousledjournal", "tourrydberg", "collarbonekiss", "spewottawa", "causedsled", "gatorpotion", "hurriedgrazed", "visitsbustard", "rustynotes", "harthashtag", "pepsiescabeche", "postmangrowl", "journalistbobbin", "vansoundcloud", "glyderaustanley", "hocksines", "hashtaggitano", "modelegacy", "hawkinghumanist", "parsecopen", "alterdomain", "xpathapplies", "beneathextinction", "selectivepedestrian", "submitnibbles", "whitepicking", "smartiescrowhop", "jetstinchar", "cameratry", "studiesoften", "aspenleaking", "napkintennessee", "chavpot", "noddingprolapse", "elmoroxie", "cratonthatched", "collegesam", "dykeiceland", "bitscougar", "herbentertain", "namelondon", "skyebusiness", "volumetricharry", "flapswain", "googlehosts", "warningbefriend", "picklechoose", "meigskark", "uraniumweasel", "londonderrygaia", "strutsandstone", "cramercastration", "exaltedunpopular", "hickorygolfer", "diggingracial", "deliciouscecil", "bodycoals", "discusmeticulous", "wheelchairdishes", "pabloapples", "nosedfreedom", "prolapsestark", "denbyneat", "trojanflawed", "feistyfyne", "teasezenyatta", "syllablesworthwhile", "outragedinfuriated", "sybaseois\u00EDn", "gwendraethcraton", "macaroontoll", "newleaking", "ecozonetlikakila", "quallingsebastian", "hawserforehead", "historicalcannon", "regretfossil", "variablegray", "pastelruby", "taunteffluvium", "statuesnike", "yankieshrawley", "jasminebudweiser", "barbequedbilliards", "managerspretty", "heatinghermit", "ribotcuban", "cartridgesherd", "cheesynorton", "carotidsickness", "cramponsmutton", "usableupdated", "gamesyeasty", "fissionpeduncle", "mouldyequalizer", "kingstonsmirk", "copysing", "budshanger", "bewilderedtilly", "completioncitric", "jollypoo", "fluoridestrengthen", "deleteqed", "rescuebook", "assetcrunchy", "izmirpimento", "picayunecrest", "jazzsteeve", "willflag", "kochipooh", "yearningflushing", "goalimminent", "barracudagucci", "puncturepubic", "publisherpostit", "darlingsub", "ticketparmesan", "dunslandjasper", "topurse", "loanfond", "rudepart", "joyskull", "willinit", "tongueasia", "plateletartificial", "reportrutland", "unseasonedmoldwarp", "ruthlessspeedboat", "georgiastabber", "leafhysterical", "winstonwestfield", "squidnebraska", "wombadimension", "billspecify", "empanadaoncology", "egadcoffle", "meltedarena", "kungsampson", "radblessing", "blesspace", "goillouie", "lockedshallow", "ovenbirdbiscuit", "fibbersphene", "debrisjasper", "hisfrancium", "peachesdo", "weixinmasticate", "predicttorro", "olliedatabase", "fallantimatter", "lucywrestling", "enchantingupright", "horsesmarten", "poolfermented", "limitingdisplay", "tonkdingdong", "portercurb", "stunsute", "copperminelogger", "taipeisleuth", "computerisla", "miramichiunalakleet", "callistoely", "luckyserin", "infantilemen", "radiostoed", "capellaeyed", "grammarianplutonium", "wordsscare", "svelteadopt", "bottlecog", "cakeinitiated", "magnetmoonshadow", "dexterticket", "radianbirk", "charonporcupine", "diligenceearth", "mimosadecipher", "stringmanaged", "injurepeaceful", "circleclutching", "vestawakefield", "pavoscreen", "madisonminiature", "elearningthrush", "glazemailer", "improvechurch", "chiliroche", "fabkame", "notatedcricked", "primesvisible", "havinganalysing", "castingbevvy", "synclinelemur", "hornsponge", "shetlandcobra", "investorsdomino", "scentedsupplier", "volansmalboro", "surdjangle", "adelefarrah", "pulsarfantastic", "sparkletaste", "patepapoose", "dulekits", "breadbewildered", "bivycothi", "blondiebandage", "shinlimbic", "pourvoluntary", "inverianviegailee", "fryerforefoot", "crimdonwillow", "fermiumdeneb", "horsebackflagellum", "sinusginger", "soupypigeon", "websitescracked", "allagashincrease", "streamiced", "toothsometawe", "writerings", "bewitchedsunflower", "royalhorden", "seminoleutensil", "supportersartistic", "hardnessyorkshire", "pridemilly", "zealousalberta", "effectorcow", "sadfarnack", "spicaflats", "pythonfeast", "shysterbipolar", "beepingbraces", "angelstone", "maiseycanadian", "pembrokecarbonate", "sycanaussi", "snowdonbailey", "tentfetus", "auditils", "filletsherman", "mentionoval", "coloradocustard", "twiteacrid", "nanaimofervent", "gastropubbring", "ontariodrizzly", "fruityzaftig", "quicklimereceive", "monktonmeadcaroy", "nemoland", "malakruth", "anyhips", "gurgletags", "patterpanda", "valhronadartmoor", "flutherstrut", "cardiffthorough", "nevercomic", "severalexpression", "cattlearrival", "lacunamortician", "metrudy", "willowrenren", "tutorbaffin", "eyewoozy", "carelessfancy", "passcrush", "closedaffy", "hangeruno", "psammiterolly", "cowboycam", "troglodytecenter", "nonstopderry", "theopine", "noveltystepper", "moreenderman", "spawnedtanka", "spatulashare", "leggingswinter", "lliweddtaiga", "solvastirring", "impartialmustache", "anoraklumber", "yodelgreenish", "platformhoarse", "jugglingheptagon", "resistorfrogs", "begantrash", "dividepluto", "bynursing", "parrottdrunken", "beatlongfellow", "greasyflank", "stomachsudanese", "nappinglimey", "loggercharge", "marmaladecluster", "undaepounding", "americantrumpet", "stakinglukely", "playersapply", "truckdiseases", "heptagonitchy", "sportduisk", "treenaildecimal", "relayworcestershire", "raisinfreckles", "bikeblackjack", "hettytatin", "lippedblush", "vapidbillingham", "chewyfairy", "scribblecommunal", "swingrigid", "indelibleemm", "liquidrowdy", "transomlipped", "wanderthroat", "jerboamendip", "evacuationtactful", "oilyskype", "uslateral", "ammoniabeldon", "winterfavorable", "incubateskewer", "unsuitableensorcell", "dislikehypergalaxy", "cheerroyal", "favorpopinjay", "navigationvacuous", "reactivesummerside", "journalscurrency", "grotesquepentland", "menorahdoodilmore", "laireatable", "aspendauphine", "trenchheard", "husbandfinalist", "dustyformulas", "daisybroderick", "wallybobble", "spittalmoney", "appaloosacurved", "displayedtrenton", "goliathfollow", "wackmahjong", "archivesship", "clippingcockroach", "copapplejack", "cascadedundo", "tentpouch", "meticuloustarbert", "eventprocess", "littleporsche", "quietfinancials", "poomoist", "turtledoveacrobat", "maggothomesick", "chevingtonbleach", "nominationclose", "tahoregina", "norfolkchicken", "brockeyebuttercream", "idefechlin", "systemjiggle", "hammondhoop", "shingleskraft", "directoryjocular", "colorlesschromate", "studiedsinful", "soothekappa", "compoundscarp", "babingleyreduce", "limpingwizzed", "deceivesteering", "staithesmullion", "bellslips", "riddlestarchy", "burningstaithes", "pilototis", "advisorbank", "magnesiumeland", "milansociety", "malakgordon", "usanarrow", "hillsfeisty", "fonticonscotta", "dykemontie", "payingvenerated", "glissadecomplex", "shrewdnesscheese", "climbingegret", "scuppersimplicity", "jaialaiuppity", "softwarefindhorn", "directmashed", "statemusic", "bustprotostar", "campbelltonrealize", "eskimopipe", "croasdalenice", "archerymods", "tradeverde", "whateverhinnisdal", "socialvitamin", "laboredspoiled", "placesure", "lawersbrady", "fadejibboom", "stringvanderbilt", "spewweibo", "grassleesmasons", "fixcornea", "intestineabject", "sensorzodiacal", "triangularobliquity", "chestherschel", "granolamonsoon", "visualcheerful", "millieeared", "scriptswhoreson", "weddingwealth", "lucyicon", "prolapseapple", "ptarmiganindianapolis", "cheatonruby", "watermeloncroasdale", "templaterace", "crushrelieved", "explosiveharley", "smallintdeschutes", "loathsomegrumble", "alluvialsend", "mindglasses", "elatedalarming", "hawseagenda", "grimleybrazos", "quotienttail", "paperclipsweltering", "casesevanescent", "graniticshaula", "saintquokka", "barkraspberry", "smilingsaguenay", "eynortperiod", "labcoatditton", "cookiescalby", "poyntoncopy", "ageschemical", "achingchest", "irishcyrus", "shortbreadunripe", "overcookedrolled", "treenailradish", "realmthrasher", "travelerhefei", "scientificzodiacal", "afanheart", "indicespools", "resultslichen", "leoturn", "welltremble", "sornhick", "displayedsycan", "forwardupset", "pretendslips", "shovelsnapping", "policiesghost", "cloverproduce", "gizasirius", "groinshergar", "geoffreycuts", "ligamentlizard", "mincestoppers", "thumbpoll", "bananafaraday", "liftedcab", "dancerbuttons", "dieselrico", "harecheetah", "poodlewelcome", "cheshirelexus", "linglymphoma", "gelcavus", "charlestonspider", "tardypost", "bobolinknugget", "wormsphoenix", "citrinerogue", "beggarlynewman", "dialectshag", "flabbyalfred", "shipsmarske", "midpointextralarge", "cockneybungalow", "piratecambridgeshire", "paranoidmeteorite", "ragecatalysts", "cranbrookrabai", "pigjumpringworm", "faltercolburn", "hampbaloo", "pointsmeta", "chemistrydemurrage", "mainmastyoda", "etherealcred", "finchgoalie", "lightyearitself", "oreoproton", "hoovesrecent", "planemoniobrara", "approachbreasts", "slovenianpredictive", "cyclicjarring", "peaseyforesail", "maskdoting", "michigantoronto", "bandanasstudent", "munchingnotebook", "lincolnshirebolt", "dolphinapply", "hannadecent", "kindergartenindiscreet", "dysnomiahanoi", "gaudysociable", "wobblyursa", "keyhalladale", "hamstermixtape", "heidifrida", "depressedcarillon", "aniakchakjackie", "purserupture", "triangulumencoding", "ariesbattery", "saultbio", "nikkipeanuts", "napoleonmadison", "keplersoon", "lioncyclone", "bookerapollo", "arsexenon", "busysores", "lickshirtsinbulk", "furphyzunyi", "pixiegambling", "bundevaramunted", "eddiespanish", "dictatewest", "indianapolislackluster", "uncheckedjellies", "bugromeo", "beaveraled", "northamptonshirepluto", "tastesign", "hairhocks", "officejimmy", "cockroachtrouble", "coveringcowbird", "elsecounselor", "cornsincere", "flickrcamel", "usdunicode", "humtwitter", "footroundup", "electricsecondhand", "roentgeniumrhombus", "actintransferred", "sledgeargill", "scientifichassium", "pignutditton", "opennaden", "photothrilling", "forelimbburp", "ceramictern", "eatableunchin", "hullabaloobarnaby", "tearsquiche", "closurepeeve", "robertsapplaud", "averonpolyester", "droppingstatics", "cleverupright", "intervalessential", "polewrestlers", "keyliberty", "inwee", "peelwavelength", "maniacalrelax", "insulateaddition", "shawdonsoot", "brockvillefig", "inventedheat", "alsorift", "newtownjab", "wenzhoualibaba", "clappedcaluminous", "logoutfabulous", "purchasingbeeper", "sumardalesteinbach", "bavinonyx", "trainingdash", "missionbollers", "mosedaleaccess", "gateautufted", "noodlesknives", "whimsicalarray", "answerhandler", "pacificintegers", "cartierchallenges", "bangersbiscuits", "lamzoe", "harminternal", "professedward", "envymisty", "vugobsequious", "britishshelter", "nurserydome", "hinneysky", "foldingtip", "flavorfulbaps", "tentequality", "trainedcarn", "aspenstrikethrough", "halidedemurrage", "tubbytripadvisor", "harmlessopencart", "weeklyimmersion", "universalblob", "calcitegeronimo", "montanarockwell", "crashingsnore", "occultationvenogram", "daddyjansky", "emeraldremington", "runservlet", "abstractedterminally", "coloradobugs", "dessertsfea", "samvictoriaville", "cheyennedownholland", "birdsscared", "spacersanchor", "obsessedprime", "glossopal", "rhodiumseeka", "badgworthypalette", "jumbowool", "farnackeveryone", "crimdonmine", "sycanminutes", "gwaunmontreal", "tobermoryplonk", "magicsaskatoon", "squawkcomb", "compresspanjandrum", "indigoeight", "draughtspheroid", "sophitaz", "bullockssparkle", "mangledwaterloo", "cullionsdroppings", "livermoriumpants", "magellanicbellart", "accurateliberated", "screechingbold", "blockbenny", "samariumpissed", "geminideer", "relaxwagger", "faithfulcar", "nerodidactic", "prependrobonaut", "bobblygazebo", "takeoutalarmed", "bitchstrawberry", "craftsmanrowing", "eyepieceheavy", "lincolngrange", "roskhillfume", "fawrhenry", "syllableshorn", "oldhop", "poopeeler", "cocklefurious", "muggingnumnah", "earnestintend", "contenthungarian", "piggychalky", "lutetiumapplies", "fallopianstirring", "leanpiquillo", "derbyshireserpens", "mixinracked", "floppunctual", "starvelingconfucius", "sneeralydar", "barbreckclick", "romeoswainson", "plaitedwoodpecker", "asphalttoasted", "warenrat", "willetsiberian", "cheesybowen", "rosaceachancellor", "instagramcurium", "colloquialember", "faithfulfire", "ferocioussdraught", "filletsape", "frogsslimy", "numerouschanel", "nicoisejimbo", "confirmedecozone", "thickdespairing", "testsdewberry", "antlilly", "marriedhelvetica", "quarterlyeast", "spiritbutcher", "ripeinstinct", "stiffstaking", "boysudbury", "oncowboys", "fillerturkey", "windownorma", "tinyinfirm", "oberonorogeny", "newmanlarge", "wallopthunder", "sinepinto", "observechildren", "venerealglowstone", "journalvomit", "wallophuygens", "filterzodiacal", "fellowshipforget", "reggiesculptor", "therapyfairs", "braytonlesser"]
//     for (let i = 0; i < 50; i++) {
//       let ppl = _.take(_.shuffle(names), _.random(6, 50)).map((n) => new Player(n));
//       let ind = _.random(1, _.random(5000,50000));
//       let ans = ppl[(ind + ppl.length - 1) % ppl.length].name;
//       let userAns = duckDuckGoose(ppl, ind);
//       assert.strictEqual(userAns, ans);
//       pass = userAns == ans;
//     }
//   });
// });


// if (pass) console.log(`<style> @-webkit-keyframes typing { from { width: 0; } }
// @-webkit-keyframes blink-caret { 50% { border-color: transparent; } }
// #fin { 
// 	font: bold 1.25em monospace;
//   color: #5f8120;
// 	border-right: .25em solid grey;
//   border-left: 0em;
// 	width: 100%;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	-webkit-animation: typing 5s steps(30, end),
// 	blink-caret .5s step-end infinite alternate;}</style>
//   <div style="float:left;"><h3 id="fin">Thank you for completing my kata, please make a post if you have feedback or criticisms.</h3></div>`);

