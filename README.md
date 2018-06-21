# englishdictionary
Node Module to retrieve the Meanings for the English Words


## Pre-requisites

Use the package manager section to install nodejs in different operating systems

https://nodejs.org/en/download/package-manager/

### Windows
```bash
> choco install nodejs
```

### Mac
```bash
$ brew install node
```

## Install English Dictionary Global
```bash
npm install englishdictionary -g
```

## Install English Dictionary Local
```bash
npm install englishdictionary
```

## Usage

Change Directory to the node_modules if you installed globally
```bash
cd /usr/local/lib/node_modules
```

> Note: For Windows
> Windows XP - %USERPROFILE%\Application Data\npm\node_modules
> Windows 7, 8 and 10 - %AppData%\npm\node_modules

Keep the machine awake
```bash
$ npm start CVS
```


Sample response
```json
{
    "id": "1018500",
    "term": "CVS",
    "url": "http://www.urbandictionary.com/define.php?term=CVS&defid=1018500",
    "definition": "Also the name of a pharmacy",
    "example": "Hey lets go to the CVs pharmacy",
    "author": "von",
    "author_url": "http://www.urbandictionary.com/author.php?author=von",
    "posted": "2005-01-24T00:00:00+00:00"
}
```
