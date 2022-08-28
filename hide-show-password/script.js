//  Show - Hide = Input

const showHiddenInput = (inputOverlay, inputPass, inputIcon) => {
    const overlay = document.getElementById(inputOverlay),
        input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () => {

        //Change password to text
        if (input.type === "password") {

            // switch to text
            input.type = 'text';

            // Change icon
            iconEye.classList.add("fa-eye");
            iconEye.classList.remove("fa-eye-slash");
        } else {
            // Change to password
            input.type = "password";

            // remove icon
            iconEye.classList.remove("fa-eye");
            iconEye.classList.add("fa-eye-slash");
        }

        // Toggle the overlay 
        overlay.classList.toggle("overlay-content");
    })
}

showHiddenInput("input-overlay", 'input-pass', "input-icon");