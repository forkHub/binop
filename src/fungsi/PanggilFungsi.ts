class PanggilFungsi {

    nama(f: IPanggilFungsi): string {
        return DekFungsi.get(f.refId).nama;
    }

    paramNama(f: IPanggilFungsi, idx: number): string {
        let hasil: string;

        f.param.forEach((itemId: number, paramIdx: number) => {
            if (idx == paramIdx) {
                let expObj: IExp;

                expObj = Exp.get(itemId);
                hasil = Exp.getNama(expObj);
            }
        })

        return hasil;
    }

    ganti(f: IPanggilFungsi, refId: number): void {
        f.refId = refId;
        this.buildRef(f)
    }

    private buildRef(f: IPanggilFungsi): void {
        let fg: IDekFungsi

        // console.group('build ref:');

        fg = DekFungsi.get(f.refId);

        f.param = [];
        fg.paramAr.forEach((item: IParam) => {
            // let valueObj: IValue;
            let expObj: IExp;

            item;

            // valueObj = value.buat(0);
            expObj = Exp.buatValue(0);
            f.param.push(expObj.id);

            //validasi
            Exp.get(expObj.id);
        });

        // console.log('param:');
        // console.log(f.param);

        // console.log('id: ' + f.id);

        // console.groupEnd();
    }

    get(id: number): IPanggilFungsi {
        let hasil: IPanggilFungsi;

        hasil = dataObj.getById(id) as IPanggilFungsi;

        // dataObj.dataAr.forEach((item: IData) => {
        //     if (item.id == id) {
        //         hasil = item as IPanggilFungsi;
        //     }
        // })

        if (!hasil) {
            console.error('panggi fungsi tidak ketemu, id: ' + id);
        }

        if (hasil.type != TY_STMT) {
            console.log(hasil);
            throw Error('fungsi invalid, ty: ' + hasil.type);
        }

        if (hasil.stmtType != STMT_PANGGIL_FUNGSI) {
            console.log(hasil);
            throw Error('fungsi stmt type invalid,');
        }

        return hasil;
    }

    buat(indukId: number, fung: IDekFungsi): IPanggilFungsi {
        let hasil: IPanggilFungsi;

        hasil = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            param: [],
            refId: fung.id,
            stmtType: STMT_PANGGIL_FUNGSI,
            type: TY_STMT,
        }

        //build reference
        this.buildRef(hasil);

        dataObj.push(hasil);

        //validasi
        panggilFungsi.get(hasil.id);

        hasil.param.forEach((item: number) => {
            Exp.getNamaById(item);
        })

        return hasil;
    }
}

const panggilFungsi: PanggilFungsi = new PanggilFungsi();