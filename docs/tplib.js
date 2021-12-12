((script) => {
    class TitanPocket {
        constructor() {
            this.isTP = !!navigator.userAgent.match(/Titan pocket/);
        }
        get isTitanPocket() { return this.isTP; }
    }
    window[script.dataset.name || 'TitanPocket'] = new TitanPocket();
})(document.currentScript);
