//var isi
function testVariIsi(): void {
	let varisiObj: IVarIsi;
	let varIsiView: VarisiViewItem;
	let valueObj: IValue;
	let expObj: IExp;

	valueObj = value.buat(0);
	expObj = exp.buatValue(0, valueObj);
	varisiObj = VarIsi.buatValue(0, expObj);

	varIsiView = new VarisiViewItem(varisiObj);

	buatContohVar();

	varIsiView.attach(document.body);
}

function testVarIsiBinop(): void {
	let varisiObj: IVarIsi;
	let varIsiView: VarisiBinopViewItem;

	varisiObj = VarIsi.buatBinop(0);
	varIsiView = new VarisiBinopViewItem(varisiObj);

	buatContohVar();

	varIsiView.attach(document.body);
}

function testVarIsiFungsi(): void {
	let varisiObj: IVarIsi;
	let varIsiView: VarIsiFungView;
	let paramAr: IParam[];
	let fung: IDekFungsi;

	paramAr = buatParam();

	buatContohVar();
	buatContohFungsi();

	fung = DekFungsi.buatParam('fungContoh', 0, paramAr);

	varisiObj = VarIsi.buatFungsi(0, fung.id);
	varIsiView = new VarIsiFungView(varisiObj);

	varIsiView.attach(document.body);
}

//exp
function testExpForm(): void {
	let expForm: ExpForm;
	let expObj: IExp;
	let valueObj: IValue;

	window.localStorage.clear();

	buatContohVar();

	valueObj = value.buat(0)
	expObj = exp.buatValue(0, valueObj);
	expForm = new ExpForm(expObj, () => { });

	expForm.attach(document.body);
}

function testExpEd(): void {
	let expObj: IExp;
	let expEd: ExpEd;
	let valueObj: IValue;

	window.localStorage.clear();

	buatContohVar();

	valueObj = value.buat(0);
	expObj = exp.buatValue(0, valueObj);
	expEd = new ExpEd(expObj);

	expEd.attach(document.body);
}

//binop
function testBinop(): void {
	let binopObj: IBinop;
	let binopEd: BinopEditorFragment;

	buatContohVar();

	binopObj = Binop.baru(0);

	binopEd = new BinopEditorFragment(binopObj);
	binopEd.attach(document.body);
}

//fungsi
function testPanggilFungsi(): void {
	let fEd: PanggilFungsiEd;
	let f: IPanggilFungsi;
	let fd: IDekFungsi;
	let paramAr: IParam[];

	buatContohFungsi();
	buatContohVar();

	paramAr = buatParam();
	fd = DekFungsi.buatParam('fungsi1', 0, paramAr);
	f = panggilFungsi.buat(0, fd.id);

	// console.log('panggil fungsi:');
	// console.log(f);

	fEd = new PanggilFungsiEd(f);
	fEd.attach(document.body);
}

function testPilihFungsi(): void {
	buatContohFungsi();

	pilihFungsi.finish = () => { }
	pilihFungsi.tampil(DekFungsi.daftar);
}

//data gen
function buatContohFungsi(): void {
	let paramAr: IParam[];

	paramAr = buatParam();

	DekFungsi.buatParam('fungsi1', 0, paramAr);
}

function buatContohVar(): void {
	Variable.buatVarObj('test1', 0);
	Variable.buatVarObj('test2', 0);
	Variable.buatVarObj('test3', 0);
}

function buatParam(): IParam[] {
	let paramAr: IParam[];

	paramAr = [
		param.buat(0, 'param1'),
		// param.buat(0, 'param2'),
		// param.buat(0, 'param3'),
		// param.buat(0, 'param4'),
		// param.buat(0, 'param5'),
	]

	return paramAr;
}

interface IObj {
	_x: number,
	_y: number,
	x: number,
	y: number,
	f: () => void
}

function testObj(): void {
	let obj: IObj = {
		_x: 0,
		_y: 0,

		set x(v: number) {
			this._x = v;
		},

		set y(v: number) {
			this._y = v;
		},

		f: () => {
			console.log("this.x");
		}
	}

	obj.x = 5;
	obj._x = 8;

	console.log(obj);
	console.log(JSON.stringify(obj));
}




//test var isi panggil fungsi

//test for
//test if
//test else if
//test else