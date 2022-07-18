interface IStmt extends IData {
	stmtType: string;
	// prevIdx: number;
}

interface IPanggilFungsi extends IStmt {
	refId: number;
	param: number[]
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
	refId: number,
}
