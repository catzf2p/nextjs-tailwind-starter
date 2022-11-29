# Introduction

Hello! Here I will try to explain how to set up a React app with both Typescript and Tailwind.

# Next app with Typescript

This part is really simple, all you need to do is add the template option to create-react-app command. Feel free to reaplace "app" with anything else.

Once installed simple cd into the directory.

```
yarn create next-app nextjs-tailwind-starter --typescript
cd nextjs-tailwind-starter
```

# Tailwind

Finally we need to add tailwind. First we need to install the needed modules

```
yarn add -D tailwindcss postcss autoprefixer
```

Next we need to create the config files which can easily be done via the following command:

```
yarn tailwindcss init -p
```

Next open up the created "tailwind.config.js" file and add the following to "content":

```
{
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
}
```

Next we need to add the Tailwind directives to the "styles/globals.css" file, add the following to the top of the file:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now that we have set up Typescript and Tailwind we need to check to see if it works.
Open up "pages/index.tsx" and change it to the following:

```
import React from 'react';

function Index() {
  return (
    <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
      React Typescript Tailwind Sample
    </h1>
  );
}

export default Index;
```

Done, now let's start the application.

```
yarn dev
```

# Automatic Class Sorting with Prettier

To get started, just install prettier-plugin-tailwindcss as a dev-dependency:

```
yarn add -D prettier prettier-plugin-tailwindcss
```

# ESLint

ESLint is a JavaScript linting open source project and is used to find problems and syntax issues in your code, it will help us find broken logic that would be found only in run time.

To install ESLint:

```
yarn add -D eslint
```

After installing the ESLint we have to initialize the config file:

```
yarn eslint --init
```

Here we are going to answer some questions about our project:

```
? How would you like to use ESLint?
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

Choose ‘To check syntax and find problems’ because later we are going to use Prettier to enforce code style as well.

```
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

Choose JavaScript modules mainly because ReactJS uses them.

```
? Which framework does your project use? …
▸ React
  Vue.js
  None of these
```

Choose ‘React’ as our framework.

```
? Does your project use TypeScript? No / ‣ Yes
```

Choose ‘Yes’ for TypeScript.

```
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
```

Choose ‘Browser’ because ReactJS runs on the Browser.

```
? What format do you want your config file to be in? …
  JavaScript
  YAML
▸ JSON
```

Here you are free to choose any of the options, but I am going to use JSON as my format.

The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

```
? Would you like to install them now with npm? ‣ No / Yes
```

If you are using NPM then just select ‘Yes’, if not select ‘No’ then copy the packages and:

```
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
```

If everything went well your eslintrc file should look something like this:

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
  }
}
```

Let’s install prettier and then edit the eslint and prettier configuration files.

Before all, what is Prettier?

Prettier is a code style formatter, different from ESLint, Prettier only format the code style, and does not look for syntax problems.

Rules like max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style are some popular formatting rules in Prettier.

And rules like no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors are common rules in ESLint.

In this case, I prefer ESLint to search for problems and syntax errors and let the code style for prettier.

To install Prettier:

```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

After installing you have to create the prettierc file:

```
touch .prettierrc
```

At this point you have a blank .prettierrc file and a default eslintrc file, so the next step is to configure the eslintrc file.

Open your eslintrc file.

If you are going to use or you intend to use Jest in your project add the next lines to your ‘env’:

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true // Add this line!
  }
}
```

To use prettier alongside with eslint you need to change the extends object:

```
{
	"extends": [
	  "eslint:recommended",
	  "plugin:react/recommended",
	  "plugin:@typescript-eslint/recommended",
	  "prettier" // Add this line!
	]
}
```

The main part of ESLint is the rules objects. Here you can put any rule you think is good for your project and team.

My basic configuration is this:

```
{
  "rules": {
    "camelcase": "error",
    "no-duplicate-imports": "error",
    "quotes": ["error", "single"],
    "spaced-comment": "error",
    "react/react-in-jsx-scope": "off"
  }
}
```

If you want to learn more about ESLint rules you can check out [rules](https://eslint.org/docs/rules/) page.

To use the plugins we have installed, update the plugins object in the eslintrc file:

```
{
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ]
}
```

The last thing to set up in ESLint is the eslint-import-resolver-typescript. Just add the settings key in the eslint configuration file.

```
{
  "settings": {
  "import/resolver": {
    "typescript": {

    }
  }
}
```

Lastly, we are going to set up the .prettierrc file created at the begging of the article.

Basic configuration for prettierrc file is:

```
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}

```

But if you want to learn more check out the [options](https://prettier.io/docs/en/options.html) page.

Finally, we have to add the scripts in the package.json:

```
{
  "scripts": {
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  }
}
```

Basically:

-   format: will call prettier to fix the code style.

Trying to manually run ESLint: Fix all auto-fixable Problems periodically is not very reliable. However, having lint rules run every time you save your work can be more reliable. You can set up ESLint to run auto-fix every time you press CTRL+S (or COMMAND+S).

For ESLint to work correctly on file same, you must change the Visual Studio Code preferences. Go to File > Preferences > Settings (or Code > Preferences > Settings).

For this tutorial, we will modify the Workspace settings - it is also possible to apply these settings for all projects. Click Workspace and search for Code Actions On Save:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

# Husky + Lint-Staged

To ensure all files committed to git don't have any linting or formatting errors, there is a tool called lint-staged that can be used. lint-staged allows to run linting commands on files that are staged to be committed. When lint-staged is used in combination with husky, the linting commands specified with lint-staged can be executed to staged files on pre-commit (if unfamiliar with git hooks, read about them here).

```
yarn add -D husky lint-staged
yarn husky install
yarn husky add .husky/pre-commit 'yarn lint-staged'
```

Add the lint-staged configuration to package.json so when certain files are staged for a commit, we run ESLint and Prettier.

```
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "./src/**/*.{ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    "./src/**": [
      "prettier --write .",
      "git add"
    ]
  }
}

```

Now that we've installed and configured our tools, let's test this out in action!
Let's find out what happens if we commit our code as-is:

```
git add .
git commit -m 'test commit with husky'
```

Success! 🥳

# Nextjs deploy on github-pages

There have two approaches on below

Run Terminal:
Just run npm run deploy, setup in pakage.json.

Github Action:
Add <action-name>.yml, when github detected specificed branch updated will deploy automictically.

# Run Terminal

Setup
Add those file under your project root
setting <your-repo-name>

<project-root>/.env-config.js

```
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': isProd ? '<your-repo-name>' : ''
};
```

next.config.js

```
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '<your-repo-name>' : '',,
  images: {
    unoptimized: true,
  }
};
```

Add script in package.json
package.json

```
"scripts": {
  "export": "next export",
  "deploy": "rm -rf node_modules/.cache && rimraf out && next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
}
```

If you don’t want to custom your commit can update your script "deploy"

The next step is to install the gh-pages dependency by running the following command

```
yarn add -D gh-pages
```

Run

```
yarn deploy
```

# Github Action

setup
Same as Run Terminal approac. here
THIS IS NECESSARY when you want deploy your nextjs project on github-pages

Add <action-name>.yml
<project-root>/.github/workflows/<action-name>.yml

```
name: Deploy to Github Pages
on:
  push:
    branches:
      - main
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-22.04
    permissions:
      contents: write
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Get yarn cache
        id: yarn-cache
        run: echo "YARN_CACHE_DIR=$(yarn cache dir)" >> "${GITHUB_OUTPUT}"

      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ${{ steps.yarn-cache.outputs.YARN_CACHE_DIR }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - name: Installing dependencies
        run: yarn install --frozen-lockfile

      - name: Build
        run: |
          yarn build
          yarn export

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_branch: gh-pages
          publish_dir: ./out
```
