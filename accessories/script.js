window.addEventListener('DOMContentLoaded', () => {
    const myModalEl = document.getElementById('exampleModal');
    const myModal = new bootstrap.Modal(myModalEl);
    const joinBtn = myModalEl.querySelector('.btn-primary'); // Join Now button

    // Check if the user has already joined (optional: localStorage for persistence)
    let joined = false;

    const showModal = () => {
      if (!joined) {
        myModal.show();
      }
    };

    // Show modal on page load
    showModal();

    // Listen for when the modal is hidden (closed)
    myModalEl.addEventListener('hidden.bs.modal', () => {
      // Reopen only if user hasn't joined
      if (!joined) {
        setTimeout(showModal, 40000);
      }
    });

    // If user clicks "Join Now", prevent modal from showing again
    joinBtn.addEventListener('click', () => {
      joined = true;
      myModal.hide(); // close the modal immediately
    });
  });
//for carousel

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExampleCaptions");

  // Initialize Bootstrap carousel WITHOUT interval
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: false,
    ride: false,
    pause: false
  });

  // Custom 5s auto slide
  setInterval(() => {
    carousel.next();
  }, 3000);
});
// for others carousel
document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExample");

  if (!carouselElement) return;

  // If Bootstrap Carousel JS exists, initialize it safely
  if (typeof bootstrap !== "undefined" && bootstrap.Carousel) {
    bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 3000,
      ride: "carousel",
      pause: false
    });
  } else {
    // Fallback: manual sliding every 3 seconds
    let currentIndex = 0;
    const items = carouselElement.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    setInterval(() => {
      items[currentIndex].classList.remove("active");

      currentIndex = (currentIndex + 1) % totalItems;

      items[currentIndex].classList.add("active");
    }, 3000);
  }
});


