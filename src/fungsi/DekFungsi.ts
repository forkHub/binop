class DekFungsi {
    static readonly daftar: IDekFungsi[] = [];

    static buatParam(nama: string, indukId: number, param: IParam[]): IDekFungsi {
        let hasil: IDekFungsi;

        hasil = this.buat(nama, indukId);

        param.forEach((item: IParam) => {
            hasil.paramAr.push(item);
        })

        return hasil;
    }

    static buat(nama: string, indukId: number): IDekFungsi {
        let hasil: IDekFungsi;

        hasil = {
            id: Id.id,
            indukId: indukId,
            nama: nama,
            paramAr: [],
            type: TY_DEK_FUNGSI,
            stmtAr: [],
            varAr: [],
            ket: ''
        }

        this.daftar.push(hasil);
        dataObj.simpan();

        this.validasi(hasil);

        return hasil;
    }

    static get(id: number): IDekFungsi {
        for (let i: number = 0; i < this.daftar.length; i++) {
            let item: IDekFungsi = this.daftar[i];
            if (item.id == id) {
                if (item.type != TY_DEK_FUNGSI) {
                    throw Error('invalid dek fungsi');
                }
                return item;
            }
        }

        throw Error('');
    }

    static terj(item: IDekFungsi): string {
        let hasil: string = '';

        //dek
        hasil += 'function ' + item.nama;
        hasil += "(";

        //param
        //TODO:

        hasil += ") ";
        hasil += "{\n";

        //var
        item.varAr.forEach((id: number) => {
            hasil += Variable.terj(Variable.get(id)) + "\n";
        })

        //stmt
        // item.
        item.stmtAr.forEach((id: number) => {
            let stmt: IStmt;

            stmt = Stmt.get(id);

            if (stmt.stmtType == STMT_VAR_ISI) {
                hasil += VarIsi.terj(stmt as IVarIsi);
                hasil += "\n"
            }
            else {
                throw Error();
            }
        })


        hasil += "}\n";

        return hasil;
    }

    static validasi(item: IDekFungsi): void {
        //validasi variable
        let varAr: IVar[] = Variable.getByIndukId(item.id);

        //check jumlah sama
        if (varAr.length != item.varAr.length) {
            console.log(varAr);
            console.log(item.varAr);
            throw new Error('array tidak sama');
        }

        this.get(item.id);
    }

}