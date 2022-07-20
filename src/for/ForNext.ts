class ForNext {

    buat(indukId: number, varIsiObj: IVarIsi, expObj: IExp): IFor {
        let forObj: IFor;

        forObj = {
            id: Id.id,
            indukId: indukId,
            ket: '',
            nama: '',
            toRef: expObj.id,
            type: TY_STMT,
            stmtType: STMT_FOR,
            varRef: varIsiObj.id
        }

        exp.setIndukId(expObj, forObj.id);
        VarIsi.setIndukId(varIsiObj, forObj.id);

        //TODO: validate;

        return forObj;
    }
}