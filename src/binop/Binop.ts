class Binop {
	private static readonly daftar: IBinop[] = [];

	private static baru1(id: number, indukId: number): IBinop {
		let obj: IBinop = {
			id: id,
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

	static baru(id: number, indukId: number): IBinop {
		let hasil: IBinop;

		hasil = this.baru1(id, indukId);
		this.setExp(hasil, exp.buat(hasil.id, true).id, exp.buat(hasil.id, true).id);

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

	//todo hapus, read, update
}