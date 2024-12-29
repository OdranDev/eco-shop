console.log(
  "Hello, I am Odran. Welcome to my Js Code. Here, We will go over what we learned in class"
);

const cardsContainerHealthcare = document.getElementById("cards__ContainerH");
const cardsContainerFurniture = document.getElementById("cards__ContainerF");
const iconTheme = document.getElementById("iconTheme")
const addToCart = document.getElementById("addToCart");
const counter = document.getElementById("counter");

// Función para cambiar el tema
function toggleTheme() {
  // Toggling la clase en el body
  document.body.classList.toggle('dark-mode');

  // Guardar la preferencia en localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  if (isDarkMode === true) {
    iconTheme.innerHTML = '';
    iconTheme.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#7C6A0A">
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Zm0-66.67q102 0 179.33-61.16Q736.67-309 760.67-395.67q-23.34 9-49.11 13.67-25.78 4.67-51.56 4.67-117.46 0-200.06-82.61-82.61-82.6-82.61-200.06 0-22.67 4.34-47.67 4.33-25 14.66-55-91.33 28.67-150.5 107-59.16 78.34-59.16 175.67 0 122 85.66 207.67Q358-186.67 480-186.67Zm-6-288Z"  stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  } else {
    iconTheme.innerHTML = '';
    iconTheme.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#7C6A0A">
        <path d="M480-346.67q55.33 0 94.33-39t39-94.33q0-55.33-39-94.33t-94.33-39q-55.33 0-94.33 39t-39 94.33q0 55.33 39 94.33t94.33 39Zm0 66.67q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-446.67H40v-66.66h160v66.66Zm720 0H760v-66.66h160v66.66ZM446.67-760v-160h66.66v160h-66.66Zm0 720v-160h66.66v160h-66.66ZM260-655.33l-100.33-97 47.66-49 96 100-43.33 46Zm493.33 496-97.66-100.34 45-45.66 99.66 97.66-47 48.34Zm-98.66-541.34 97.66-99.66 49 47L702-656l-47.33-44.67ZM159.33-207.33 259-305l46.33 45.67-97.66 99.66-48.34-47.66ZM480-480Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  }



}

// Función para inicializar el tema
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

const productos = {
  healthcare: [
    {
      imagen: "./assets/img/products/guasha-kit.jpg",
      alt: "Rodillo facial de jade: Consiste en un rodillo con una piedra de jade en cada extremo, utilizado para masajear la piel y reducir la hinchazón. Rodillo facial eléctrico: Un rodillo similar al anterior, pero con vibración eléctrica para una mayor estimulación de la piel y mejora de la circulación. Gua sha de cuarzo rosa: Una herramienta con forma de corazón, hecha de cuarzo rosa, utilizada para raspar la piel y promover la relajación muscular.",
      titulo: "Guasha-kit",
      descripcion:
        "Herramientas de belleza de cuarzo rosa y jade, diseñadas para masajear y tonificar la piel del rostro.",
      precio: "50.00",
    },
    {
      imagen: "./assets/img/products/hand-cream.jpeg",
      alt: "Nuestra crema hidratante facial Hydra-Repair Day es la solución perfecta para una piel radiante y rejuvenecida.",
      titulo: "Hand-cream",
      descripcion:
        "Enriquecida con poderosos nutrientes, esta crema ligera se absorbe rápidamente para hidratar profundamente la piel, suavizar las líneas finas y protegerla de los daños ambientales.",
      precio: "35.00",
    },
    {
      imagen: "./assets/img/products/organic-kit.jpg",
      alt: "Jabón artesanal: Nuestro jabón sólido está elaborado con ingredientes naturales que limpian y nutren tu piel suavemente, dejándola suave y perfumada.Cepillo de dientes de bambú: Un cepillo de dientes ecológico y duradero, con cerdas suaves que cuidan tu esmalte dental.Peine de madera: Un peine de madera de bambú que desenreda tu cabello con suavidad, reduciendo la fricción y el daño. Loción corporal: Nuestra loción corporal hidrata y nutre tu piel en profundidad, dejándola suave y radiante. Su fragancia delicada te envolverá en una sensación de calma y bienestar.",
      titulo: "Organic-kit",
      descripcion:
        "Te invita a conectar con la naturaleza. Cada artículo ha sido cuidadosamente diseñado para brindarte una experiencia sensorial única y cuidar de tu bienestar.",
      precio: "150.00",
    },
    {
      imagen: "./assets/img/products/organic-soap.jpg",
      alt: "Jabones artesanales de carbón activado: Limpieza profunda y revitalizante",
      titulo: "Organic-soap",
      descripcion:
        "Están elaborados con ingredientes naturales y de alta calidad. Estos jabones son perfectos para limpiar profundamente la piel, eliminar impurezas y dejarla suave revitalizada.",
      precio: "40.00",
    },
    {
      imagen: "./assets/img/products/serum.jpg",
      alt: "Elixir de Juventud: Suero facial revitalizante en un frasco.",
      titulo: "Serum",
      descripcion:
        "Nuestro suero facial revitalizante es un elixir concentrado de nutrientes esenciales para la piel, penetra profundamente para hidratar, rejuvenecer y proteger. ",
      precio: "120.00",
    },
    {
      imagen: "./assets/img/products/toothbrush.jpg",
      alt: "Cepillos de dientes de bambú: Cuida tus dientes y el planeta",
      titulo: "Cepillo de bambú",
      descripcion:
        "Fabricados con bambú de cultivo sostenible, nuestros cepillos son biodegradables y compostables, lo que significa que no dejarán huella en el planeta.",
      precio: "30.00",
    },
    {
      imagen: "./assets/img/products/desodorantes.jfif",
      alt: "Desodorante ecológico combina ingredientes naturales con un diseño elegante y moderno.",
      titulo: "Desodorante",
      descripcion:
        "Su fórmula es suave con la piel, libre de químicos dañinos, perfecto para quienes buscan una alternativa fresca, natural y respetuosa, sin comprometer la eficacia.",
      precio: "45.00",
    },
    {
      imagen: "./assets/img/products/shampoo&acondicionador.jfif",
      alt: "Shampoo y condicionador ecológicos para el individuo consciente del medio ambiente.",
      titulo: "Shampoo & acondicionador",
      descripcion:
        "Ofrecen una limpieza profunda y delicada, con ingredientes suaves que respetan tu piel y cabello. Un enfoque elegante y sustentable para tu rutina diaria.",
      precio: "40.00",
    },
  ],

  furniture: [
    {
      imagen: "./assets/img/furniture/desk-lamp.jpg",
      alt: "Lámpara de escritorio de madera y metal es la combinación perfecta de estilo y funcionalidad.",
      titulo: "Desk-lamp",
      descripcion:
        "Ilumina tu espacio con estilo y funcionalidad. Con su diseño elegante y ajustable, esta lámpara es ideal para cualquier espacio de trabajo o estudio. Su luz cálida y suave crea un ambiente acogedor y perfecto.",
      precio: "200.00",
    },
    {
      imagen: "./assets/img/furniture/mini-table.jpg",
      alt: "decoración para el hogar hermosa y sostenible que elevará tu espacio e inspirará a vivir tu mejor vida.",
      titulo: "Mini-table",
      descripcion: "Nuestros productos están cuidadosamente elaborados con materiales naturales, y creemos que cada pieza debe ser un reflejo de tu estilo y personalidad únicos.",
      precio: "250.00",
    },
    {
      imagen: "./assets/img/furniture/mirror.jpg",
      alt: "Espejo redondo con un marco de madera. El espejo tiene un diseño minimalista y elegante, con un marco de madera natural que le da un aspecto cálido y acogedor.",
      titulo: "Mirror",
      descripcion: "Su diseño minimalista lo hacen versátil y fácil de combinar. Ideal parabaños, salas de estar, dormitorios o cualquier espacio donde desees crear una sensación de amplitud y luminosidad.",
      precio: "100.00",
    },
    {
      imagen: "./assets/img/furniture/mueble.jpg",
      alt: "Un mueble de almacenamiento: Es una cómoda o aparador con dos cajones grandes, de diseño sencillo y líneas rectas. El mueble es de color blanco con detalles en madera, lo que le da un aspecto cálido y natural.",
      titulo: "Mueble",
      descripcion: "Es el complemento perfecto para cualquier espacio moderno. Combínala con nuestro marco de madera natural y nuestra lámpara de mesa para crear un ambiente acogedor y sofisticado.",
      precio: "300.00",
    },
    {
      imagen: "./assets/img/furniture/small-table.jpeg",
      alt: "mesa auxiliar redonda de color blanco con tres patas de madera",
      titulo: "Small table",
      descripcion: "para cualquier dormitorio o sala de estar. Su diseño moderno y elegante se adapta a cualquier estilo de decoración.",
      precio: "120.00",
    },
    {
      imagen: "./assets/img/furniture/stand-table.jpg",
      alt: "Una mesita de noche de madera con dos estantes. En el estante superior hay un pequeño cactus en una maceta blanca, un cuenco cantor de bronce y tres libros apilados.",
      titulo: "Stands",
      descripcion: "Su diseño sencillo y elegante se adapta a cualquier estilo de decoración. Los dos estantes te ofrecen espacio para tus libros, revistas, lámpara de noche y otros objetos personales.",
      precio: "80.00",
    },
    {
      imagen: "./assets/img/furniture/stand.jpg",
      alt: "mesas nido de diseño minimalista",
      titulo: "Stands Tables",
      descripcion: "Fabricadas en madera de alta calidad, su estilo versátil y funcionalidad las convierten en el complementoideal para cualquier ambiente. Son una pieza clave para quienes valoran la elegancia y la practicidad ensu hogar.",
      precio: "350.00",
    },
    {
      imagen: "./assets/img/furniture/wood-chair.jpg",
      alt: "Una mesa de soporte hecha de madera sostenible y de alta calidad, diseñada para complementar cualquier ambiente moderno.",
      titulo: "Wood Chair",
      descripcion: "Transforma tu espacio con nuestra línea de productos de cuidado personal, diseñados para armonizar con cualquier ambiente moderno. Con un enfoque en la simplicid la elegancia que complementan tu estilo de vida minimalista y sofisticado.",
      precio: "170.00",
    },
  ],
};

function renderizarProductos(categoria, contenedor) {
  const productosCategoria = productos[categoria];

  //Verificacion temprana
  if (!productos[categoria]) {
    console.error(`Categoría "${categoria}" no encontrada.`);
    return;
  } else {
    productosCategoria.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
              <picture>
                  <div class="icon-wish">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                          d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                          stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
                  <img src="${producto.imagen}" alt="${producto.alt}">
              </picture>
              <div class="info-product">
                  <h3 class="nameProduct">${producto.titulo}</h3>
                  <p class="description">${producto.descripcion}</p>
                  <span>
                    <div>
                      <button id="addToCart" class="removeToCart">-</button>
                        <div class="cart">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                              stroke="#7C6A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      <button id="removeToCart" class="addToCart">+</button>
                    </div>
                    <p class="price">$${producto.precio}</p>
                  </span>
              </div>
          `;

      contenedor.appendChild(card);
    });
  }
}
// Renderizar productos de healthcare
renderizarProductos("healthcare", cardsContainerHealthcare);

// Renderizar productos de furniture
renderizarProductos("furniture", cardsContainerFurniture);

/* + o - TO CART */
// Inicializar contador global de clics
let clickCount = 0;

// Agregar EventListener a cada botón
document.addEventListener('DOMContentLoaded', () => {
  const buttonsAdd = document.querySelectorAll('.addToCart');
  const buttonsRemove = document.querySelectorAll('.removeToCart');

  buttonsAdd.forEach(button => {
    button.addEventListener('click', () => {
      clickCount++;
      console.log('Click número:', clickCount);
    });
  });

  buttonsRemove.forEach(button => {
    button.addEventListener('click', () => {
      if(clickCount > 0){ 
        clickCount--;
      }
      console.log('Click número:', clickCount);
    });
  });
  if (clickCount <= 0) {
    console.log('VACIO')
  }
});


// Inicializar el tema cuando carga la página
document.addEventListener('DOMContentLoaded', initializeTheme);