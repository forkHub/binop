class VarIsi {

	static getValue(obj: IVarIsi): IValue {
		let expObj: IExp;
		let hasil: IValue;

		expObj = VarIsi.getExp(obj);
		hasil = exp.getValue(expObj);

		return hasil;
	}

	static getExp(obj: IVarIsi): IExp {
		let hasil: IExp;
		hasil = exp.get(obj.refId);
		return hasil;
	}

	static muat(muatObj: ISimpan): void {
		muatObj.stmt.forEach((item: IStmt) => {
			if (item.stmtType == STMT_VAR_ISI) {
				let varIsi: IVarIsi = item as IVarIsi;
				let obj: IVarIsi = {
					id: varIsi.id,
					indukId: varIsi.indukId,
					nama: varIsi.nama,
					// prevIdx: varIsi.prevIdx,
					varId: varIsi.varId,
					stmtType: varIsi.stmtType,
					type: varIsi.type,
					ket: varIsi.ket,
					// value: varIsi.value,
					// exp: varIsi.exp,
					refId: varIsi.refId
				};
				Stmt.daftar.push(obj);
			}

		})
	}

	static buatValue(indukId: number): IVarIsi {
		let hasil: IVarIsi;
		let valueObj: IValue;
		let expObj: IExp;

		hasil = this.buat(indukId);
		expObj = this.getExp(hasil);
		valueObj = value.buat(expObj.id);
		expObj.refId = valueObj.id;

		return hasil;
	}

	static buatBinop(indukId: number): IVarIsi {
		let hasil: IVarIsi;
		let binopObj: IBinop;
		let id: number;

		hasil = this.buat(indukId);
		id = Id.id;
		binopObj = Binop.baru(id, hasil.id)
		hasil.refId = binopObj.id;

		return hasil;
	}

	private static buat(indukId: number): IVarIsi {
		let obj: IVarIsi;
		let expObj: IExp;

		//buat obj
		obj = {
			id: Id.id,
			indukId: indukId,
			nama: '',
			// prevIdx: 0,
			varId: -1,
			stmtType: STMT_VAR_ISI,
			type: TY_STMT,
			ket: '',
			refId: 0,
		}

		expObj = exp.buat(obj.id, true);
		obj.refId = expObj.id;

		Stmt.daftar.push(obj);
		dataObj.simpan();

		this.validasi(obj);

		return obj;
	}

	static terj(obj: IVarIsi): string {
		let hasil: string = Variable.nama(obj.varId) + " = ";

		// hasil += obj.value;

		return hasil;
	}

	static validasi(obj: IVarIsi): void {
		if (obj.indukId > 0) {
			//masih ambigue tidak bisa dideteksi tipe dari induk apakah fungsi ataukah modul
		}

		if (obj.varId > 0) {
			Variable.getVar(obj.varId);
		}

	}

}