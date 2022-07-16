class EditVariable extends ha.comp.BaseComponent {
    private _varId: number;
    private ganti: () => void;
    public get varId(): number {
        return this._varId;
    }

    constructor(id: number, f: () => void) {
        super();
        this._template = `
            <div class='exp padding border disp-inline-block'>
            </div>
        `;
        this.build();
        this._varId = id;
        this.ganti = f;
        this.display();

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            dlgPilihVariable.view.attach(document.body);
            dlgPilihVariable.tampil();
            dlgPilihVariable.finish = () => {
                this._elHtml.innerText = Variable.nama(dlgPilihVariable.varDipilih);
                this._varId = (dlgPilihVariable.varDipilih);
                this.display();
                this.ganti();
            }
        }
    }

    display(): void {
        console.log('display');
        console.log(this._varId);

        if (this._varId > 0) {
            this._elHtml.innerText = Variable.getVar(this._varId).nama;
        }
        else {
            this._elHtml.innerText = '---';
        }

    }
}