class Value {

	hapus(id: number): void {
		id;
		//TODO: sementara hapus tidak diimplement
	}

	buat(indukId: number): IValue {
		let hasil: IValue;  //TODO:

		console.log('buat value:');

		hasil = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			tipeValue: 'teks',
			type: TY_VALUE,
			value: '0'
		}

		dataObj.push(hasil);
		dataObj.simpan();

		this.validasi(hasil);

		return hasil;
	}

	get(id: number): IValue {
		let hasil: IValue;

		console.log('get value by id: ' + id);

		hasil = dataObj.getById(id) as IValue;

		if (hasil.type != TY_VALUE) {
			console.log('get by id, value error: ')
			console.log(hasil);
			throw Error('value invalid, id: ' + id);
		}

		if (!hasil) {
			throw Error('value tidak ketemu: ' + id);
		}

		return hasil;
	}

	validasi(obj: IValue): void {
		this.get(obj.id);
	}

}
const value: Value = new Value();