function generarProductos() {
    const productos = [
        {
            id: 1,
            name: 'iPhone 15',
            description: 'El iPhone 15 combina diseño elegante y potencia avanzada. Presenta una pantalla Super Retina XDR de 6.1 pulgadas con tecnología Dynamic Island, un chip A16 Bionic para un rendimiento superior y una nueva cámara principal de 48 MP que captura detalles excepcionales. Construido con aluminio reciclado, ofrece durabilidad y compromiso ecológico. Además, incluye conector USB-C y batería de larga duración, adaptándose a tus necesidades diarias con estilo y eficiencia.',
            amount: '600',
            stock:'10',
            image:'../img/iphone15-removebg-preview.png',
            details:'smartphones-pages/iphone15.html'
        },
        {
            id: 2,
            name: 'Samsung Galaxy A51',
            description: 'El Samsung Galaxy A51 es un smartphone de gama media con una pantalla Super AMOLED de 6.5 pulgadas que ofrece colores vibrantes y una experiencia visual inmersiva. Equipado con un procesador Exynos 9611 y 4 GB de RAM, proporciona un rendimiento fluido para tareas diarias y multitarea. Su cámara cuádruple de 48 MP captura fotos nítidas y detalladas, mientras que su batería de 4000 mAh garantiza una duración prolongada.',
            amount: '300',
            stock:'15',
            image:'../img/samsung-a51-removebg.png',
            details:'smartphones-pages/samsung-a51.html'
        },
        {
            id: 3,
            name: 'Samsung Galaxy S24 Ultra',
            description: 'El Samsung Galaxy S24 Ultra es el flagship de la serie S24, con una impresionante pantalla Dynamic AMOLED 2X de 6.8 pulgadas, 120 Hz de tasa de refresco y resolución QHD+. Equipado con el potente chip Snapdragon 8 Gen 3, garantiza un rendimiento excepcional. Su sistema de cámaras destaca con un sensor principal de 200 MP, ofreciendo fotos nítidas y detalles precisos, junto con un zoom óptico avanzado.',
            amount: '500',
            stock:'8',
            image:'../img/Galaxy-s24-muestra1-removebg-preview.png',
            details:'smartphones-pages/samsung-galaxy-s24-ultra.html'
        },
        {
            id: 4,
            name: 'PC Gamer i3 - RX 560 4GB',
            description: 'El PC Gamer i3 - RX 560 4GB es una máquina de alto rendimiento diseñada para ofrecer una experiencia de juego fluida. Equipado con un procesador Intel Core i3 de última generación y una tarjeta gráfica AMD RX 560 con 4GB de VRAM, este equipo permite disfrutar de juegos en 1080p con configuraciones medias a altas. Su diseño compacto y eficiente lo convierte en una opción ideal para quienes buscan potencia a un precio accesible.',
            amount: '700',
            stock:'5',
            image:'../img/pc2-removebg-preview.png',
            details:'pcs-pages/pc-i3.html'
        },
        {
            id: 5,
            name: 'PC Gamer AMD Ryzen 7 5700G',
            description: 'El PC Gamer AMD Ryzen 7 5700G es una máquina potente y eficiente, diseñada para ofrecer una experiencia de juego excepcional. Equipado con un procesador AMD Ryzen 7 5700G de 8 núcleos y 16 hilos, combina un rendimiento sobresaliente con gráficos integrados Radeon Vega, eliminando la necesidad de una tarjeta gráfica dedicada para juegos de nivel medio.',
            amount: '900',
            stock:'7',
            image:'../img/pc-removebg-preview.png',
            details:'pcs-pages/pc-ryzen7.html'
        },
        {
            id: 6,
            name: 'Notebook Gamer ASUS',
            description: 'El ASUS ROG Strix G15 es un potente notebook gamer diseñado para ofrecer un rendimiento excepcional. Equipado con un procesador Intel Core i7 y una tarjeta gráfica NVIDIA GeForce RTX 4060, permite jugar y realizar tareas intensivas con fluidez. Su pantalla de 15.6 pulgadas Full HD a 144Hz asegura una experiencia visual inmersiva, mientras que el sistema de refrigeración avanzado mantiene el equipo a temperaturas óptimas durante largas sesiones de juego',
            amount: '1200',
            stock:'12',
            image:'../img/notebookg-removebg-preview.png',
            details:'pcs-pages/notebook-asus-rog.html'
        },
        {
            id: 7,
            name: 'Logitech G203',
            description: 'El Logitech G203 es un ratón gaming de alto rendimiento, diseñado para jugadores que buscan precisión y comodidad. Con un sensor óptico de 8000 DPI ajustable, ofrece una respuesta rápida y precisa. Su diseño liviano y ergonómico permite un agarre cómodo durante largas sesiones de juego. Equipado con botones personalizables y retroiluminación RGB, el G203 combina funcionalidad y estilo, brindando una experiencia de juego mejorada y adaptada a tus necesidades.',
            amount: '25',
            stock:'20',
            image:'../img/logitech-203-removebg-preview.png',
            details:'hardware-pages/logitech-203.html'
        },
        {
            id: 8,
            name: 'MSI Optix MAG241C',
            description: 'El MSI Optix MAG241C es un monitor curvo de 23.6 pulgadas con una pantalla Full HD (1920x1080) que ofrece colores vibrantes y detalles nítidos. Su curva 1500R mejora la inmersión, mientras que su tasa de refresco de 165 Hz y tiempo de respuesta de 1 ms garantizan una experiencia de juego fluida y sin interrupciones. Con tecnología AMD FreeSync, reduce el desgarro de pantalla, y su diseño ergonómico permite ajustes de altura y inclinación para mayor comodidad. Ideal para gamers que buscan rendimiento y estética en su setup',
            amount: '120',
            stock:'4',
            image:'../img/MSI_Optix_MAG241C-removebg-preview.png',
            details:'hardware-pages/monitor-msi.html'
        },
        {
            id: 9,
            name: 'Redragon Dragonborn K630',
            description: 'El Redragon Dragonborn K630 es un teclado mecánico compacto y eficiente, ideal para jugadores y profesionales. Con 60% de diseño, ofrece una experiencia de escritura rápida y precisa gracias a sus interruptores mecánicos Outemu, además de una retroiluminación RGB personalizable. Su construcción robusta en plástico de alta calidad y teclado anti-ghosting aseguran un rendimiento fiable durante largas sesiones de uso. Compacto y funcional, es perfecto para quienes buscan portabilidad y alta respuesta sin sacrificar la comodidad',
            amount: '40',
            stock:'18',
            image:'../img/redragon-dragonborn-k630-removebg-preview.png',
            details:'hardware-pages/redragon-dragonborn-k630.html'
        }
    ]
    const productosParaConsola = productos.map(({image, details, stock, ...resto}) => resto);
    console.log(JSON.stringify(productosParaConsola, null, 2))
    return productos
}

document.addEventListener("DOMContentLoaded", () => {
  const productos = generarProductos();
  const container = document.querySelector(".cardsProd-container");
  const cartIcon = document.querySelector("#cart-btn");
  const cartContainer = document.querySelector("#cart-container");
  const cartList = document.querySelector("#cart-list");
  const cartTotal = document.querySelector("#cart-total");
  const clearCartBtn = document.querySelector("#cart-clear");
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  productos.forEach(producto => {
      const card = document.createElement("div");
      card.className = "card-productos";

      card.innerHTML = `
          <img src="${producto.image}" alt="${producto.name}">
          <h3>${producto.name}</h3>
          <p>$${producto.amount}</p>
          <p>Stock: <span id="stock-${producto.id}">${producto.stock}</span></p>
          <div class="btn-container">
              <button class="btn-details" data-id="${producto.id}">Mostrar descripción</button>
              <button class="btn-carrito" data-id="${producto.id}">Agregar al carrito</button>
          </div>
          <div class="description-panel" id="desc-${producto.id}" style="display: none;">
              ${producto.description}
              <a href="${producto.details}">
                  <button class="btn-ver">Ver más</button>
              </a>
          </div>
      `;

      container.appendChild(card);
  });

  container.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-details")) {
          const productId = e.target.getAttribute("data-id");
          const panel = document.getElementById(`desc-${productId}`);
          panel.style.display = panel.style.display === "block" ? "none" : "block";
      }
  });

  container.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-carrito")) {
          const productId = parseInt(e.target.getAttribute("data-id"));
          const producto = productos.find(p => p.id === productId);

          if (producto.stock > 0) {
              producto.stock--; 
              document.getElementById(`stock-${productId}`).textContent = producto.stock;

              const itemInCart = carrito.find(item => item.id === productId);
              if (itemInCart) {
                  itemInCart.quantity++;
              } else {
                  carrito.push({ id: producto.id, name: producto.name, price: producto.amount, quantity: 1 });
              }

              actualizarCarrito();
              guardarCarritoEnLs(); 
              cartContainer.style.display = "block";
          } else {
              alert("Sin stock disponible");
          }
      }
  });

  function actualizarCarrito() {
      cartList.innerHTML = "";
      let total = 0;

      carrito.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
          cartList.appendChild(listItem);
          total += item.price * item.quantity;
      });

      cartTotal.textContent = `Total: $${total}`;
  }

  cartIcon.addEventListener("click", () => {
      cartContainer.style.display = cartContainer.style.display === "block" ? "none" : "block";
  });

  clearCartBtn.addEventListener("click", () => {
      carrito = [];
      actualizarCarrito();
      guardarCarritoEnLs(); 
      alert("El carrito ha sido vaciado.");
  });

  function guardarCarritoEnLs() {
      localStorage.setItem("carrito", JSON.stringify(carrito)); 
  }

  if (carrito.length > 0) {
    actualizarCarrito(); 
      cartContainer.style.display = "block"; 
  }
});
function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("nav-active");
}

const menuLinks = document.querySelectorAll(".nav-links a");
menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        const navbar = document.querySelector(".navbar");
        navbar.classList.remove("nav-active");
    });
});

