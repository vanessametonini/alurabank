import { NegociacaoController  } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

let formulario = document.querySelector('form') as HTMLFormElement

formulario.addEventListener('submit', event => controller.adiciona(event));