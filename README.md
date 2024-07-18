<a  href="https://www.connieconnect.com">
<img  src="https://i.postimg.cc/MGd7M6Cp/connie-logo-white-thin-deja-Vu-Sans.png"  alt="Connie SaaS For Nonprofits"  width="250"  />
</a>

# 🗂️ Connie Dynamic Tabs Plugin
This repository is the plugin source code that enables dynamic tabs in the Connie info panel. Connie Tabs make the data information panel section of the agent's desktop exponentially more useful by allowing agents to have one-click access to the tools and data they need to answer questions and deliver CBO services. Additionally, the tabs are responsive based on the task attribues and variable that get passed when the agent accepts a new task. 

To learn more about Connie Dynamic Tabs, check out the product [feature page](https://connieconnect.com) or the [admin docs](https://docs.google.com/presentation/d/10FvsaIWYulWj72B2wUdXjw0mvJ-bB8uc/edit?usp=sharing&ouid=100905596054709529716&rtpof=true&sd=true).

## Requirements & Setup

[Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com)
[FLex Plugins CLI](https://www.twilio.com/docs/flex/developer/plugins/cli/install)


1. Download the repo and install the dependencies by running `npm install`:

``` SSH
git clone git@github.com:ConnieML/portal-tabs-plugin.git
cd portal-tabs-plugin

# If you use npm
npm install
```
2.  Upgrade default plugin dependencies to be compatible with Flex UI 2.0 
    twilio flex:plugins:upgrade-plugin --install --flex-ui-2.0

3. Check and Upgrade additional dependencies with [NPM Check Updates](https://www.npmjs.com/package/npm-check-updates)
    ncu

4. In ./public copy app.config.example => app.config

## Development

You can deploy a local copy with the CLI by running: twilio flex:plugins:start
or ... you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:8080`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy & Release

Once you are happy with your plugin, you have to bundle it in order to deploy it to Connie

Run the following command to start the bundling:
twilio flex:plugins:deploy --major --changelog "Adding Bing as search engine" --description "First Plugin on Flex"

Run the following command to Release:
twilio flex:plugins:release --name "First Plugin Release" --description "Enabling Plugin Sample" --plugin plugin-sample@1.0.0


```bash
npm run build
```

Afterwards, you'll find in your project a `build/` folder that contains a file with the name of your plugin project. For example, `plugin-example.js`. Take this file and upload it into the Assets part of your Twilio Runtime.

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.
