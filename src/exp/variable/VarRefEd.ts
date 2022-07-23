class VarRefEd extends ha.comp.BaseComponent {
    private varRef: IVarRef;
    private menu: ha.comp.MenuPopup;
    private bisaDihapus: boolean = false;

    constructor(varRef: IVarRef, bisaDihapus: boolean) {
        super();

        this._template = `
            <div class='var-ref disp-inline-block user-select-none cursor-pointer'>
                <div class='padding bevel-2'>
                    <div class='var-ref cont back-white'></div>
                </div>
            </div>
        `;

        this.build();
        this.bisaDihapus = bisaDihapus;
        this.setupMenu();
        this.varRef = varRef;
        this.display();
        this.varCont.style.backgroundColor = 'white';

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            this.menu.view.attach(document.body);
        }
    }

    setupMenu(): void {
        this.menu = new ha.comp.MenuPopup();

        if (this.bisaDihapus) {
            this.menu.buatTombol({
                label: 'hapus',
                f: () => {
                    VarRef.hapus(this.varRef.id);
                    this.detach();
                }
            });
        }

        this.menu.buatTombol({
            label: 'update',
            f: () => {
                dlgPilihVariable.view.attach(document.body);
                dlgPilihVariable.tampil();
                dlgPilihVariable.finish = () => {
                    // this._elHtml.innerText = Variable.nama(dlgPilihVariable.varId);
                    this.varRef.refId = dlgPilihVariable.varId;
                    this.display();
                    // this.ganti();
                }
            }
        })
    }

    get varCont(): HTMLElement {
        return this.getEl('div.var-ref.cont');
    }

    display(): void {
        console.log('display');
        // console.log(this._varId);

        if (this.varRef.refId > 0) {
            this.varCont.innerText = Variable.get(this.varRef.refId).nama;
        }
        else {
            this.varCont.innerText = '---';
        }

    }
}