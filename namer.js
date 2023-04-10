async function getList(list){
  let data = await fetch(list);
  data = (await data.text()).split('\n');
  return data
}

//globals
var animals = getList("https://raw.githubusercontent.com/defenestration/namer/main/animals.txt");
var weapons = getList("https://raw.githubusercontent.com/defenestration/namer/main/weapons.txt");
var vehicles = getList("https://raw.githubusercontent.com/defenestration/namer/main/vehicles.txt");
var show_weapons = true;

function showText(text) {
  document.getElementById("content").innerHTML = text;
  document.getElementById("weapons_cb").checked = show_weapons;
}

function toggle_weapons(){
  show_weapons = !show_weapons;
  console.log("toggle_weapons: " + show_weapons);
  document.getElementById("weapons_cb").checked = show_weapons;
}

async function go() {
  //await the globals
  let left = await animals;
  let ve = await vehicles;
  let we = await weapons;
  let right = ve.concat( we );
  if ( !show_weapons ){
    right = ve;
  }
  str = left[Math.floor(Math.random() * left.length)]
    + " "
    + right[Math.floor(Math.random() * right.length)];

  console.log(str);
  showText(str);
}