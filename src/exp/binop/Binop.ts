class Binop {
	private static readonly daftar: IBinop[] = [];	//TODO: di merge ke dataobj

	static buatDef(indukId: number): IBinop {

		let obj: IBinop = {
			id: Id.id,
			indukId: indukId,
			ket: '',
			nama: '',
			type: TY_STMT,
			exp1Id: Exp.buatDef(0).id,
			exp2Id: Exp.buatDef(0).id,
			opr: '*'
		}

		//TODO: validate
		this.daftar.push(obj);
		return obj;
	}

	static hapus(id: number): void {
		for (let i: number = 0; i < this.daftar.length; i++) {
			if (this.daftar[i].id == id) {
				this.daftar.splice(i, 1);
				return;
			}
		}

		throw Error('hapus binop tidak ketemu, id ' + id);
	}

	static baru(indukId: number): IBinop {
		let hasil: IBinop;

		hasil = this.buatDef(indukId);
		this.setExp(hasil, Exp.buatValue(hasil.id).id, Exp.buatValue(hasil.id).id);

		return hasil;
	}

	private static setExp(binop: IBinop, id: number, id2: number): void {
		binop.exp1Id = id;
		binop.exp2Id = id2;
	}

	static cariId(id: number): IBinop {
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
}