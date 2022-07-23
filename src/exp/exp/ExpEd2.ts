///<reference path="../../ha/comp/BaseComponent.ts"/>

class ExpEd2 extends ha.comp.BaseComponent {
    private exp: IExp;
    private menu: ha.comp.MenuPopup;

    constructor(exp: IExp) {
        super();
        this._template = `
            <div class='exp bevel-1 disp-inline-block user-select-none cursor-pointer'>
                
            </div>
        `;
        this.build();
        this.exp = exp;
        this._elHtml.style.minWidth = '36px';
        this._elHtml.style.minHeight = '36px';

        //TODO:
        //render rekursif bila exp tidak kosong

        this.menu = new ha.comp.MenuPopup();
        this.menu.buatTombol(
            {
                label: 'value',
                f: () => {
                    this.tambahValue();
                },
            }
        );

        this.menu.buatTombol(
            {
                label: 'var',
                f: () => {
                    this.tambahVar();
                },
            }
        );

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            this.menu.view.attach(document.body);
        }
    }

    tambahVar(): void {
        let editVar: VarRefEd;
        let varRef: IVarRef;

        varRef = VarRef.buat(this.exp.id);
        editVar = new VarRefEd(varRef)
    }

    tambahValue(): void {
        let value: IValue = Value.buat(this.exp.id);
        let valueEd: ValueEd;

        valueEd = new ValueEd(value);
        valueEd.attach(this._elHtml);
    }


}