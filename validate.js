function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;

    // Expressão regular para validar o formato do email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        return false; // Impede o envio do formulário se o email for inválido
    } else {
        emailError.textContent = ''; // Limpa a mensagem de erro se o email for válido
        return true; // Permite o envio do formulário se o email for válido
    }
}