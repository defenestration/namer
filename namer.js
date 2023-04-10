function showText(text) {
  document.getElementById("body").innerHTML = text;
}

async function go() {
  let animals = await fetch("https://raw.githubusercontent.com/defenestration/namer/main/animals.txt");
  animals = (await animals.text()).split('\n');
  let vehicles = await fetch("https://raw.githubusercontent.com/defenestration/namer/main/vehicles.txt");
  vehicles = (await vehicles.text()).split('\n');
  
  let animal = animals[Math.floor(Math.random()*animals.length)];
  let vehicle = vehicles[Math.floor(Math.random()*vehicles.length)];
  str = animal + " " + vehicle;

  console.log(str);
  showText( str);
}