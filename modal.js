(function opMod() {
    const open = document.querySelector('.open');
    const modal = document.querySelector('.modal');
    open.addEventListener('click', () => {
        modal.style.display = 'block';
    })
})();

(function clMod() {
    const close1 = document.querySelector('.btn1');
    const close2 = document.querySelector('.btn2');
    const modal = document.querySelector('.modal');
    close1.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    close2.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    })
})();

