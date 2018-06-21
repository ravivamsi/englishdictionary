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

Get the meaning for one word
```bash
$ npm start CVS
```

Sample response
```
CVS: Also the name of a pharmacy
```


Get the meaning of multiple words
```bash
$ npm start CVS AP USA what system
```

Output:

```
CVS : Also the name of a pharmacy
AP : AP is a jewelry brand from switzerland which can cost up to 39k
USA : The only country keeping penguins from coquering the Earth
what : One of the only 3 words that Lil Jon says, the other two being "YEAH!" and "OKAY!"
system : High powered, premium stereo system in a car, truck or van, capable of large amounts of bass and treble.
```
