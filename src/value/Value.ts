class Value {
	// private readonly daftar: IValue[] = [];

	hapus(id: number): void {
		id;
		//TODO: sementara hapus tidak diimplement
	}

	buat(indukId: number): IValue {
		let hasil: IValue;  //TODO:

		hasil = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			tipeValue: 'teks',
			type: TY_VALUE,
			value: '0'
		}

		dataObj.dataAr.push(hasil);

		return hasil;
	}

	get(id: number): IValue {
		let hasil: IValue;

		hasil = dataObj.getById(id) as IValue;

		if (!hasil) {
			throw Error('value tidak ketemu: ' + id);
		}

		return hasil;
	}
}
const value: Value = new Value();