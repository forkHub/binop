class VarRef {
    static buat(indukId: number): IVarRef {
        let hasil: IVarRef;

        hasil = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            refId: 0,
            type: TY_VAR_REF
        }

        dataObj.push(hasil);

        return hasil;
    }
}