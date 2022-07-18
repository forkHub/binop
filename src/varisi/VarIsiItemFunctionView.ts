class VarIsiFungView extends ha.comp.BaseComponent {
	private _item: IVarIsi;

	private menu: ha.comp.MenuPopup;
	private varCont: HTMLElement;
	private expCont: HTMLElement;

	constructor(item: IVarIsi) {
		super();
		this._template = `
			<div class='var-isi padding-4'>
				<div class='border padding-4 wbreak-keep-all wspace-nowrap'>

					<div class='disp-inline-block'>
						<button class='menu'>|||</button>
					</div>

					<div class='disp-inline-block wspace-nowrap'>
						<div class='var-cont disp-inline-block border'>
						</div>
						<div class='sama-dengan disp-inline-block padding border'>=
						</div>
						<div class='exp-cont disp-inline-block'>
						</div>
					</div>

					<div class="debug disp-none"></div>

					</div>

				</div>
			</div>
		`;

		this.build();
		this._elHtml.setAttribute('id', item.id + '');
		this._item = item;
		this.varCont = this.getEl('div.var-cont');
		this.expCont = this.getEl('div.exp-cont');
		this.init();

		//tombol
		this.getEl('button.menu').onclick = (e: MouseEvent) => {
			e.stopPropagation();

			this.menu.view.attach(document.body);
		}

	}

	destroy(): void {
		super.destroy();
		this._item = null;
		this.menu.destroy();
	}

	private setupMenu(): void {
		this.menu = new ha.comp.MenuPopup();
		this.menu.buatTombol({
			label: 'delete',
			f: () => {
				Data.deleteVarIsi(this._item.id);
				this.destroy();
				dataObj.simpan();
			}
		})
	}

	private init(): void {
		this.setupVar();
		this.setupExp();
		this.setupMenu();
	}

	private setupExp(): void {
		let fungEd: PanggilFungsiEd;
		let panggilFungsiObj: IPanggilFungsi;

		panggilFungsiObj = VarIsi.getFung(this._item);

		fungEd = new PanggilFungsiEd(panggilFungsiObj);
		fungEd.attach(this.expCont);
	}

	private setupVar(): void {
		console.log('setup var:');
		console.log('this._item.varId: ' + this._item.varId);

		let varEd: EditVariable = new EditVariable(this._item.varId, () => {
			this._item.varId = varEd.varId;
		});
		varEd.attach(this.varCont);
	}

}