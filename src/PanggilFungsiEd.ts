class PanggilFungsiEd extends ha.comp.BaseComponent {
    constructor() {
        super();
        this._template = `
            <div class='panggil fungsi'>
                <div class='nama'></div>
                <div class=''>(</div>
                <div class='param'></div>
                <div class=''>)</div>
            </div>
        `;
        this.build();
    }

}