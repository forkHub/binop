class IfEd extends ha.comp.BaseComponent {
    private ifObj: IIf;
    private expCont: HTMLElement;

    constructor(ifObj: IIf) {
        super();
        this._template = ``;
        this.build();
        this.ifObj = ifObj;

        this.expCont = this.getEl('div.exp-cont');
        if (ifObj.expId > 0) {

        }
    }


}