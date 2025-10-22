// window.addEventListener('scroll', function() {
//     const logo = document.getElementById('logo');
//     const mainTitle = document.querySelector('.main-title');
//     const subtitle = document.querySelector('.subtitle');
//     const portada = document.querySelector('.portada');
//     const scrollThreshold = 300; // Píxeles de scroll para empezar a ocultar
    
//     // Logo sticky
//     if (window.scrollY > portada.offsetHeight - 100) {
//         logo.classList.add('sticky');
//     } else {
//         logo.classList.remove('sticky');
//     }
    
//     // Ocultar/mostrar títulos
//     if (window.scrollY > scrollThreshold) {
//         mainTitle.style.opacity = '0';
//         mainTitle.style.transform = 'translateY(50px)';
//         subtitle.style.opacity = '0';
//     } else {
//         mainTitle.style.opacity = '1';
//         mainTitle.style.transform = 'translateY(0)';
//         subtitle.style.opacity = '1';
//     }
// });

// // Expansión del menú logo
// const logo = document.getElementById('logo');
// const logoText = document.querySelector('.logo-text');
// const logoMenu = document.querySelector('.logo-menu');

// logo.addEventListener('mouseenter', function() {
//     logo.classList.add('expanded');
//     logoText.classList.add('hidden');
//     logoMenu.classList.add('visible');
// });

// logo.addEventListener('mouseleave', function() {
//     logo.classList.remove('expanded');
//     logoText.classList.remove('hidden');
//     logoMenu.classList.remove('visible');
// });