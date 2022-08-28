const buttons = document.querySelectorAll('a');

buttons.forEach(btn => {
    btn.addEventListener('click', function (asolo) {
        let x = asolo.clientX - asolo.target.offsetLeft;
        let y = asolo.clientY - asolo.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})