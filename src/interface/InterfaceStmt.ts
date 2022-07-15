interface IStmt extends IData {
	stmtType: string;
	prevIdx: number;
}

interface IPanggilFungsi extends IStmt {
	refFungsiIdx: number;
	param: IExp[]
}

interface IDekFungsi extends IData {
	paramAr: IParam[],
	varAr: number[],
	stmtAr: number[],
}

interface IParam extends IData {

}


interface IVarIsi extends IStmt {
	varId: number,
	value: string,
	exp: IExp
}

//TODO:
interface IVarIsiBinop extends IStmt {
	refVarId: number,
	refOpr1Id: number,
	refOpr2Id: number,
	refOpId: number
}

//TODO:
interface IVarIsiPanggilFungsi extends IStmt {
	refVarId: number,
	refFungId: number,
}
