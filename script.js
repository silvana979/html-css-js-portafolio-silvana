function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offsetPercentage = currentIndex / totalSlides * -100;
        slider.style.transform = `translateX(${offsetPercentage}%)`;
    }

    // Función para avanzar y retroceder en el carrusel
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Controladores de eventos para los botones de siguiente y anterior (puedes ajustar según tu estructura HTML)
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all the buttons that open the modal
var btns = document.querySelectorAll(".details-btn");

// Add click event listeners to each button
btns.forEach(function(btn, index) {
  btn.onclick = function() {
    // Show the modal
    modal.style.display = "block";

    // Hide all project details initially
    var projectDetails = document.querySelectorAll(".project-details p");
    projectDetails.forEach(function(detail) {
      detail.style.display = "none";
    });

    // Display the correct project detail based on the button clicked
    if (index === 0) {
      document.querySelector(".p1").style.display = "block";
    } else if (index === 1) {
      document.querySelector(".p2").style.display = "block";
    }
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

