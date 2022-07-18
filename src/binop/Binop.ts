class Binop {
	private static readonly daftar: IBinop[] = [];

	private static buatDasar(indukId: number): IBinop {
		let obj: IBinop = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			type: TY_STMT,
			exp1Id: 0,
			exp2Id: 0,
			opr: '*'
		}

		this.daftar.push(obj);
		return obj;
	}

	static baru(indukId: number): IBinop {
		let hasil: IBinop;
		let valueObj: IValue;

		valueObj = value.buat(0);

		hasil = this.buatDasar(indukId);
		this.setExp(hasil, exp.buatValue(hasil.id, valueObj.id).id, exp.buatValue(hasil.id, valueObj.id).id);

		return hasil;
	}

	private static setExp(binop: IBinop, id: number, id2: number): void {
		binop.exp1Id = id;
		binop.exp2Id = id2;
	}

	static get(id: number): IBinop {
		let hasil: IBinop;

		this.daftar.forEach((item: IBinop) => {
			if (item.id == id) {
				hasil = item;
			}
		})

		if (!hasil) {
			console.error('binop gak ketemu: ' + id);
		}

		return hasil;
	}

	//validasi

	//todo hapus, read, update
}