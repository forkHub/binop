class PanggilFungsiEd extends ha.comp.BaseComponent {
    private panggilFungsiObj: IPanggilFungsi;

    constructor(f: IPanggilFungsi) {
        super();
        this._template = `
            <div class='panggil-fungsi wspace-no-wrap padding user-select-none cursor-pointer'>
                <div class='nama disp-inline-block'></div>
                <div class='disp-inline-block'>(</div>
                <div class='arg wspace-nowrap disp-inline-block'></div>
                <div class='disp-inline-block'>)</div>
            </div>
        `;
        this.build();
        this.panggilFungsiObj = f;
        this.display();
        this.setEvent();
    }

    setEvent(): void {
        this.namaEl.onclick = (e: MouseEvent) => {
            e.stopPropagation();

            pilihFungsi.finish = () => {
                panggilFungsi.ganti(this.panggilFungsiObj, pilihFungsi.idDipilih);
                this.display();
            }

            pilihFungsi.tampil(DekFungsi.daftar);
        }
    }

    buatComa(): HTMLElement {
        let el: HTMLElement;

        el = document.createElement('span');
        el.innerText = ' , '

        return el;
    }

    display(): void {
        this.namaEl.innerText = panggilFungsi.nama(this.panggilFungsiObj);

        //param
        this.argCont.innerHTML = '';

        this.panggilFungsiObj.param.forEach((itemId: number, idx: number) => {
            let expEd: ExpEd;
            let expObj: IExp;

            expObj = exp.get(itemId)
            expEd = new ExpEd(expObj);
            expEd.attach(this.argCont);

            if (idx < this.panggilFungsiObj.param.length - 1) {
                this.argCont.appendChild(this.buatComa());
            }
        })
    }

    get namaEl(): HTMLElement {
        return this.getEl('div.nama');
    }

    get argCont(): HTMLElement {
        return this.getEl('div.arg');
    }

}