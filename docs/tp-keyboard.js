((script, init) => {
    if (document.readyState !== 'loading') {
        return init(script);
    }
    document.addEventListener('DOMContentLoaded', () => { init(script); });
})(document.currentScript, (script) => {
    const buttons = [
        { name: 'shift', back: 'm0 2h18l2 11v2h-20z', top: 'm0 0h20l-2 2h-18z', side: 'm20 0-2 2 2 11z', front: 'm10 2.293-5.207 5.207h2.707v3h5v-3h2.707zm0 1.4141 2.793 2.793h-1.293v3h-3v-3h-1.293zm-2.5 7.793v1h5v-1z' },
        { name: 'symbol', back: 'm20 2h18l2 11v2h-20z', top: 'm20 0h20l-2 2h-18z', side: 'm40 0-2 2 2 11z', front: { main: 'sym', mx: 30, my: 10 } },
        { name: 'back', back: 'm40 2h18l2 11v2h-20z', top: 'm40 0h20l-2 2h-18z', side: 'm60 0-2 2 2 11z', front: 'm52.5 4.1914-7.6172 3.8086 7.6172 3.8086zm-1 1.6172v4.3828l-4.3828-2.1914z' },
        { name: 'finger', back: 'm61 1h28v13h-28z', top: 'm60 0h30l-1 1h-28v13l-1 1z', side: 'm90 0-1 1v13h-28l-1 1h30z', front: '' },
        { name: 'menu', back: 'm92 2h18v13h-20v-2z', top: 'm90 0h20v2h-18z', side: 'm92 2-2-2v13z', front: 'm96.5 4.5v7h7v-7zm1 1h5v5h-5z' },
        { name: 'fn', back: 'm112 2h18v13h-20v-2z', top: 'm110 0h20v2h-18z', side: 'm112 2-2-2v13z', front: { main: 'fn', mx: 120, my: 11 } },
        { name: 'alt', back: 'm132 2h18v13h-20v-2z', top: 'm130 0h20v2h-18z', side: 'm132 2-2-2v13z', front: { main: 'alt', mx: 140, my: 11 } },
        { name: 'q', back: 'm0 17h13l2 16v2h-15z', top: 'm0 15h15l-2 2h-13z', side: 'm15 15-2 2 2 16z', front: { main: 'Q', mx: 8, my: 32, sub: '0', sx: 3, sy: 22 } },
        { name: 'w', back: 'm15 17h13l2 16v2h-15z', top: 'm15 15h15l-2 2h-13z', side: 'm30 15-2 2 2 16z', front: { main: 'W', mx: 23, my: 32, sub: '1', sx: 18, sy: 22 } },
        { name: 'e', back: 'm30 17h13l2 16v2h-15z', top: 'm30 15h15l-2 2h-13z', side: 'm45 15-2 2 2 16z', front: { main: 'E', mx: 38, my: 32, sub: '2', sx: 33, sy: 22 } },
        { name: 'r', back: 'm45 17h13l2 16v2h-15z', top: 'm45 15h15l-2 2h-13z', side: 'm60 15-2 2 2 16z', front: { main: 'R', mx: 53, my: 32, sub: '3', sx: 48, sy: 22 } },
        { name: 't', back: 'm60 17h13l2 16v2h-15z', top: 'm60 15h15l-2 2h-13z', side: 'm75 15-2 2 2 16z', front: { main: 'T', mx: 68, my: 32, sub: '(', sx: 63, sy: 22 } },
        { name: 'y', back: 'm77 17 13-2v20h-15v-2z', top: 'm75 15h15v2h-13z', side: 'm77 17-2-2v18z', front: { main: 'Y', mx: 82, my: 32, sub: ')', sx: 87, sy: 22 } },
        { name: 'u', back: 'm92 17h13v18h-15v-2z', top: 'm90 15h15v2h-13z', side: 'm92 17-2-2v18z', front: { main: 'U', mx: 97, my: 32, sub: '-', sx: 102, sy: 22 } },
        { name: 'i', back: 'm107 17h13v18h-15v-2z', top: 'm105 15h15v2h-13z', side: 'm107 17-2-2v18z', front: { main: 'I', mx: 112, my: 32, sub: '_', sx: 117, sy: 22 } },
        { name: 'o', back: 'm122 17h13v18h-15v-2z', top: 'm120 15h15v2h-13z', side: 'm122 17-2-2v18z', front: { main: 'O', mx: 127, my: 32, sub: '/', sx: 132, sy: 22 } },
        { name: 'p', back: 'm137 17h13v18h-15v-2z', top: 'm135 15h15v2h-13z', side: 'm137 17-2-2v18z', front: { main: 'P', mx: 142, my: 32, sub: ':', sx: 147, sy: 22 } },
        { name: 'a', back: 'm0 37h13l2 16v2h-15z', top: 'm0 35h15l-2 2h-13z', side: 'm15 35-2 2 2 16z', front: { main: 'A', mx: 8, my: 52, sub: '@', sx: 3, sy: 42 } },
        { name: 's', back: 'm15 37h13l2 16v2h-15z', top: 'm15 35h15l-2 2h-13z', side: 'm30 35-2 2 2 16z', front: { main: 'S', mx: 23, my: 52, sub: '4', sx: 18, sy: 42 } },
        { name: 'd', back: 'm30 37h13l2 16v2h-15z', top: 'm30 35h15l-2 2h-13z', side: 'm45 35-2 2 2 16z', front: { main: 'D', mx: 38, my: 52, sub: '5', sx: 33, sy: 42 } },
        { name: 'f', back: 'm45 37h13l2 16v2h-15z', top: 'm45 35h15l-2 2h-13z', side: 'm60 35-2 2 2 16z', front: { main: 'F', mx: 53, my: 52, sub: '6', sx: 48, sy: 42 } },
        { name: 'g', back: 'm60 37h13l2 16v2h-15z', top: 'm60 35h15l-2 2h-13z', side: 'm75 35-2 2 2 16z', front: { main: 'G', mx: 68, my: 52, sub: '*', sx: 63, sy: 42 } },
        { name: 'h', back: 'm77 37h13v18h-15v-2z', top: 'm75 35h15v2h-13z', side: 'm77 37-2-2v18z', front: { main: 'H', mx: 82, my: 52, sub: '#', sx: 87, sy: 42 } },
        { name: 'j', back: 'm92 37h13v18h-15v-2z', top: 'm90 35h15v2h-13z', side: 'm92 37-2-2v18z', front: { main: 'J', mx: 97, my: 52, sub: '+', sx: 102, sy: 42 } },
        { name: 'k', back: 'm107 37h13v18h-15v-2z', top: 'm105 35h15v2h-13z', side: 'm107 37-2-2v18z', front: { main: 'K', mx: 112, my: 52, sub: '"', sx: 117, sy: 42 } },
        { name: 'l', back: 'm122 37h13v18h-15v-2z', top: 'm120 35h15v2h-13z', side: 'm122 37-2-2v18z', front: { main: 'L', mx: 127, my: 52, sub: "'", sx: 132, sy: 42 } },
        { name: 'backspace', back: 'm137 37h13v18h-15v-2z', top: 'm135 35h15v2h-13z', side: 'm137 37-2-2v18z', front: 'm139.79 43.5-3.5 3.5 3.5 3.5h8.707v-7h-8.707zm0.41406 1h0.58594l-0.5 0.5 2 2-2 2 0.5 0.5h-0.58594l-2.5-2.5 2.5-2.5zm1 0h3.5859l-1.793 1.793-1.793-1.793zm4 0h2.293v5h-2.293l0.5-0.5-2-2 2-2-0.5-0.5zm-2.207 3.207 1.793 1.793h-3.5859l1.793-1.793z' },
        { name: 'z', back: 'm0 57h13l2 16v2h-5l-10-10z', top: 'm0 55h15l-2 2h-13z', side: 'm15 55-2 2 2 16z', front: { main: 'Z', mx: 8, my: 70, sub: '!', sx: 3, sy: 62 } },
        { name: 'x', back: 'm15 57h13l2 16v2h-15z', top: 'm15 55h15l-2 2h-13z', side: 'm30 55-2 2 2 16z', front: { main: 'X', mx: 23, my: 72, sub: '7', sx: 18, sy: 62 } },
        { name: 'c', back: 'm30 57h13l2 16v2h-15z', top: 'm30 55h15l-2 2h-13z', side: 'm45 55-2 2 2 16z', front: { main: 'C', mx: 38, my: 72, sub: '8', sx: 33, sy: 62 } },
        { name: 'v', back: 'm45 57h13l2 16v2h-15z', top: 'm45 55h15l-2 2h-13z', side: 'm60 55-2 2 2 16z', front: { main: 'V', mx: 53, my: 72, sub: '9', sx: 48, sy: 62 } },
        { name: 'space', back: 'm60 55h30l-2 18h-26z', top: 'm60 55v20l2-2-2-18zm30 0-2 18 2 2v-20z', side: 'm62 73h26l2 2h-30z', front: 'm67.5 62.5v1h15v-1z' },
        { name: 'b', back: 'm92 57h13v18h-15v-2z', top: 'm90 55h15v2h-13z', side: 'm92 57-2-2v18z', front: { main: 'B', mx: 97, my: 72, sub: '.', sx: 102, sy: 62 } },
        { name: 'n', back: 'm107 57h13v18h-15v-2z', top: 'm105 55h15v2h-13z', side: 'm107 57-2-2v18z', front: { main: 'N', mx: 112, my: 72, sub: ',', sx: 117, sy: 62 } },
        { name: 'm', back: 'm122 57h13v18h-15v-2z', top: 'm120 55h15v2h-13z', side: 'm122 57-2-2v18z', front: { main: 'M', mx: 127, my: 72, sub: '?', sx: 132, sy: 62, } },
        { name: 'enter', back: 'm137 57h13v8l-10 10h-5v-2z', top: 'm135 55h15v2h-13z', side: 'm137 57-2-2v18z', front: 'm145.5 61.5v3h-4v-1.1934l-5.082 1.6934 5.082 1.6934v-1.1934h5v-4z' },
    ];
    const keytable = {
        shift: { d: 'Shift', s: 'Shift', a: 'Shift' },
        symbol: { d: 'Symbol', s: 'Symbol', a: 'Symbol' },
        back: { d: '', s: '', a: '' },
        finger: { d: '', s: '', a: '' },
        menu: { d: '', s: '', a: '' },
        fn: { d: 'Unidefined', s: 'Unidefined', a: 'Unidefined' },
        alt: { d: 'Alt', s: 'Alt', a: 'Alt' },
        q: { d: 'q', s: 'Q', a: '0' },
        w: { d: 'w', s: 'W', a: '1' },
        e: { d: 'e', s: 'E', a: '2' },
        r: { d: 'r', s: 'R', a: '3' },
        t: { d: 't', s: 'T', a: '(' },
        y: { d: 'y', s: 'Y', a: ')' },
        u: { d: 'u', s: 'U', a: '-' },
        i: { d: 'i', s: 'I', a: '_' },
        o: { d: 'o', s: 'O', a: '/' },
        p: { d: 'p', s: 'P', a: ':' },
        a: { d: 'a', s: 'A', a: '@' },
        s: { d: 's', s: 'S', a: '4' },
        d: { d: 'd', s: 'D', a: '5' },
        f: { d: 'f', s: 'F', a: '6' },
        g: { d: 'g', s: 'G', a: '*' },
        h: { d: 'h', s: 'H', a: '#' },
        j: { d: 'j', s: 'J', a: '+' },
        k: { d: 'k', s: 'K', a: '"' },
        l: { d: 'l', s: 'L', a: "'" },
        backspace: { d: 'Backspace', s: 'Backspace', a: 'Backspace' },
        z: { d: 'z', s: 'Z', a: '!' },
        x: { d: 'x', s: 'X', a: '7' },
        c: { d: 'c', s: 'C', a: '8' },
        v: { d: 'v', s: 'V', a: '9' },
        space: { d: ' ', s: ' ', a: '' },
        b: { d: 'b', s: 'B', a: '.' },
        n: { d: 'n', s: 'N', a: ',' },
        m: { d: 'm', s: 'M', a: '?' },
        enter: { d: 'Enter', s: 'Enter', a: 'Enter' },
    };
    const keymap = {
        a: { keyCode: 65, code: 'KeyA' }, b: { keyCode: 66, code: 'KeyB' }, c: { keyCode: 67, code: 'KeyC' }, d: { keyCode: 68, code: 'KeyD' }, e: { keyCode: 69, code: 'KeyE' },
        f: { keyCode: 70, code: 'KeyF' }, g: { keyCode: 71, code: 'KeyG' }, h: { keyCode: 72, code: 'KeyH' }, i: { keyCode: 73, code: 'KeyI' }, j: { keyCode: 74, code: 'KeyJ' },
        k: { keyCode: 75, code: 'KeyK' }, l: { keyCode: 76, code: 'KeyL' }, m: { keyCode: 77, code: 'KeyM' }, n: { keyCode: 78, code: 'KeyN' }, o: { keyCode: 79, code: 'KeyO' },
        p: { keyCode: 80, code: 'KeyP' }, q: { keyCode: 81, code: 'KeyQ' }, r: { keyCode: 82, code: 'KeyR' }, s: { keyCode: 83, code: 'KeyS' }, t: { keyCode: 84, code: 'KeyT' },
        u: { keyCode: 85, code: 'KeyU' }, v: { keyCode: 86, code: 'KeyV' }, w: { keyCode: 87, code: 'KeyW' }, x: { keyCode: 88, code: 'KeyX' }, y: { keyCode: 89, code: 'KeyY' },
        z: { keyCode: 90, code: 'KeyZ' },
        space: { keyCode: 32, code: 'Space' },
        backspace: { keyCode: 8, code: 'Backspace' },
        enter: { keyCode: 13, code: 'Enter' },
        shift: { keyCode: 16, code: 'ShiftLeft' },
        alt: { keyCode: 18, code: 'AltRight' },
        fn: { keyCode: 0, code: 'F13' },
        menu: { keyCode: -1, code: 'Menu' },
        back: { keyCode: -1, code: 'Back' },
        symbol: { keyCode: 0, code: 'ContextMenu' },
        finger: { keyCode: -1, code: 'Home' },
    };
    ((component, tagname = 'tp-keyboard') => {
        if (customElements.get(tagname)) {
            return;
        }
        customElements.define(tagname, component);
    })(class extends HTMLElement {
        constructor() {
            super();
            this.sp = { shift: null, alt: null };
            const shadow = this.attachShadow({ mode: 'open' });
            const style = document.createElement('style');
            style.innerHTML =
                [
                    ':host { --highlight: #4275a5; --font: Bahnschrift; display: block; width: 300px; }',
                    ':host > div { width: 100%; }',
                    'svg { display: block; width: 100%; height: 100%; }',
                    'svg .button { cursor: pointer; fill: var( --button-back, #4d4d4d ); outline: none; -webkit-tap-highlight-color: transparent; }',
                    'svg .finger { fill: var( --button-finger, #4d4d4d ); }',
                    'svg .top { fill: var( --button-top, #b3b3b3 ); }',
                    'svg .side { fill: var( --button-side, #666 ); }',
                    'svg .front { fill: var( --button-front, #f2f2f2 ); }',
                    'svg text { font-family: var( --font ); fill: var( --button-front, #f2f2f2 ); }',
                    'svg .front, svg text { pointer-events: none; user-select: none; }',
                    'text::after { content: "x"; display: inline; }',
                    'svg text.main { font-size: 12px; }',
                    'svg text.sub { font-size: 7px; }',
                    'svg text.menu { font-size: 8px; }',
                    'svg path.highlight, :host( [ shift ] ) svg path#shift.push, :host( [ alt ] ) svg path#alt.push { fill: var( --highlight ); }',
                    ':host( [ disable ] ) svg g { opacity: 0.5; }',
                    ':host( [ disable ] ) svg g .button { pointer-events: none; }',
                    'svg g.hide .button { pointer-events: none; }',
                    'svg g.hide text, svg g.hide .front, :host( [ hidealt ] ) svg g text.sub { display: none; }',
                ].join('');
            const back = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            back.setAttributeNS(null, 'd', 'm0 0v65l10 10h130l10-10v-65z');
            back.style.fill = 'var(--back,#333)';
            this.keyboard = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.keyboard.setAttributeNS(null, 'width', '150px');
            this.keyboard.setAttributeNS(null, 'height', '75px');
            this.keyboard.setAttributeNS(null, 'viewBox', '0 0 150 75');
            this.keyboard.appendChild(back);
            buttons.forEach((button) => {
                const back = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                back.setAttributeNS(null, 'd', button.back);
                back.id = button.name;
                const top = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                top.setAttributeNS(null, 'd', button.top);
                top.classList.add('top');
                const side = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                side.setAttributeNS(null, 'd', button.side);
                side.classList.add('side');
                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                group.appendChild(back);
                group.appendChild(top);
                group.appendChild(side);
                this.keyboard.appendChild(group);
                back.classList.add('button');
                const isSp = button.name === 'shift' || button.name === 'alt';
                if (isSp) {
                    this.sp[button.name] = back;
                }
                back.addEventListener('click', isSp ? () => {
                    console.log(button.name, this.mode(), keytable[button.name][this.mode()]);
                    const name = button.name;
                    const data = Object.assign({
                        button: name,
                        key: keytable[name][this.mode()],
                        shiftKey: this.pushedShift,
                        altKey: this.pushedAlt,
                        usable: 0 <= keymap[name].keyCode,
                    }, keymap[name]);
                    this.dispatchEvent(new CustomEvent('push', { detail: data }));
                } : () => {
                    console.log(button.name, this.mode(), keytable[button.name][this.mode()]);
                    const name = button.name;
                    const data = Object.assign({
                        button: name,
                        key: keytable[name][this.mode()],
                        shiftKey: this.pushedShift,
                        altKey: this.pushedAlt,
                        usable: 0 <= keymap[name].keyCode,
                    }, keymap[name]);
                    this.dispatchEvent(new CustomEvent('push', { detail: data }));
                });
                if (typeof button.front === 'string') {
                    const front = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    front.setAttributeNS(null, 'd', button.front);
                    front.classList.add('front');
                    group.appendChild(front);
                }
                else {
                    const main = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    main.setAttributeNS(null, 'x', button.front.mx + '');
                    main.setAttributeNS(null, 'y', button.front.my + '');
                    main.setAttributeNS(null, 'text-align', 'center');
                    main.setAttributeNS(null, 'text-anchor', 'middle');
                    main.textContent = button.front.main;
                    main.classList.add(button.front.sub ? 'main' : 'menu');
                    group.appendChild(main);
                    if (!button.front.sub || !button.front.sx || !button.front.sy) {
                        return;
                    }
                    const sub = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    sub.setAttributeNS(null, 'x', button.front.sx + '');
                    sub.setAttributeNS(null, 'y', button.front.sy + '');
                    sub.setAttributeNS(null, 'text-align', 'center');
                    sub.setAttributeNS(null, 'text-anchor', 'middle');
                    sub.textContent = button.front.sub;
                    sub.classList.add('sub');
                    group.appendChild(sub);
                }
            });
            const contents = document.createElement('div');
            contents.appendChild(this.keyboard);
            shadow.appendChild(style);
            shadow.appendChild(contents);
        }
        mode() {
            if (this.pushedShift) {
                return 's';
            }
            if (this.pushedAlt) {
                return 'a';
            }
            return 'd';
        }
        searchButtonId(key) {
            if (keymap[key]) {
                return key;
            }
            for (const k in keymap) {
                const data = keymap[k];
                if (data.keyCode === key) {
                    return k;
                }
                if (data.code === key) {
                    return k;
                }
            }
            return '';
        }
        searchButton(key) {
            const id = this.searchButtonId(key);
            if (!id) {
                return null;
            }
            return this.keyboard.getElementById(id);
        }
        push(key) {
            const button = this.searchButton(key);
            if (button) {
                const name = button.id;
                this.unlight();
                if ((this.shift && name === 'shift') || (this.alt && name === 'alt')) {
                    this.sp[name === 'shift' ? 'alt' : 'shift'].classList.remove('push');
                    this.sp[name].classList.toggle('push');
                }
                else {
                    this.sp.shift.classList.remove('push');
                    this.sp.alt.classList.remove('push');
                    this.light(name);
                }
            }
            return this;
        }
        light(key) {
            const button = this.searchButton(key);
            if (button) {
                button.classList.add('highlight');
            }
            return this;
        }
        unlight(key) {
            if (key !== undefined) {
                const button = this.searchButton(key);
                if (button) {
                    button.classList.remove('highlight');
                }
            }
            else {
                this.keyboard.querySelectorAll('path.highlight').forEach((button) => {
                    button.classList.remove('highlight');
                });
            }
            return this;
        }
        showButton(key) {
            if (key !== undefined) {
                const button = this.searchButton(key);
                if (button) {
                    button.parentElement.classList.remove('hide');
                }
            }
            else {
                this.keyboard.querySelectorAll('.hide').forEach((button) => {
                    button.parentElement.classList.remove('hide');
                });
            }
            return this;
        }
        hideButton(key) {
            if (key !== undefined) {
                const button = this.searchButton(key);
                if (button) {
                    button.parentElement.classList.add('hide');
                }
            }
            else {
                this.keyboard.querySelectorAll('.button').forEach((button) => {
                    button.parentElement.classList.add('hide');
                });
            }
            return this;
        }
        get disable() { return this.hasAttribute('disable'); }
        set disable(value) { if (value) {
            this.setAttribute('disable', '');
        }
        else {
            this.removeAttribute('disable');
        } }
        get hidealt() { return this.hasAttribute('hidealt'); }
        set hidealt(value) { if (value) {
            this.setAttribute('hidealt', '');
        }
        else {
            this.removeAttribute('hidealt');
        } }
        get shift() { return this.hasAttribute('shift'); }
        set shift(value) { if (value) {
            this.setAttribute('shift', '');
        }
        else {
            this.removeAttribute('shift');
        } }
        get alt() { return this.hasAttribute('alt'); }
        set alt(value) { if (value) {
            this.setAttribute('alt', '');
        }
        else {
            this.removeAttribute('alt');
        } }
        get pushedShift() { return this.sp.shift.classList.contains('push'); }
        get pushedAlt() { return this.sp.alt.classList.contains('push'); }
    }, script.dataset.tagname);
});
