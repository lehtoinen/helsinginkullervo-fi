# helsinginkullervo.fi

This is the website for the Helsingin Kullervo football club.

The site is built with Gatsby, utilizing a custom made torneopal-source-plugin to fetch the fixtures and competitions for the teams.

## Local development

Create and env-file for the development environment (example file in the root)

```sh
cp .env.example .env.development
```

Enter you your Torneopal API key in the newly created env-file.

Install dependencies:

```sh
yarn
```

Then you can the site locally with:

```sh
yarn develop
```
