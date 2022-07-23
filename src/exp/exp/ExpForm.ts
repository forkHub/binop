///<reference path="../../ha/comp/BaseComponent.ts"/>

/**
 * Form untuk edit exp property
 */
class ExpForm extends ha.comp.BaseComponent {
	private varId: number = 0;
	private exp: IExp;
	private value: IValue;
	private selesai: () => void;

	constructor(exp: IExp, selesai: () => void) {
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
									<input type="radio" name="tipe_arg" class="radio-value" value="${EXP_VALUE}" checked"> literal
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
									<input type="radio" name="tipe_arg" class="radio-var" value="${EXP_REF_VAR}"> ref var
								</label>
								<br />
							</div>
							<div class="padding-4">
								<input type="text" name="ref" class='ref padding user-select-none cursor-pointer' placeholder="0" readonly>
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
		this.exp = exp;
		this.value = Value.buat(0);
		this.selesai = selesai;
		this.setEvent();
		this.setDisplay();
	}

	setDisplay(): void {
		let el: HTMLInputElement;

		if (this.exp.typeExp == EXP_VALUE) {
			(this.getEl('input.radio-value') as HTMLInputElement).checked = true;
			this.literalHtml.value = Value.get(this.exp.refId).value;

			el = this.getEl('input.radio-value') as HTMLInputElement;
			el.checked = true
		}
		else if (this.exp.typeExp == EXP_REF_VAR) {
			let varObj: IVar;

			el = this.getEl('input.radio-var') as HTMLInputElement;
			el.checked = true

			varObj = Variable.get(this.exp.refId);
			this.refHtml.value = varObj.nama;
		}
		else {
			throw Error('tipe exp undefined: ' + this.exp.typeExp);
		}

		console.group('set display:');
		console.log(this.exp);
		console.log(el);
		console.groupEnd();
	}

	setEvent(): void {
		this.form.onsubmit = (e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			try {
				let arg: string = this.tipeInputHtml.value;

				console.group('form submit');
				console.log(arg);

				if (arg == EXP_VALUE) {
					this.value.value = this.literalHtml.value;
					this.exp.refId = this.value.id;
					this.exp.typeExp = EXP_VALUE;
				}
				else if (arg == EXP_REF_VAR) {
					this.exp.refId = this.varId;
					Value.hapus(this.value.id);
					this.exp.typeExp = EXP_REF_VAR;
				}
				else {
					throw Error('')
				}

				console.log(this.exp);
				console.groupEnd();

				this.detach();
				this.selesai();
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
				this.refHtml.value = Variable.nama(dlgPilihVariable.varId);
				this.varId = dlgPilihVariable.varId;

				console.log('pilih var finish: ' + dlgPilihVariable.varId);
				console.log(this.literalHtml);
				console.log('value: ' + this.literalHtml.value);
				console.log('text: ' + this.literalHtml.innerText);
				console.log('nama var: ' + Variable.nama(dlgPilihVariable.varId));
			}
			dlgPilihVariable.tampil();
		}

		(this.getEl('button.batal') as HTMLButtonElement).onclick = (e: MouseEvent) => {
			e.stopPropagation();
			this.detach();
		};
	}

	private get form(): HTMLFormElement {
		return this.getEl('form') as HTMLFormElement;
	}

	private get tipeInputHtml(): HTMLInputElement {
		return this.getEl('input[name=tipe_arg]:checked') as HTMLInputElement;
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