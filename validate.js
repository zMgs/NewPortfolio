function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;

    // Express�o regular para validar o formato do email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, insira um email v�lido.';
        return false; // Impede o envio do formul�rio se o email for inv�lido
    } else {
        emailError.textContent = ''; // Limpa a mensagem de erro se o email for v�lido
        return true; // Permite o envio do formul�rio se o email for v�lido
    }
}