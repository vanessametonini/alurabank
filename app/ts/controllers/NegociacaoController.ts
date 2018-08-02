class NegociacaoController {

  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    // vai dar um erro de compilação, pois a classe não recebe parâmetro ainda
  }

  adiciona(event: Event) {

    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g,'/')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoes.paraArray().length = 0; // acabou de apagar!
    console.log(this._negociacoes.paraArray());
  }
}