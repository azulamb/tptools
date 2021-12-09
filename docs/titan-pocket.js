((script, init) => {
    if (document.readyState !== 'loading') {
        return init(script);
    }
    document.addEventListener('DOMContentLoaded', () => { init(script); });
})(document.currentScript, (script) => {
    ((component, tagname = 'titan-pocket') => {
        if (customElements.get(tagname)) {
            return;
        }
        customElements.define(tagname, component);
    })(class extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            const style = document.createElement('style');
            style.innerHTML =
                [
                    ':host { --led: transparent; display: block; width: 220px; --contents-width: calc( 100% * 10 / 11 ); }',
                    ':host > div { width: 100%; position: relative; }',
                    'svg { display: block; width: 100%; height: 100%; position: relative; z-index: 10; pointer-events: none; }',
                    ':host > div > div { width: 100%; height: 100%; position: absolute; top: 0; }',
                    ':host > div > div::before { display: block; content: ""; position: absolute; width: 93%; height: 86%; top: 0; bottom: 0; left: 0; right: 0; margin: auto; background: var(--back,#000); }',
                    'button { cursor: pointer; position: absolute; width: 5%; height: 8%; border: none; }',
                    'button.volup { right: 96%; bottom: calc( 100% * 280 / 395); background: var( --volup, #a9a8a8 ); }',
                    'button.voldown { right: 96%; top: calc( 100% * 125 / 395); background: var( --voldown, #a9a8a8 ); }',
                    'button.ptt { left: 96%; bottom: calc( 100% * 280 / 395); background: var( --ptt, #ff4c44 ); }',
                    'button.power { left: 96%; top: calc( 100% * 125 / 395); background: var( --power, #a9a8a8 ); }',
                    '::slotted( tp-screen ), ::slotted( tp-keyboard ) { width: var( --contents-width ); position: absolute; left: 0; right: 0; margin: auto;}',
                    '::slotted( tp-screen ) {bottom: calc( 100% * 130 / 395 ); }',
                    '::slotted( tp-keyboard ) { top: calc( 100% * 265 / 395 ); }',
                ].join('');
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttributeNS(null, 'width', '220px');
            svg.setAttributeNS(null, 'height', '395px');
            svg.setAttributeNS(null, 'viewBox', '0 0 220 395');
            [
                { fill: 'var(--frame,#808080)', d: 'm85 0-15 5-20 5-5-5-25 10-15 10-5 20 5 145v25l-5 60v85l10 15 15 15 5-5 80 10 80-10 5 5 15-15 10-15v-85l-5-60v-25l5-145-5-20-15-10-25-10-5 5-20-5-15-5zm-75 40h200v311.67l-13.334 13.334h-173.33l-13.334-13.334z' },
                { fill: 'var(--screenframe,#000)', d: 'm10 45v-5l50-20 5 5 45 10 45-10 5-5 50 20v5z' },
                { fill: 'var(--topframe0,#4d4d4d)', d: 'm0 45h10v-5l-5-15z' },
                { fill: 'var(--topframe1,#666)', d: 'm5 25 5 15 50-20-15-15-25 10z' },
                { fill: 'var(--topframe2,#666)', d: 'm70 5-20 5 10 10 15-10z' },
                { fill: 'var(--topframe3,#666)', d: 'm75 10-15 10 5 5 45 10 45-10 5-5-15-10z' },
                { fill: 'var(--topframe4,#4d4d4d)', d: 'm70 5 10 10h60l10-10-15-5h-50z' },
                { fill: 'var(--speker,#ccc)', d: 'm110 25-25-10h50z' },
                { fill: 'var(--topframe5,#333)', d: 'm150 5 20 5-10 10-15-10z' },
                { fill: 'var(--topframe6,#333)', d: 'm175 5-15 15 50 20 5-15-15-10z' },
                { fill: 'var(--topframe7,#4d4d4d)', d: 'm210 40v5h10l-5-20z' },
                { fill: 'var(--bottomframe0,#4d4d4d)', d: 'm10 345h-10v15l10-5z' },
                { fill: 'var(--bottomframe1,#333)', d: 'm10 355-10 5 10 15 15 15 10-10z' },
                { fill: 'var(--bottomframe2,#333)', d: 'm30 385 15-15 65 10v15z' },
                { fill: 'var(--bottomframe3,#4d4d4d)', d: 'm110 380v15l80-10-15-15z' },
                { fill: 'var(--bottomframe4,#999)', d: 'm220 360-10-5-25 25 10 10 15-15z' },
                { fill: 'var(--bottomframe5,#4d4d4d)', d: 'm210 345v10l10 5v-15z' },
            ].forEach((p) => {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttributeNS(null, 'd', p.d);
                path.style.fill = p.fill;
                svg.appendChild(path);
            });
            this.led = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            this.led.setAttributeNS(null, 'cx', '70');
            this.led.setAttributeNS(null, 'cy', '37.5');
            this.led.setAttributeNS(null, 'r', '2.5');
            this.led.style.fill = 'var( --led )';
            svg.appendChild(this.led);
            const contents = document.createElement('div');
            contents.appendChild(document.createElement('slot'));
            const body = document.createElement('div');
            body.appendChild(svg);
            body.appendChild(contents);
            ['volup', 'voldown', 'ptt', 'power'].forEach((name) => {
                const button = document.createElement('button');
                button.classList.add(name);
                button.addEventListener('click', () => {
                    this.dispatchEvent(new CustomEvent('push', { detail: { button: name } }));
                });
                body.appendChild(button);
            });
            shadow.appendChild(style);
            shadow.appendChild(body);
        }
    }, script.dataset.tagname);
});
