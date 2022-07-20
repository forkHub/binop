class ForNextEd extends ha.comp.BaseComponent {
    private forObj: IFor;

    //for [var-isi] to [exp] next [content]
    constructor(forObj: IFor) {
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
                <div class='disp-table content'>Next</div>
            </div>
        `;
        this.build();

        this.forObj = forObj;

        //validate
        this.varCont;
        this.expCont;
        this.stmtCont;
    }

    setup(): void {
        //var isi
        let varIsiObj: IVarIsi;
        let varIsiEd: VarisiViewItem;

        varIsiObj = VarIsi.buatValue(this.forObj.id, exp.buatValue(0, value.buat(0)));
        varIsiEd = new VarisiViewItem(varIsiObj);
        varIsiEd.attach(this.varCont);

        //exp
        let expObj: IExp;
        let expEd: ExpEd;

        expObj = exp.buatValue(this.forObj.id, value.buat(0));
        expEd = new ExpEd(expObj);
        expEd.attach(this.expCont);
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