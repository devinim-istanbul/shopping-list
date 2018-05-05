# shopping-list
This is a social responsibility project that is built by [devinim](https://devin.im) team.

## About
This project addresses the issue of shopping for a house with more than one residents. In order to purchase everything needed by the residents, we create an interactive shopping list which might be filled by residents of the house. We aim to achieve no second trips to supermarket in 10 minutes.

## How to run the project?
Since this project is built with [expo](https://expo.io), you will need [NodeJS](https://nodejs.org/).
After installing NodeJS, you can install expo with

```
npm install exp --global
```

then, change directory to project's folder and install dependencies with
```
npm install
```

then, simply use

```
exp start
```

## About config files
In case you want to contribute this project, you will need to this section. If you want to extend the application, you may pursue your own ways to protect your config files.

The project config files are encrypted with git secret. In order to access the config files, you need to install `git-secret` and `gpg`.
After installing the dependencies; firstly, you will need to [create a gpg key](https://help.github.com/articles/generating-a-new-gpg-key). Then, you will need to send your public key with your e-mail address (which is linked to your public key) to one of the [maintainers](Maintainers.md)
