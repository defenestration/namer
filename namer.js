async function getList(list){
  let data = await fetch(list);
  data = (await data.text()).split('\n');
  return data
}

//globals
var g_animals = getList("https://raw.githubusercontent.com/defenestration/namer/main/animals.txt");
var g_weapons = getList("https://raw.githubusercontent.com/defenestration/namer/main/weapons.txt");
var g_vehicles = getList("https://raw.githubusercontent.com/defenestration/namer/main/vehicles.txt");
var show_weapons = true;
var order = "animal"; 


function showText(text) {
  document.getElementById("content").innerHTML = text;
  document.getElementById("weapons_cb").checked = show_weapons;
}

function toggle_weapons(){
  show_weapons = !show_weapons;
  console.log("toggle_weapons: " + show_weapons);
  document.getElementById("weapons_cb").checked = show_weapons;
}

function get_order(){
  return document.getElementById("order_dropdown").value; 
}

function getRand(things) {
  return things[Math.floor(Math.random() * things.length)];
}

async function go() {
//await the globals
  let animals = await g_animals;
  let vehicles = await g_vehicles;
  let weapons = await g_weapons;
  let order =  get_order();
  let transports = vehicles.concat( weapons );
  // only vehicles if toggle is set.
  console.log("show weapons:" + show_weapons);
  if ( !show_weapons ){
    transports = vehicles;
  }
  let animal = await getRand(animals);
  let transport = await getRand(transports);

  // define order
  console.log("order: " + order);
  switch(order) {
  case "animal":
    // code block
    sequence = [ animal, transport ];
    break;
  case "transport":
    // code block
    sequence = [ transport, animal ];
    break;
  default:
   //random
   let swapSides = Math.random() < 0.5
   console.log("swapsides: " + swapSides);
   if ( swapSides ) {
     sequence = [ animal, transport ];
   } else {
    sequence = [ transport, animal];
   }
}
  str = sequence.join(" "); 
  console.log(str);
  showText(str);
}
