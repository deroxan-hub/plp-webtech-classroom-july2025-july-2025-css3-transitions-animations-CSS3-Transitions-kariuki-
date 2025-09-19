let globalCountKariuki = 0;

// ----------------------------
//  Animate Box
// ----------------------------
function animateBox(boxId, times) {
    let box = document.getElementById(boxId);
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            box.classList.add('animate');
            setTimeout(() => box.classList.remove('animate'), 600);
        }, i * 700);
    }
    return times;
}

// ----------------------------
// Global Counter
// ----------------------------
function incrementGlobalCounter() {
    let localVar = 5; // local scope
    globalCountKariuki += localVar;
    return globalCountKariuki;
}

// ----------------------------
// Button Click Event
// ----------------------------
document.getElementById('buttonKariuki').addEventListener('click', () => {
    animateBox('boxKariuki', 3);
    console.log('Global count:', incrementGlobalCounter());
});

// Card Flip on Click
const card = document.getElementById('cardKariuki');
card.addEventListener('click', () => {
    const inner = card.querySelector('.card-inner');
    inner.classList.toggle('flipped');
});


// ----------------------------
// Modal Functionality
// ----------------------------
const modal = document.getElementById('modalKariuki');
const openModalBtn = document.getElementById('openModalKariuki');
const closeModalBtn = document.getElementById('closeModalKariuki');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});