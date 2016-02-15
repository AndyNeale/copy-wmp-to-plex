var config	= require( './config.json' ),
	fs		= require( 'fs-extra' ) ;

var artist, album, target ;

fs.readdirSync( config.src ).forEach( function( artist ) {
	_artist = config.src + '\\' + artist ;
	if ( fs.lstatSync( _artist ).isDirectory() && artist != '_Plex' ) {
		fs.readdirSync( _artist ).forEach( function( album ) {
			_album = config.src + '\\' + artist + '\\' + album ;
			if ( fs.lstatSync( _album ).isDirectory() ) {
				_target = config.dest + '\\' + artist + ' - ' + album ;
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
