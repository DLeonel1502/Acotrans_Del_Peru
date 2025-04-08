function initCarousel(galleryContainer) {
  const gallery = galleryContainer.querySelector('.gallery');
  const images = Array.from(gallery.children);
  const imgWidth = images[0].clientWidth + 10; // Ancho de cada imagen + el espacio (gap)
  let currentIndex = 0;

  // Duplicar las imágenes para crear el efecto de ciclo infinito
  gallery.innerHTML += gallery.innerHTML; // Duplicar las imágenes en el DOM

  const totalImages = images.length * 2; // El doble de imágenes, ya que las hemos duplicado

  // Configuración del tamaño total del contenedor
  gallery.style.width = `${imgWidth * totalImages}px`;

  // Función para actualizar la posición de desplazamiento
  const updateGalleryPosition = () => {
    gallery.style.transform = `translateX(-${currentIndex * imgWidth}px)`;

    // Revisar si estamos en el último elemento duplicado y cambiar de posición sin transición
    if (currentIndex === images.length) {
      setTimeout(() => {
        gallery.style.transition = 'none';
        currentIndex = 0; // Volver al inicio
        gallery.style.transform = `translateX(0)`;
      }, 300); // Retraso para que el cambio no se perciba
    }

    // Rehabilitar la transición después de reiniciar
    setTimeout(() => {
      gallery.style.transition = 'transform 0.3s ease';
    }, 350);
  };

  // Botones de desplazamiento
  galleryContainer.querySelector('.prev-btn').addEventListener('click', function() {
    if (currentIndex === 0) {
      // Si estamos en el primer índice, ir al final duplicado sin transición
      gallery.style.transition = 'none';
      currentIndex = images.length;
      gallery.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
      setTimeout(() => {
        gallery.style.transition = 'transform 0.3s ease';
        currentIndex--; // Mover al elemento anterior
        updateGalleryPosition();
      }, 50);
    } else {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateGalleryPosition();
    }
  });

  galleryContainer.querySelector('.next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGalleryPosition();
  });
}

// Inicializar todos los carruseles
document.querySelectorAll('.gallery-container').forEach(initCarousel);



// ENCABEZADO

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = target.offsetTop - 50; // Ajusta 50px según el tamaño de tu encabezado fijo
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
      });
  });
});


//Funcion en los botones


// Botón "Más información" en el encabezado: desplaza hacia la sección Servicios
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
});



// Enviar correo al hacer clic en los botones "Solicitar Servicio"
document.getElementById('btn-solicitar1').addEventListener('click', function () {
  window.location.href = 'mailto:operaciones@acotransdelperu.com';
});

document.getElementById('btn-solicitar2').addEventListener('click', function () {
  window.location.href = 'mailto:operaciones@acotransdelperu.com';
});

