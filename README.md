# NBA Color
> Get all NBA team's color code (Hex or RGB).<br>
> Useful for building NBA-related colorful product.

[![Build Status](https://travis-ci.org/xxhomey19/nba-color.svg?branch=master)](https://travis-ci.org/xxhomey19/nba-color)
[![Coverage Status](https://coveralls.io/repos/github/xxhomey19/nba-color/badge.svg)](https://coveralls.io/github/xxhomey19/nba-color)
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>

![screen shot 2017-10-27 at 9 33 07 pm](https://user-images.githubusercontent.com/12113222/32106524-925211e2-baf1-11e7-95e0-5d82a52cc7c0.png)

## Install

```
$ npm install nba-color
```

## Usage

```js
const chalk = require('chalk');
const { getMainColor, getFullName } = require('nba-color');

const warriors = 'GSW';
const { hex: warriorsColorHex } = getMainColor(warriors);
const warriorsFullName = getFullName(warriors);

console.log(chalk.bgHex(warriorsColorHex).bold(warriorsFullName));
```
result:
![screen shot 2017-10-28](https://user-images.githubusercontent.com/12113222/32114858-451ab492-bb0a-11e7-8839-b3012977a18c.png)


## API

### getAllColors() => `Object`

Return an `Object` containing all NBA teams colors data.  
The object's keys are **[Team Abbreviations](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_National_Basketball_Association/National_Basketball_Association_team_abbreviations)**.

### getMainColor(teamAbbreviation) => `Object`

Return an `Object` containing the NBA team main color's **Hexadecimal Colors Code** and **RGB Color Code**.  

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getMainColor } = require('nba-color');

console.log(getMainColor('CLE'));

/*
{
  hex: '#6f263d',
  rgb: [111, 38, 61]
}
*/
```

### getColors(teamAbbreviation) => `Object`

Return an `Object` containing the NBA team all colors, including **Hexadecimal Colors Code** and **RGB Color Code** for each color.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getColors } = require('nba-color');

console.log(getColors('LAL'));

/*
{
  purple: {
    hex: '#702f8a',
    rgb: [112, 47, 138],
  },
  gold: {
    hex: '#ffc72c',
    rgb: [255, 199, 44],
  },
  white: {
    hex: '#ffffff',
    rgb: [255, 255, 255],
  }
}
*/
```

### getColorsList(teamAbbreviation) => `Array`

Return an `Array` containing the NBA team colors.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getColorsList } = require('nba-color');

console.log(getColorsList('LAL'));

/*
['purple', 'gold', 'white']
*/
```

### getFullName(teamAbbreviation) => `String`

Return a `String` which is the NBA team full name.

Note.  
If received an excluded team abbreviation, return `undefined`.

Example
```js
const { getFullName } = require('nba-color');

console.log(getFullName('SAS'));

/*
'San Antonio Spurs'
*/
```  


## License

MIT
