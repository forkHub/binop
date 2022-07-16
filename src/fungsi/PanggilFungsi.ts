class PanggilFungsi {
    readonly daftar: IPanggilFungsi[] = [];

    nama(f: IPanggilFungsi): string {
        return DekFungsi.get(f.refId).nama;
    }

    ganti(f: IPanggilFungsi, refId: number): void {
        f.refId = refId;
        this.buildRef(f)
    }

    private buildRef(f: IPanggilFungsi): void {
        let fg: IDekFungsi = DekFungsi.get(f.refId);

        f.param = [];
        fg.paramAr.forEach((item: IParam) => {
            item;
            f.param.push(exp.buat(f.id, true));
        })
    }

    buat(indukId: number, refId: number): IPanggilFungsi {
        let hasil: IPanggilFungsi;

        hasil = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            param: [],
            refId: refId,
            stmtType: STMT_PANGGIL_FUNGSI,
            type: TY_PANGGIL_FUNGSI,
        }

        //build reference
        this.buildRef(hasil);

        return hasil;
    }
}
const panggilFungsi: PanggilFungsi = new PanggilFungsi();