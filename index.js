var fs		= require( 'fs-extra' ),
	src		= 'M:\\_Windows Media Player',
	dest	= 'M:\\' ;

var artist, album, target ;

fs.readdirSync( src ).forEach( function( artist ) {
	_artist = src + '\\' + artist ;
	if ( fs.lstatSync( _artist ).isDirectory() && artist != '_Plex' ) {
		fs.readdirSync( _artist ).forEach( function( album ) {
			_album = src + '\\' + artist + '\\' + album ;
			if ( fs.lstatSync( _album ).isDirectory() ) {
				_target = dest + '\\' + artist + ' - ' + album ;
				console.log( 'Copying ' + _album + ' to ' + _target + '...' ) ;
				try {
					fs.copySync( _album, _target ) ;
				}
				catch( error ) {
					console.log( 'Oops' + error ) ;
				}
				console.log( 'Done') ;
			}
		} ) ;
	}
} ) ;
