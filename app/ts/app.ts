const controller = new NegociacaoController();

document
.querySelector('form')
.addEventListener('submit', event => controller.adiciona(event));