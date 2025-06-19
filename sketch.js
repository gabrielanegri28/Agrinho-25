let iconList = [];
let descriptionDiv;

function setup() {
  const canvas = createCanvas(600, 400);
  canvas.parent("canvas-container");
  descriptionDiv = document.getElementById("description");

  iconList = [
    { x: 100, y: 250, label: "Alimentos", info: "O campo fornece alimentos frescos para as cidades." },
    { x: 200, y: 280, label: "Saberes do campo", info: "Conhecimentos tradicionais passados entre gerações." },
    { x: 400, y: 220, label: "Tecnologia", info: "A cidade leva tecnologia para modernizar o campo." },
    { x: 500, y: 270, label: "Educação", info: "Educação melhora as oportunidades no campo e na cidade." }
  ];

  noLoop(); // só desenha uma vez
}

function draw() {
  background('#a8d08d'); // verde campo
  drawMap();

  // Desenha ícones pixelados estilo Minecraft
  drawPixelIcon(iconList[0].x, iconList[0].y, "food");
  drawPixelIcon(iconList[1].x, iconList[1].y, "book");
  drawPixelIcon(iconList[2].x, iconList[2].y, "computer");
  drawPixelIcon(iconList[3].x, iconList[3].y, "school");

  // Labels abaixo dos ícones
  textAlign(CENTER);
  fill(0);
  textSize(12);
  iconList.forEach(icon => {
    text(icon.label, icon.x, icon.y + 35);
  });
}

function drawMap() {
  fill('#654321'); // chão marrom
  rect(0, height / 2, width, height / 2);
  fill('#7ec850'); // céu verde claro
  rect(0, 0, width, height / 2);
}

function drawPixelIcon(x, y, type) {
  const size = 6;

  push();
  translate(x - size * 4, y - size * 4);
  noStroke();

  if (type === "food") {
    fill('#e5c200'); // amarelo milho
    rect(size*1, size*3, size*2, size*1);
    rect(size*0, size*2, size*1, size*2);
    fill('#4caf50'); // verde folha
    rect(size*3, size*2, size*1, size*3);
  } else if (type === "book") {
    fill('#c62828'); // vermelho
    rect(size*0, size*0, size*6, size*6);
    fill('#fff');
    rect(size*1, size*1, size*4, size*4);
  } else if (type === "computer") {
    fill('#757575'); // cinza
    rect(size*1, size*1, size*4, size*3);
    fill('#42a5f5'); // azul tela
    rect(size*2, size*2, size*2, size*1);
    fill('#424242'); // base cinza
    rect(size*1, size*4, size*4, size*1);
  } else if (type === "school") {
    fill('#6d4c41'); // marrom
    rect(size*1, size*2, size*4, size*3);
    fill('#d7ccc8'); // bege
    rect(size*2, size*3, size*2, size*2);
  }
  pop();
}

function mousePressed() {
  iconList.forEach(icon => {
    if (dist(mouseX, mouseY, icon.x, icon.y) < 25) {
      showIconInfo(icon);
    }
  });
}

function showIconInfo(icon) {
  descriptionDiv.innerHTML = `
    <h2>${icon.label}</h2>
    <p>${icon.info}</p>
  `;
}

function showSection(section) {
  if (!descriptionDiv) {
    descriptionDiv = document.getElementById("description");
  }

  if (section === "campo") {
    descriptionDiv.innerHTML = `
      <h2>🌽 Do Campo para a Cidade</h2>
      <p>O campo fornece alimentos, tradições e saberes valiosos que sustentam a vida nas cidades.</p>
    `;
  } else if (section === "cidade") {
    descriptionDiv.innerHTML = `
      <h2>🏫 Da Cidade para o Campo</h2>
      <p>A cidade contribui com tecnologia, educação e saúde, promovendo o desenvolvimento rural.</p>
    `;
  }
}
