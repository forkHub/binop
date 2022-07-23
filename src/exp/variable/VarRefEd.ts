class VarRefEd extends ha.comp.BaseComponent {
    // private _varId: number;
    private varRef: IVarRef;
    // private ganti: () => void;

    // public get varId(): number {
    //     return this._varId;
    // }

    constructor(varRef: IVarRef) {
        super();
        // IVar
        this._template = `
            <div class='exp padding bevel-1 disp-inline-block user-select-none cursor-pointer'>
            </div>
        `;
        this.build();
        this.varRef = varRef;
        // this._varId = id;
        // this.ganti = f;
        this.display();

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            dlgPilihVariable.view.attach(document.body);
            dlgPilihVariable.tampil();
            dlgPilihVariable.finish = () => {
                this._elHtml.innerText = Variable.nama(dlgPilihVariable.varId);
                this.varRef.refId = dlgPilihVariable.varId;
                this.display();
                // this.ganti();
            }
        }
    }

    display(): void {
        console.log('display');
        // console.log(this._varId);

        if (this.varRef.refId > 0) {
            this._elHtml.innerText = Variable.get(this.varRef.refId).nama;
        }
        else {
            this._elHtml.innerText = '---';
        }

    }
}