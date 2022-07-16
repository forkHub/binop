class Exp {
	private readonly daftar: IExp[] = [];

	buat(indukId: number, simpan: boolean): IExp {
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

		let valueObj: IValue;
		valueObj = value.buat(hasil.id);
		hasil.refId = valueObj.id;

		if (simpan) {
			this.daftar.push(hasil);
		}

		return hasil;
	}

	get(id: number): IExp {
		let hasil: IExp;

		this.daftar.forEach((item: IExp) => {
			if (item.id == id) {
				hasil = item;
			}
		})

		return hasil;
	}

	getValue(exp: IExp): IValue {
		return value.get(exp.refId);
	}

	getVar(exp: IExp): IVar {
		return Variable.getVar(exp.refId);
	}

}
const exp: Exp = new Exp();