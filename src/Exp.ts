class Exp {
	private readonly daftar: IExp[] = [];

	buat(indukId: number, simpan: boolean): IExp {
		let hasil: IExp;

		hasil = {
			id: Id.id,
			fungId: 0,
			indukId: indukId,
			ket: '',
			nama: '',
			type: TY_EXP,
			value: '',
			varId: 0,
		}

		if (simpan) {
			this.daftar.push(hasil);
		}

		return hasil;
	}

}
const exp: Exp = new Exp();