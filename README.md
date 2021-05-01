# Yong Cheng Low's Personal Website

This repository contains the code for Yong Cheng Low's Website. It is coded using NextJS. Feel free to take a look around and learn about my abilities.

## Table of Contents

1. [Running the Application on your computer](#running-the-application-on-your-computer)
   1. [Install Node.js](#install-Node.js)
   2. [Downloading the Application](#downloading-the-application)
   3. [Downloading for Testers](#downloading-for-testers)
   4. [Cloning for Developers](#cloning-the-repository)
   5. [Running the Application](#running-the-application)
2. [File Structure](#file-structure)
3. [Testing](#testing)
4. [VSCode](#vscode)
5. [Dependencies](#dependencies)
6. [Acknowledgements](#acknowledgements)
7. [License](#license)

## Running the Application on your Computer

### Install Node.js

Install Node.js by going to the following [website](https://nodejs.org/en/ "Node.js Homepage") and **download the LTS version**.

After installing Node.js, check that everything has been installed correctly, open the terminal application and type in the following:

```
node -v
```

If you see it return the version number, all is well.

### Downloading the Application

#### Downloading for Testers

1. Download the [repository](https://github.com/yongchenglow/yongchenglow.github.io.git)
2. Unzip the file in your desired location

#### Cloning the Repository

1. Download git for [mac](https://git-scm.com/download/mac) or [windows](https://git-scm.com/download/win) and install it
2. Create a [github account](https://github.com/join)
3. Navigate to the folder on where you want to store your computer
4. Open Terminal(Mac) or Cmd(windows)
5. Type
6. Type

```
cd<space>
```

6. Drag the folder into the Terminal
7. Press the `enter` key
8. Type the following into the Terminal

```
 git clone https://github.com/yongchenglow/nus-students-sports-club.git
```

### Running the Application

1. Open Terminal(Mac) or Cmd(windows)
2. Type

```
cd<space>
```

3. Drag the folder into the Terminal
4. Press the `enter` key
5. Run the following command

```
yarn install
```

6. Upon completion of the installation run the following command to run the application locally

```
yarn dev
```

7. By default you should be able to access the website on your localhost [http://localhost:3000/](http://localhost:3000/)

## File Structure

```
yong-cheng-low
├──  pages
│    ├── api
│    └──  components
│         ├── body
│         │    ├── content
│         │    │    ├── home
│         │    │    │    ├── home.scss
│         │    │    │    └── home.tsx
│         │    │    ├── home.scss
│         │    │    └── index.tsx
│         │    ├── components
│         │    │    └── searchBar
│         │    │         ├── searchBar.scss
│         │    │         └── searchBar.tsx
│         │    ├── body.module.scss
│         │    └── body.tsx (e.g.www.nussportsclub.org/nusbiathlon)
│         ├── footer
│         ├── header
│         ├── navbar
│         ├── index.scss
│         └── index.tsx
├── public
├── src
└── test
```

## Testing

Testing in this app is done using Jest, to write test cases you may refer to their [docs](https://jestjs.io/docs/en/getting-started)

In order to run the test, type the following commands in terminal:

```
yarn test
```

Please write relevant test cases if you are developing!

## VSCode

If you want modify the web application, it is recommend to do so using VSCode, recommended extensions have already been added.
To ensure the the Prettier Code formatter used is formated when you save, please adjust the following VSCode settings:

1. File (or Code for Mac) > preferences > settings
2. Search for `Defualt Formatter` and change to Prettier - Code Formatter
3. Search for `OnSave` and edit the settings.json by added the following

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

## Dependencies

Dependency Pinning is used in package.json. This is to ensure that

1. Application depencies are known and vulnerbilities are handled properly
2. Application can be runned when downloaded
3. In accordance with OWASP [Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html)

TLDR on the pinning of dependencies

```
"foobar": "^1.1.0" = "any foobar version greater than or equal to 1.1.0 but less than 2"
"foobar": "~1.1.0" = "any foobar version greater than or equal to 1.1.0 but less than 1.2"
"foobar": "1.1.0" = "use only foobar version 1.1.0 and no other"
```

To understand more about depency pinning please refer to the following [article](https://docs.renovatebot.com/dependency-pinning/).

## Acknowledgements

1. This project was bootstrapped with [Next JS with ES Lint Example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest).

## License

[GNU GENERAL PUBLIC LICENSE](./LICENSE)
