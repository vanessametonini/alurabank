export abstract class View<T> {

  private _elemento: Element;

  constructor(seletor: string, escapar: boolean = false) {
    this._elemento = document.querySelector(seletor) as Element;
  }

  update(model: T) {
    
    let template = this.template(model);
    
    template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}