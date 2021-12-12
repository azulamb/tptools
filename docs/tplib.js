((script) => {
    class TitanPocket {
        constructor() {
            this.isTP = !!navigator.userAgent.match(/Titan Pocket/);
        }
        get isTitanPocket() { return this.isTP; }
    }
    window[script.dataset.name || 'TitanPocket'] = new TitanPocket();
})(document.currentScript);
