interface SiteHeaderElement extends HTMLElement
{
}

( ( script, init ) =>
{
	if ( document.readyState !== 'loading' ) { return init( script ); }
	document.addEventListener( 'DOMContentLoaded', () => { init( script ); } );
} )( <HTMLScriptElement>document.currentScript, ( script: HTMLScriptElement ) =>
{
	( ( component, tagname = 'site-header' ) =>
	{
		if ( customElements.get( tagname ) ) { return; }
		customElements.define( tagname, component );
	} )( class extends HTMLElement implements SiteHeaderElement
	{
		constructor()
		{
			super();

			const shadow = this.attachShadow( { mode: 'open' } );

			const style = document.createElement( 'style' );
			style.innerHTML =
			[
				':host { display: block; background: #d8ddf5; font-size: 2rem; }',
				'div { overflow-x: auto; overflow-y: hidden; height: 3.2rem; display: flex; scrollbar-width: none; }',
				'div::-webkit-scrollbar { display: none; }',
				'a { text-decoration: none; display: inline-block; margin: 0.2rem 0.4rem; } }',
			].join( '' );

			const contents = document.createElement( 'div' );
			[
				{ name: 'GtiHub', url: 'https://github.com/Azulamb/tptools' },
				{ name: 'Top', url: './' },
				{ name: 'Keyboard', url: './keyboard.html' },
				{ name: 'Scroll', url: './scroll.html' },
				{ name: 'Info', url: './info.html' },
				{ name: 'PWA', url: './pwa.html' },
				{ name: 'Map', url: './map.html' },
			].forEach( ( item ) =>
			{
				const a = document.createElement( 'a' );
				a.textContent = item.name;
				a.href = item.url;
				contents.appendChild( a );
			} );

			shadow.appendChild( style );
			shadow.appendChild( contents );
		}
	}, script.dataset.tagname );
} );
