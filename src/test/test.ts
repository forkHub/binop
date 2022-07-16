
function testVariIsi(): void {
    let varisiObj: IVarIsi;
    let varIsiView: VarisiViewItem;

    varisiObj = VarIsi.buatValue(0);
    varIsiView = new VarisiViewItem(varisiObj);

    Variable.buatVarObj('test1', 0);
    Variable.buatVarObj('test2', 0);
    Variable.buatVarObj('test3', 0);

    varIsiView.attach(document.body);
}

function testVarIsiBinop(): void {

}

function testExpForm(): void {
    let expForm: ExpForm;
    let expObj: IExp;

    window.localStorage.clear();

    Variable.buatVarObj('test', 0);

    expObj = exp.buat(0, true);
    expForm = new ExpForm(expObj, () => { });

    //validate
    //validate exp reference ada
    //validate exp tipenya value atau variable

    expForm.attach(document.body);
}

function testExpEd(): void {
    let expObj: IExp;
    let expEd: ExpEd;

    window.localStorage.clear();

    Variable.buatVarObj('test0', 0);
    Variable.buatVarObj('test1', 0);
    Variable.buatVarObj('test2', 0);

    expObj = exp.buat(0, true);
    expEd = new ExpEd(expObj);

    expEd.attach(document.body);
}

function testBinop(): void {
    let binopObj: IBinop;
    let binopEd: BinopEditorFragment;

    Variable.buatVarObj('test0', 0);
    Variable.buatVarObj('test1', 0);
    Variable.buatVarObj('test2', 0);

    binopObj = Binop.baru(0, 0);

    binopEd = new BinopEditorFragment(binopObj);
    binopEd.attach(document.body);
}

function testFungEd(): void {
    let fEd: PanggilFungsiEd;
    let f: IPanggilFungsi;
    let fd: IDekFungsi;
    let paramAr: IParam[];

    paramAr = [
        param.buat(0, 'param1'),
        param.buat(0, 'param2'),
        param.buat(0, 'param3'),
        param.buat(0, 'param4'),
        param.buat(0, 'param5'),
    ]

    Variable.buatVarObj('test 1', 0);
    Variable.buatVarObj('test 2', 0);
    Variable.buatVarObj('test 3', 0);
    Variable.buatVarObj('test 4', 0);
    Variable.buatVarObj('test 5', 0);

    fd = DekFungsi.buatParam('fungsi1', 0, paramAr);
    f = panggilFungsi.buat(0, fd.id);

    DekFungsi.buatParam('fungsi 1', 0, paramAr);
    DekFungsi.buatParam('fungsi 2', 0, paramAr);
    DekFungsi.buatParam('fungsi 3', 0, paramAr);
    DekFungsi.buatParam('fungsi 4', 0, paramAr);
    DekFungsi.buatParam('fungsi 5', 0, paramAr);

    fEd = new PanggilFungsiEd(f);
    fEd.attach(document.body);
}

function testPilihVariable(): void {
    let paramAr: IParam[] = [
        param.buat(0, 'p1'),
        param.buat(0, 'p2'),
        param.buat(0, 'p3'),
        param.buat(0, 'p4'),
    ];

    DekFungsi.buatParam('fungsi 1', 0, paramAr);
    DekFungsi.buatParam('fungsi 2', 0, paramAr);
    DekFungsi.buatParam('fungsi 3', 0, paramAr);
    DekFungsi.buatParam('fungsi 4', 0, paramAr);
    DekFungsi.buatParam('fungsi 5', 0, paramAr);

    pilihFungsi.finish = () => {

    }
    pilihFungsi.tampil(DekFungsi.daftar);
}

//test var isi binop
//test var isi panggil fungsi
//test for
//test if
//test else if
//test else