document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');

    // Обработчик клика по кнопке поиска
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus(); // Автоматически устанавливаем фокус на поле ввода
        }
    });

    // Обработчик клика по полю ввода
    searchInput.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращаем закрытие при клике на поле ввода
    });

    // Закрытие поиска при клике вне элемента
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Закрытие поиска при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.blur(); // Убираем фокус с поля ввода
        }
    });    
}); 

const swiper = new Swiper('.slider', {
    // Основные параметры
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    // Добавляем стрелки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Добавляем скроллбар
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // // Автопрокрутка
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    // Эффекты
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});