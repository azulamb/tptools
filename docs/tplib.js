((script) => {
    class TitanPocket {
        constructor() {
            this.isTP = !!navigator.userAgent.match(/Titan pocket/);
        }
        enableFullscreenViewport() {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=716,user-scalable=no';
            document.head.appendChild(meta);
            return this;
        }
        get isTitanPocket() { return this.isTP; }
    }
    window[script.dataset.name || 'TitanPocket'] = new TitanPocket();
})(document.currentScript);
