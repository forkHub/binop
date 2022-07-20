class VarIsi {

	static getValue(obj: IVarIsi): IValue {
		let expObj: IExp;
		let hasil: IValue;

		expObj = VarIsi.getExp(obj);
		hasil = exp.getValue(expObj);

		return hasil;
	}

	static getFung(obj: IVarIsi): IPanggilFungsi {
		let expObj: IExp;
		let hasil: IPanggilFungsi;

		expObj = this.getExp(obj);
		hasil = exp.getFung(expObj);

		if (!hasil) {
			console.error('fung tidak ketemu, var isi id: ' + obj.id);
		}

		return hasil;
	}

	static getExp(obj: IVarIsi): IExp {
		let hasil: IExp;

		hasil = exp.get(obj.refId);

		if (!hasil) {
			console.error('exp tidak ketemu:, var isi id: ' + obj.id);
		}

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

	static buatFungsi(indukId: number, fungId: number): IVarIsi {
		let hasil: IVarIsi;
		// let expObj: IExp;
		// let panggilFung: IPanggilFungsi;

		hasil = this.buatDasar(indukId);
		hasil.refId = exp.buatFungsi(hasil.id, fungId).id;

		// expObj = this.getExp(hasil);
		// panggilFung = panggilFungsi.buat(hasil.id, refExpId);
		// expObj.refId = panggilFung.id;
		// expObj.typeExp = EXP_REF_FUNGSI;

		console.group('buat vari isi function');
		console.log(hasil);
		// console.log(expObj);
		// console.log(panggilFung);
		// console.log(DekFungsi.get(panggilFung.refId));
		console.groupEnd()

		this.simpanObj(hasil);

		return hasil;
	}

	static buatValue2(indukId: number): IVarIsi {
		let expObj: IExp;
		let valueObj: IValue;

		valueObj = value.buat(0);
		expObj = exp.buatValue(indukId, valueObj);
		value.setIndukId(valueObj, expObj.id);

		// return 
		return null;
	}

	static buatValue(indukId: number, expValue: IExp): IVarIsi {
		let hasil: IVarIsi;
		// let expObj: IExp;

		//validate
		exp.getValue(expValue);

		hasil = this.buatDasar(indukId);
		hasil.refId = expValue.id;

		this.simpanObj(hasil);

		//validate
		this.validasi(hasil);

		return hasil;
	}

	static buatBinop(indukId: number): IVarIsi {
		let hasil: IVarIsi;
		let binopObj: IBinop;

		hasil = this.buatDasar(indukId);
		binopObj = Binop.baru(hasil.id)
		hasil.refId = binopObj.id;

		this.simpanObj(hasil);

		return hasil;
	}

	private static buatDasar(indukId: number): IVarIsi {
		let obj: IVarIsi;
		// let expObj: IExp;
		// let valueObj: IValue;

		//buat obj
		obj = {
			id: Id.id,
			indukId: indukId,
			nama: '',
			varId: -1,
			stmtType: STMT_VAR_ISI,
			type: TY_STMT,
			ket: '',
			refId: 0,
		}

		// valueObj = value.buat(0);
		// expObj = exp.buatValue(obj.id, valueObj.id);
		// obj.refId = expObj.id;

		return obj;
	}

	private static simpanObj(obj: IVarIsi): void {
		Stmt.daftar.push(obj);
		dataObj.simpan();

		this.validasi(obj);
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
			Variable.get(obj.varId);
		}


		//self
		Stmt.get(obj.id); //TODO: check
	}

	//setter
	static setIndukId(obj: IVarIsi, id: number): void {
		obj.indukId = id;
	}

}