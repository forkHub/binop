///<reference path="../../ha/comp/BaseComponent.ts"/>

class BinopEditorFragment extends ha.comp.BaseComponent {
	private binop: IBinop;

	constructor(binop: IBinop) {
		super();
		this._template = `
			<div class='binop bevel-1'>
				<div class=''>
					<div class='wspace-nowrap'>

						<div class='exp1-cont disp-inline-block'>
							
						</div>

						<div class='opr disp-inline-block border'>
							<select class='opr padding' style='border:none'>
								<option value='+'>+</option>
								<option value='-'>-</option>
								<option value='*'>*</option>
								<option value='/'>/</option>
							</select>
						</div>

						<div class='exp2-cont disp-inline-block'>
							
						</div>


					</div>
				</div>

			</div>`;
		this.build();
		this.binop = binop;

		this.setExp(this.exp1Div, this.binop.exp1Id);
		this.setExp(this.exp2Div, this.binop.exp2Id);
		this.opr.value = this.binop.opr;

		this.opr.onchange = () => {
			console.log('opr change');
			this.binop.opr = this.opr.value;
		}
	}

	setExp(cont: HTMLElement, id: number): void {
		let expObj: IExp = Exp.get(id);
		let expEd: ExpEd = new ExpEd(expObj);

		expEd.attach(cont);
	}

	// get oprValue(): string {
	// 	let value: string = (this.getEl('select.opr') as HTMLSelectElement).value;
	// 	debugger;
	// 	return value;
	// }

	// get okTbl(): HTMLButtonElement {
	// 	return this.getEl('button.ok') as HTMLButtonElement;
	// }

	// get batalTbl(): HTMLButtonElement {
	// 	return this.getEl('button.batal') as HTMLButtonElement;
	// }

	get exp1Div(): HTMLElement {
		return this.getEl('div.exp1-cont');
	}

	get exp2Div(): HTMLElement {
		return this.getEl('div.exp2-cont');
	}

	get opr(): HTMLSelectElement {
		return this.getEl('select.opr') as HTMLSelectElement;
	}

}
// const binopEd: BinopEditorFragment = new BinopEditorFragment();