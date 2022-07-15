function init(): void {
	Path.view.attach(document.body);
	dataObj.load();

	let modul: IModul;
	modul = Modul.getAwal();

	if (!modul) {
		modul = Modul.buatModulObj('awal', 0);
		dataObj.simpan();
	}

	dataObj.initHalaman();
	dataObj.halModul.attach(document.body);
	dataObj.halModul.tampil(modul);
}

function testVariIsi(): void {
	let varisiObj: IVarIsi = VarIsi.buat(0);
	let varIsiView: VarisiViewItem = new VarisiViewItem(varisiObj);
	varIsiView.attach(document.body);
}

function testExpForm(): void {
	window.localStorage.clear();
	let expForm: ExpForm = new ExpForm();
	let expObj: IExp;

	expObj = exp.buat(0, true);
	expForm.tampil(document.body, expObj);
}

window.onload = () => {
	testVariIsi();
}