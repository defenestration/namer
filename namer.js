function showText(text) {
  document.getElementById("body").innerHTML = text;
}

async function go() {
  let animals = await fetch("https://raw.githubusercontent.com/defenestration/namer/main/animals.txt");
  animals = (await animals.text()).split('\n');
  let vehicles = await fetch("https://raw.githubusercontent.com/defenestration/namer/main/vehicles.txt");
  vehicles = (await vehicles.text()).split('\n');
  let weapons = await fetch("https://raw.githubusercontent.com/defenestration/namer/main/weapons.txt");
  weapons = (await weapons.text()).split('\n');



  let left = animals;
  let right = vehicles.concat(weapons);
  str = left[Math.floor(Math.random() * left.length)]
    + " "
    + right[Math.floor(Math.random() * right.length)];

  console.log(str);
  showText(str);
}