class ExpEd extends ha.comp.BaseComponent {
    private expObj: IExp;

    constructor(expObj: IExp) {
        super();
        this._template = `
            <div class='exp padding border disp-inline-block'>
            </div>
        `;
        this.build();
        this.expObj = expObj;
        this.display();

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            let form: ExpForm = new ExpForm(this.expObj, () => {
                this.display();
            });
            form.attach(document.body);
        }
    }

    display(): void {
        console.log('display');
        console.log(this.expObj);

        if (this.expObj.typeExp == EXP_VALUE) {
            this._elHtml.innerText = exp.getValue(this.expObj).value;
        }
        else if (this.expObj.typeExp == EXP_REF_VAR) {
            this._elHtml.innerText = exp.getVar(this.expObj).nama;
        }
        else {
            throw Error('exp type tidak di support: ' + this.expObj.typeExp);
        }

    }
}