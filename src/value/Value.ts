class Value {
    private readonly daftar: IValue[] = [];

    hapus(id: number): void {
        id;
        //TODO: sementara hapus tidak diimplement
    }

    buat(indukId: number): IValue {
        let hasil: IValue;  //TODO:

        hasil = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            tipeValue: 'teks',
            type: TY_VALUE,
            value: '0'
        }

        this.daftar.push(hasil);

        return hasil;
    }

    get(id: number): IValue {
        let hasil: IValue;

        this.daftar.forEach((item: IValue) => {
            if (item.id == id) {
                hasil = item;
            }
        })

        if (!hasil) {
            throw Error('value tidak ketemu: ' + id);
        }

        return hasil;
    }
}
const value: Value = new Value();