interface TitanPocketScreenElement extends HTMLElement
{
	minimal: boolean;
	readonly screenWidth: number;
	readonly screenHeight: number;
	readonly context2D: CanvasRenderingContext2D | null;
}

( ( script, init ) =>
{
	if ( document.readyState !== 'loading' ) { return init( script ); }
	document.addEventListener( 'DOMContentLoaded', () => { init( script ); } );
} )( <HTMLScriptElement>document.currentScript, ( script: HTMLScriptElement ) =>
{
	( ( component, tagname = 'tp-screen' ) =>
	{
		if ( customElements.get( tagname ) ) { return; }
		customElements.define( tagname, component );
	} )( class extends HTMLElement implements TitanPocketScreenElement
	{
		private canvas: HTMLCanvasElement;

		constructor()
		{
			super();

			const shadow = this.attachShadow( { mode: 'open' } );

			const style = document.createElement( 'style' );
			style.innerHTML =
			[
				':host { display: block; width: 200px; background: #000; }',
				':host( :not( [minimal] ) ) > div { padding: 10% 5%; }',
				'canvas { display: block; width: 100%; image-rendering: pixelated; image-rendering: crisp-edges; }',
			].join( '' );

			this.canvas = document.createElement( 'canvas' );
			this.canvas.width = 716;
			this.canvas.height = 720;

			const contents = document.createElement( 'div' );
			contents.appendChild( this.canvas );

			shadow.appendChild( style );
			shadow.appendChild( contents );
		}

		get minimal() { return this.hasAttribute( 'minimal' ); }
		set minimal( value ) { if ( value ) { this.setAttribute( 'minimal', '' ); } else { this.removeAttribute( 'minimal' ); } }

		get screenWidth() { return this.canvas.width; }
		get screenHeight() { return this.canvas.height; }
		get context2D() { return this.canvas.getContext( '2d' ); }
	}, script.dataset.tagname );
} );
