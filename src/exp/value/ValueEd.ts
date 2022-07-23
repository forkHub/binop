class ValueEd extends ha.comp.BaseComponent {
    private menu: ha.comp.MenuPopup = new ha.comp.MenuPopup();
    private value: IValue;

    constructor(value: IValue) {
        super();
        this._template = `
            <div class='value padding-4 disp-inline-block user-select-none cursor-pointer'>
                <div class='value cont padding-4'>

                </div>
            </div>
        `;
        this.build();
        this.value = value;
        this.cont.innerText = value.value;
        this.setupMenu();

        this._elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();

            this.menu.view.attach(document.body);
        }
    }

    get cont(): HTMLElement {
        return this.getEl('div.value div.value.cont')
    }

    setupMenu(): void {
        this.menu.buatTombol({
            label: 'hapus',
            f: () => {
                Value.hapus(this.value.id);
                this.detach();
                this.destroy();
            }
        });

        this.menu.buatTombol({
            label: 'edit',
            f: () => {
                let nilai2: string = window.prompt("value:", this.value.value);
                if (nilai2) {
                    this.value.value = nilai2;
                    this.cont.innerText = nilai2;
                }
            }
        })
    }
}