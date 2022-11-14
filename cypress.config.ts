import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  module.exports = () => {

    require('cypress-cucumber-tagging/src/plugin')(config)
    return config
  }

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://www.saucedemo.com/',
    supportFile: "cypress/src/config.ts",
    chromeWebSecurity: false,
    setupNodeEvents,
    env: {
      STANDARD_USER: 'STAN_USER',
      STANDARD_PASSWORD: 'STAN_PASS'
    }
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    charts: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate"
  },
  video: false
});
