# copy-wmp-to-plex

At the moment, this project just consists of a simple Node script I wrote quickly to convert a library of music stored in Windows Media Player's preferred folder structure i.e. **artist/album** to the structure used by Plex Media Server i.e. **artist - album**. In the fullness of time I hope to provide some alternative implementations e.g. Windows batch file, Windows PowerShell, Linux bash script, maybe Python.

# Usage

Assuming you have Node already installed, just download the project, edit config.json to set appropriate "source" and "destination" folders (don't forget to escape backslashes), then run

```js
npm install
node index.js
```

from the command line, and go and make a cup of tea...
