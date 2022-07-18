class Id {
    private static _base: number = 0;

    static get id(): number {
        if (this._base <= 0) {
            this._base = 10;
            console.log('reset');
        }

        this._base = this._base + 2;

        console.log('get id: ' + this._base);

        return this._base;
    }
}