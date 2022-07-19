class ForNext extends ha.comp.BaseComponent {
    //for [var-isi] to [exp] next [content]
    constructor() {
        super();
        this._template = `
            <div clas='for-next'>
                <div class='disp-table'>
                    <div class='disp-cell'>for</div>
                    <div class='var-isi-cont disp-cell'></div>
                    <div class='disp-cell'>to</div>
                    <div class='exp-cont disp-cell'></div>
                    <div class='next disp-cell'>next</div>
                </div>
                <div class='stmt-cont disp-table'>
                </div>
            </div>
        `;
        this.build();

        //validate
        this.varCont;
        this.expCont;
        this.stmtCont;
    }

    setup(): void {

    }

    get varCont(): HTMLElement {
        return this.getEl('div.var-isi-cont');
    }

    get expCont(): HTMLElement {
        return this.getEl('div.exp-cont');
    }

    get stmtCont(): HTMLElement {
        return this.getEl('div.stmt-cont');
    }


}
const forNext: ForNext = new ForNext();