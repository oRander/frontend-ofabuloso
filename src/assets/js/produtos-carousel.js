const productsFrito = [
  {
    title: "Mini Salgados",
    description:
      "Explore nossa linha de salgados fritos: crocantes por fora, macios por dentro e cheios de sabor. Cada unidade tem apenas 20g — o tamanho ideal para festas, eventos e revenda. Temos desde a tradicional coxinha de frango até o delicioso croquete de carne, passando por bolinha de queijo, kibe, rissole de carne, rissole de requeijão, salsicha, calabresa e presunto com queijo. Qualidade, variedade e praticidade que conquistam em cada mordida.",
    img: "assets/Images/home/fritos.png",
  },
  {
    title: "Mini Pastéis",
    description:
      "Mini pastéis fritos com massa fininha e recheios irresistíveis — perfeitos para qualquer ocasião. Temos desde o clássico presunto e queijo até sabores como carne, frango, pizza e muito mais.",
    img: "assets/Images/home/pastel.png",
  },
  {
    title: "Mini Churros",
    description:
      "Mini Churros recheado com doce de leite. Crocante por fora, cremoso por dentro. Ideal para adoçar festas, eventos ou servir como mimo irresistível.",
    img: "assets/Images/home/churros.png",
  },
];

const productsAssado = [
  {
    title: "Empadas",
    description:
      "Empadas assadas com massa amanteigada e recheios generosos de frango ou palmito. Perfeitas para festas ou revenda.",
    img: "assets/Images/home/empada.png",
  },
  {
    title: "Esfihas",
    description:
      "Mini esfihas com massa fofinha e recheios de carne ou frango. Uma opção deliciosa para qualquer ocasião.",
    img: "assets/Images/home/esfiha.png",
  },
];

let currentIndexFrito = 0;
let currentIndexAssado = 0;

function showProductFrito(index) {
  const product = productsFrito[index];
  document.getElementById("productFrito-title").textContent = product.title;
  document.getElementById("productFrito-description").textContent = product.description;
  document.getElementById("productFrito-img").src = product.img;
}

function nextItemFrito() {
  currentIndexFrito = (currentIndexFrito + 1) % productsFrito.length;
  showProductFrito(currentIndexFrito);
}

function prevItemFrito() {
  currentIndexFrito = (currentIndexFrito - 1 + productsFrito.length) % productsFrito.length;
  showProductFrito(currentIndexFrito);
}

document.querySelectorAll("ul li[data-index]").forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index"));
    currentIndexFrito = index;
    showProductFrito(currentIndexFrito);
  });
});

function showProductAssado(index) {
  const product = productsAssado[index];
  document.getElementById("productAssado-title").textContent = product.title;
  document.getElementById("productAssado-description").textContent = product.description;
  document.getElementById("productAssado-img").src = product.img;
}

function nextItemAssado() {
  currentIndexAssado = (currentIndexAssado + 1) % productsAssado.length;
  showProductAssado(currentIndexAssado);
}

function prevItemAssado() {
  currentIndexAssado = (currentIndexAssado - 1 + productsAssado.length) % productsAssado.length;
  showProductAssado(currentIndexAssado);
}

document.querySelectorAll("ul li[data-index-assado]").forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index-assado"));
    currentIndexAssado = index;
    showProductAssado(currentIndexAssado);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  showProductFrito(currentIndexFrito);
  showProductAssado(currentIndexAssado);
});
console.log("JS do carrossel carregado!");

window.addEventListener("load", () => {
    showProductFrito(currentIndexFrito);
    showProductAssado(currentIndexAssado);
});


