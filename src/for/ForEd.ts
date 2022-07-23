///<reference path="../ha/comp/BaseComponent.ts"/>

class ForNextEd extends ha.comp.BaseComponent {
    private forObj: IFor;

    //for [var-isi] to [exp] next [content]
    constructor(forObj: IFor) {
        super();
        this._template = `
            <div class='for-next'>
                <div class='disp-table padding bevel-2'>
                    <div class='disp-cell bevel-1'>
                        <button class='for-next button'>|||</button>
                    </div>
                    <div class='disp-cell'>for </div>
                    <div class='var-isi-cont disp-cell bevel-1'></div>
                    <div class='disp-cell'> to </div>
                    <div class='for-next exp-cont disp-cell'></div>
                </div>
                <div class='stmt-cont disp-table'>
                </div>
                <div class='disp-table bevel-2 padding'>Next</div>
            </div>
        `;
        this.build();

        this.forObj = forObj;

        this.setup();
    }

    setup(): void {
        let varIsiEd: VarIsiEd;
        let expEd: ExpEd;

        varIsiEd = new VarIsiEd(VarIsi.get(this.forObj.varRef), false);
        varIsiEd.attach(this.varCont);

        expEd = new ExpEd(Exp.get(this.forObj.toRef));
        expEd.attach(this.expCont);
    }

    get varCont(): HTMLElement {
        return this.getEl('div.var-isi-cont');
    }

    get expCont(): HTMLElement {
        return this.getEl('div.for-next div.exp-cont.for-next');
    }

    get stmtCont(): HTMLElement {
        return this.getEl('div.stmt-cont');
    }


}