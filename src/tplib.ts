interface TitanPocketLibrary
{
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
			this.isTP = !!navigator.userAgent.match( /Titan Pocket/ );
		}

		get isTitanPocket() { return this.isTP; }
	}

	(<any>window)[ script.dataset.name || 'TitanPocket' ] = new TitanPocket();
} )( <HTMLScriptElement>document.currentScript );
