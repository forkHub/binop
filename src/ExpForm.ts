///<reference path="./comp/BaseComponent.ts"/>

/**
 * Form untuk edit exp property
 */
class ExpForm extends ha.comp.BaseComponent {
	private varId: number = 0;
	private exp: IExp;

	constructor() {
		super();

		this._template = `
			<div class="edit-arg edit-exp pos-abs top-0 left-0 back-color-white padding-8">
				<form class='padding border'>
					<div>
						<div>Type exp:</div>

						<div class='padding'></div>
						
						<div class='lit-cont'>

							<div class='padding-4'>
								<label>
									<input type="radio" name="tipe_arg" class="" value="${EXP_VALUE}" checked> literal
								</label>
								<br />
							</div>

							<div class="padding-4">
								<input type="text" name="literal" class='literal padding' placeholder="0">
							</div>

						</div>

						<div class='var-cont'>
							<div class='padding-4'>
								<label>
									<input type="radio" name="tipe_arg" class="" value="${EXP_REF_VAR}"> ref var
								</label>
								<br />
							</div>
							<div class="padding-4">
								<input type="text" name="ref" class='ref adding' placeholder="0">
								<button type='button' class="browse">browse</button>
							</div>
						</div>

					</div>
					<div class='padding'></div>

					<div class=''>
						<button type="submit" class="ok">ok</button>
						<button type="button" class="batal">batal</button>
					</div>

				</form>
			</div>
		`;

		this.build();

		this.form.onsubmit = (e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			try {
				let arg: string = this.tipeInputHtml.value;

				if (arg == EXP_VALUE) {
					this.exp.value = this.literalHtml.value;
					this.exp.varId = null;
				}
				else if (arg == EXP_REF_VAR) {
					this.exp.value = null;
					this.exp.varId = this.varId;
					//TODO: var id?

				}
				else {
					throw Error('')
				}

				this.detach();
			}
			catch (e) {
				console.error(e);
			}

			return false;
		}

		//browse variable 
		//TODO: diubah tanpa tombol
		this.browseVarTbl.onclick = (e: MouseEvent) => {
			e.stopPropagation();
			console.log('browse click');
			dlgPilihVariable.finish = () => {
				this.refHtml.value = Variable.nama(dlgPilihVariable.varDipilih);
				// this.exp.varId = dlgPilihVariable.varDipilih;

				console.log('pilih var finish: ' + dlgPilihVariable.varDipilih);
				console.log(this.literalHtml);
				console.log('value: ' + this.literalHtml.value);
				console.log('text: ' + this.literalHtml.innerText);
				console.log('nama var: ' + Variable.nama(dlgPilihVariable.varDipilih));
			}
			dlgPilihVariable.tampil();
		}

		(this.getEl('button.batal') as HTMLButtonElement).onclick = (e: MouseEvent) => {
			e.stopPropagation();
			this.detach();
		};

		binopEd.attach(this.getEl('div.binop-fragment-cont'));
	}

	//TODO: terima dihapus
	tampil(p: HTMLElement, exp: IExp): void {
		this.exp = exp;

		this.attach(p);
	}

	private get form(): HTMLFormElement {
		return this.getEl('form') as HTMLFormElement;
	}

	private get tipeInputHtml(): HTMLInputElement {
		return this.getEl('input[name=tipe_arg]') as HTMLInputElement;
	}

	private get literalHtml(): HTMLInputElement {
		return this.getEl('input[name=literal]') as HTMLInputElement;
	}

	private get refHtml(): HTMLInputElement {
		return this.getEl('input.ref') as HTMLInputElement;
	}

	private get browseVarTbl(): HTMLButtonElement {
		return this.getEl('button.browse') as HTMLButtonElement;
	}

}