const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/e2e/BDD/*.feature',
    specPattern: 'cypress/E2E/TestCases/*.cy.js',
    "env":{
      "Url":"https://automationexercise.com",
      "Total":"1400"
    }
  },
});
