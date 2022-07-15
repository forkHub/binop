interface IModul extends IData {
	varAr: number[],
	fungAr: number[],
	modulAr: number[]
}

interface IVar extends IData {
	value: string;
}

interface IExp extends IData {
	value: string,
	varId: number,
	fungId: number,
}

interface IBinop extends IData {
	exp1Id: number,
	exp2Id: number,
	opr: string
}

//TODO: dihapus
interface IArg extends IData {
	refParamId: number,
	value: string,	//berisi value atau id referensi
	tipeArg: string //
}

//TODO: dihapus
interface IValue extends IData {
	tipeValue: "teks" | "angka" | "ar_angka" | "ar_teks", //ar pakai id
	value: string
}