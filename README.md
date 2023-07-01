# weeb-logger

A humorous and functional logging library for JavaScript inspired by the anime subculture. Originating from a meme by @trashh_dev on Twitter, this library maps fun, anime-inspired logging methods to the standard `console.log()`, `console.warn()`, `console.error()`, and `console.debug()` methods.

## Features

- Maps `console.log()`, `console.warn()`, `console.error()`, and `console.debug()` to fun, anime-inspired methods like `console.moan()`, `console.yelp()`, `console.rage()`, `console.babble()`, and more.
- Adds `console.scream()` method that takes a message, a color, and optional prefixes and postfixes, and outputs the message to the console with the specified formatting.

## Usage

```javascript
console.moan('This is a regular log message');
console.whisper('This is a subtle log message');
console.yelp('This is a warning');
console.rage('This is an error');
console.babble('This is a debug message');
console.panic('This is a panic message');
console.scream('This is an important message', 'red', 'Attention!', '!!!');
```

Each method accepts a string message and formats it according to its style. The console.scream() method accepts a color and prefix/postfix strings in addition to the message.

## Installation
Install weeb-logger using npm:
```bash
npm install weeb-logger
```

Then, import it in your JavaScript file:
```javascript
import 'weeb-logger';
```

Note: This package modifies the global console object, so you don't need to assign it to a variable.

## License
MIT
