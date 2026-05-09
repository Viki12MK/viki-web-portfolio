// ✅ GLOBAL FUNCTION (must be outside)
function myFunction() {
  const menu = document.getElementById("nav-menu-slidebar");
  menu.classList.toggle("active");
}

document.querySelectorAll('#nav-menu-slidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("nav-menu-slidebar").classList.remove("active");
  });
});

document.addEventListener('click', (e) => {
  const menu = document.getElementById("nav-menu-slidebar");
  const hamburger = document.querySelector(".hamburger-icon");

  const clickedInsideMenu = menu.contains(e.target);
  const clickedHamburger = hamburger.contains(e.target);

  if (!clickedInsideMenu & !clickedHamburger) {
    menu.classList.remove("active");
  }
});


// Handle ALL project galleries
document.querySelectorAll('.gallery')
.forEach((project, projectIndex) => {

  const thumbnailsContainer = project.querySelector('.thumbnails');
  const lightbox = project.querySelector('.lightbox');
  const lightboxImg = project.querySelector('.lightbox-img');
  const closeBtn = project.querySelector('.close-btn');

  const allImages = [
    [
      '/images-web/Project_1_Screenshot_1.webp',
      '/images-web/Project_1_Screenshot_2.webp',
      '/images-web/Project_1_Screenshot_3.webp'
    ],
    [
      '/images-web/Project_2_Screenshot_1.webp',
      '/images-web/Project_2_Screenshot_2.webp',
      '/images-web/Project_2_Screenshot_3.webp'
    ],
    [
      '/images-web/Project_3_Screenshot_1.webp',
      '/images-web/Project_3_Screenshot_2.webp',
      '/images-web/Project_3_Screenshot_3.webp'
    ],
    [
      '/images-web/Project_4_Screenshot_1.webp',
      '/images-web/Project_4_Screenshot_2.webp',
      '/images-web/Project_4_Screenshot_3.webp'
    ]
  ];

  const images = allImages[projectIndex];

  images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.classList.add('thumbnail');

    thumbnail.addEventListener('click', () => {
      lightboxImg.src = image;
      lightbox.style.display = 'flex';
    });

    thumbnailsContainer.appendChild(thumbnail);
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

});