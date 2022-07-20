class Exp {
	private readonly daftar: IExp[] = [];

	buat(indukId: number): IExp {
		let hasil: IExp;

		hasil = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			type: TY_EXP,
			refId: 0,
			typeExp: EXP_VALUE
		}

		return hasil;
	}

	// buatValue3(indukid: number): IExp {
	// 	let valueObj: IValue;

	// 	valueObj = value.buat(0);
	// 	return this.buatValue(indukid, valueObj);
	// }

	buatValue(indukId: number, valueObj: IValue): IExp {
		let hasil: IExp;

		hasil = this.buatValue2(indukId, valueObj.id);
		value.setIndukId(valueObj, hasil.id);

		return hasil;
	}

	private buatValue2(indukId: number, refId: number): IExp {
		let hasil: IExp;

		//validate
		value.get(refId);

		hasil = this.buat(indukId);
		hasil.refId = refId;
		hasil.typeExp = EXP_VALUE;

		this.daftar.push(hasil);

		this.validate(hasil);

		return hasil;
	}

	buatFungsiObj(indukid: number, dekFungsi: IDekFungsi): IExp {
		return this.buatFungsi(indukid, dekFungsi.id);
	}

	buatFungsi(indukId: number, dekFungsiId: number): IExp {
		let hasil: IExp;
		let panggilFungsiObj: IPanggilFungsi;

		panggilFungsiObj = panggilFungsi.buat(0, dekFungsiId);
		hasil = this.buat(indukId);

		hasil.refId = panggilFungsiObj.id;
		hasil.typeExp = EXP_REF_FUNGSI;

		this.daftar.push(hasil);

		this.validate(hasil);

		return hasil;
	}

	validate(obj: IExp): void {
		// console.group('validasi exp:');

		this.get(obj.id);
		if (obj.typeExp != EXP_BINOP) {
			this.getNama(obj);
		}

		// console.groupEnd();
	}

	get(id: number): IExp {
		let hasil: IExp;

		this.daftar.forEach((item: IExp) => {
			if (item.id == id) {
				hasil = item;
			}
		})

		if (!hasil) {
			throw Error('exp tidak ketemu, id: ' + id);
		}

		if (hasil.type != TY_EXP) {
			console.error(hasil);
			throw Error('tipe invalid, id: ' + id);
		}

		return hasil;
	}

	getFung(expObj: IExp): IPanggilFungsi {
		let hasil: IPanggilFungsi;

		if (expObj.typeExp != EXP_REF_FUNGSI) {
			throw Error('invalid exp');
		}

		hasil = panggilFungsi.get(expObj.refId);

		if (!hasil) {
			console.error('fung tidak ketemu, exp id: ' + expObj.id);
		}

		return hasil;
	}

	getValue(exp: IExp): IValue {
		if (exp.typeExp != EXP_VALUE) {
			throw Error('invalid exp');
		}

		return value.get(exp.refId);
	}

	getVar(exp: IExp): IVar {
		if (exp.typeExp != EXP_REF_VAR) {
			throw Error('invalid exp');
		}

		return Variable.get(exp.refId);
	}

	getNamaById(id: number): string {
		return this.getNama(this.get(id));
	}

	getNama(expObj: IExp): string {
		let hasil: string = '';

		// console.log('get nama:');
		// console.log('exp:');
		// console.log(expObj);

		if (expObj.typeExp == EXP_REF_VAR) {
			let varObj: IVar;

			varObj = this.getVar(expObj);
			hasil = varObj.nama;
		}
		else if (expObj.typeExp == EXP_VALUE) {
			let valueObj: IValue;

			// console.log('exp is value');
			valueObj = this.getValue(expObj);

			hasil = valueObj.nama;

		}
		else if (expObj.typeExp == EXP_REF_FUNGSI) {
			let fungObj: IPanggilFungsi;

			fungObj = this.getFung(expObj);
			hasil = panggilFungsi.nama(fungObj);
		}
		else {
			console.log("error, exp:");
			console.log(expObj);
			throw Error('exp type invalid: ' + expObj.typeExp);
		}

		return hasil;
	}

	//setter
	setIndukId(obj: IExp, id: number): void {
		obj.indukId = id;
	}

}
const exp: Exp = new Exp();