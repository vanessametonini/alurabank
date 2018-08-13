export abstract class View<T> {

  private _elemento: Element;

  constructor(seletor: string, escapar?: boolean) {
    this._elemento = document.querySelector(seletor);
  }

  update(model: T) {
    
    let template = this.template(model);
    
    template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}