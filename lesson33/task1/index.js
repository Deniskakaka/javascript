let form = document.forms[0];
const baseUrl = 'https://crudcrud.com/api/70ca0bc6d1dc4027be93a9cfbea794f1/users';
const inputs = document.querySelectorAll('.form-input');
const er = document.querySelector('.error-text');

form.addEventListener('input', () => {
    if (form.reportValidity()) {
        document.querySelector('.submit-button').disabled = false;   
    }
    er.textContent = '';
});

function addUser(userData) {
    return fetch(baseUrl, {
       method: 'POST',
        headers: {
           'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    }).then(response => response.json())
      .then(result => {
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
            document.querySelector('.submit-button').disabled = true;
            alert(JSON.stringify(result));
      })
      .catch(error => er.textContent = 'Failed to create user')
};

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault()
    addUser({ 
    email: inputs[0].value,
    name: inputs[1].value,
    password: inputs[2].value
    });
});