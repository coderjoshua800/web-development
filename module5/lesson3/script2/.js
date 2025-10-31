function validate(e) {
    e.preventdeficult();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgbox = document.getElementById('message').value;
     
    let message =  ;
    if (email ==== '') {
        message = 'please enter email.';
        msgbox.style.color = 'red'

    } if else (pass === ''){
        message = 'password must be at least 8 character.';
        msgbox.style.color = 'red';
    }
   

}