console.log(
  "Hello, I am Odran. Welcome to my Js Code. Here, We will go over what we learned in class"
);

const cardsContainerHealthcare = document.getElementById("cards__ContainerH");
const cardsContainerFurniture = document.getElementById("cards__ContainerF");

// Función para cambiar el tema
function toggleTheme() {
  console.log('Hello Leonardo')
  // Toggling la clase en el body
  document.body.classList.toggle('dark-mode');
  
  // Guardar la preferencia en localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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
        "Enriquecida con los poderosos ingredientes de camelia y geranio, esta crema ligera se absorbe rápidamente para hidratar profundamente la piel, suavizar las líneas finas y protegerla de los daños ambientales.",
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
      descripcion: "Su diseño minimalista y su marco de madera natural lo hacen versátil y fácil de combinar. Ideal parabaños, salas de estar, dormitorios o cualquier espacio donde desees crear una sensación de amplitud y luminosidad.",
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
                  <p class="price">$${producto.precio}</p>
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


// Inicializar el tema cuando carga la página
document.addEventListener('DOMContentLoaded', initializeTheme);