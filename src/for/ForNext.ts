class ForNext {

    static buat(indukId: number): IFor {
        let forObj: IFor;

        forObj = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            toRef: 0,
            type: TY_STMT,
            stmtType: STMT_FOR,
            varRef: 0
        }

        let varIsi: IVarIsi = VarIsi.buatValue(forObj.id, Exp.buatValue(0))
        forObj.varRef = varIsi.id;

        let exp: IExp = Exp.buatValue(forObj.id);
        forObj.toRef = exp.id;

        Stmt.daftar.push(forObj);

        //todo:validate
        this.validate;

        return forObj;
    }

    static validate(obj: IFor): void {
        if (VarIsi.get(obj.varRef).indukId != obj.id) {
            throw Error('');
        };


        if (Exp.get(obj.toRef).indukId != obj.id) {
            throw Error('');
        };
    }

}