var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// work-cards

const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
  <img width="600", height="400" src= "${imgSrc.replace(
        '200',
        '600'
    )}" alt="${name}"/>
  <p>${desc}</p>
  `;
    modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
    button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
    const isOutside = !event.target.closest('.modal-inner');

    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === 'Escape') {
        closeModal();
    }
});
