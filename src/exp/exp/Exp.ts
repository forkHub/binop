class Exp {
	// private static readonly daftar: IExp[] = [];

	static buatDef(indukId: number): IExp {
		let hasil: IExp;

		hasil = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			type: TY_EXP,
			refId: 0,
			typeExp: ''
		}

		// this.daftar.push(hasil);
		dataObj.push(hasil);

		return hasil;
	}

	//TODO: dihapus
	static buat(indukId: number): IExp {
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

	//TODO: dihapus
	static buatValue(indukId: number): IExp {
		let hasil: IExp;
		let valueObj: IValue;

		valueObj = Value.buat(0);
		hasil = this.buat(indukId);
		hasil.refId = valueObj.id;
		Value.setIndukId(valueObj, hasil.id);

		hasil.typeExp = EXP_VALUE;

		// this.daftar.push(hasil);
		dataObj.push(hasil);

		this.validate(hasil);

		return hasil;
	}

	// private static buatValue2(indukId: number, refId: number): IExp {
	// 	let hasil: IExp;

	// 	//validate
	// 	value.get(refId);

	// 	hasil = this.buat(indukId);
	// 	hasil.refId = refId;
	// 	hasil.typeExp = EXP_VALUE;

	// 	this.daftar.push(hasil);

	// 	this.validate(hasil);

	// 	return hasil;
	// }

	//TODO: dihapus
	static buatFungsiObj(indukid: number, dekFungsi: IDekFungsi): IExp {
		return this.buatFungsi(indukid, dekFungsi);
	}

	//TODO: dihapus
	static buatFungsi(indukId: number, fung: IDekFungsi): IExp {
		let hasil: IExp;
		let panggilFungsiObj: IPanggilFungsi;

		panggilFungsiObj = PanggilFungsi.buat(0, fung);
		hasil = this.buat(indukId);

		hasil.refId = panggilFungsiObj.id;
		hasil.typeExp = EXP_REF_FUNGSI;

		// this.daftar.push(hasil);
		dataObj.push(hasil);

		this.validate(hasil);

		return hasil;
	}

	static validate(obj: IExp): void {
		// console.group('validasi exp:');

		this.get(obj.id);
		if (obj.typeExp != EXP_BINOP) {
			this.getNama(obj);
		}

		// console.groupEnd();
	}

	static get(id: number): IExp {
		let hasil: IExp;

		hasil = dataObj.getById(id) as IExp;

		// this.daftar.forEach((item: IExp) => {
		// 	if (item.id == id) {
		// 		hasil = item;
		// 	}
		// })

		if (!hasil) {
			throw Error('exp tidak ketemu, id: ' + id);
		}

		if (hasil.type != TY_EXP) {
			console.error(hasil);
			throw Error('tipe invalid, id: ' + id);
		}

		return hasil;
	}

	static getFung(expObj: IExp): IPanggilFungsi {
		let hasil: IPanggilFungsi;

		if (expObj.typeExp != EXP_REF_FUNGSI) {
			throw Error('invalid exp');
		}

		hasil = PanggilFungsi.get(expObj.refId);

		if (!hasil) {
			console.error('fung tidak ketemu, exp id: ' + expObj.id);
		}

		return hasil;
	}

	static getValue(exp: IExp): IValue {
		if (exp.typeExp != EXP_VALUE) {
			throw Error('invalid exp');
		}

		return Value.get(exp.refId);
	}

	static getVar(exp: IExp): IVar {
		if (exp.typeExp != EXP_REF_VAR) {
			throw Error('invalid exp');
		}

		return Variable.get(exp.refId);
	}

	static getNamaById(id: number): string {
		return this.getNama(this.get(id));
	}

	static getNama(expObj: IExp): string {
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
			hasil = PanggilFungsi.nama(fungObj);
		}
		else if (expObj.typeExp == '') {
			//TODO: dihapus
		}
		else {
			console.log("error, exp:");
			console.log(expObj);
			throw Error('exp type invalid: ' + expObj.typeExp);
		}

		return hasil;
	}

	//setter
	static setIndukId(obj: IExp, id: number): void {
		obj.indukId = id;
	}
}
