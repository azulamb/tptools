interface TitanPocketLibrary
{
	enableFullscreenViewport(): this;
	readonly isTitanPocket: boolean;
}
declare const TitanPocket: TitanPocketLibrary;

( ( script ) =>
{
	class TitanPocket implements TitanPocketLibrary
	{
		private isTP: boolean;

		constructor()
		{
			this.isTP = !!navigator.userAgent.match( /Titan pocket/ );
		}

		public enableFullscreenViewport()
		{
			const meta = document.createElement( 'meta' );
			meta.name = 'viewport';
			meta.content = 'width=716,user-scalable=no';
			document.head.appendChild( meta );
			return this;
		}

		get isTitanPocket() { return this.isTP; }
	}

	(<any>window)[ script.dataset.name || 'TitanPocket' ] = new TitanPocket();
} )( <HTMLScriptElement>document.currentScript );
