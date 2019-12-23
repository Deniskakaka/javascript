let form = document.forms[0];
const baseUrl = 'https://crudcrud.com/api/5e4c21c7b36342df8033c4e2958e3d6/users';
const inputs = document.querySelectorAll('.form-input');
const er = document.querySelector('.error-text');

form.addEventListener('input', () => {
    if (form.reportValidity()) {
        document.querySelector('.submit-button').disabled = false;
        
    } else {
        document.querySelector('.submit-button').disabled = true;
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
      .then(result => alert(JSON.stringify(result)))
      .catch(error => er.textContent = 'Failed to create user')
};

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault()
    addUser({ 
    email: inputs[0].value,
    name: inputs[1].value,
    password: inputs[2].value
    });
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
});