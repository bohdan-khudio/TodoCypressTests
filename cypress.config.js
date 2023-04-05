const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todoist.com/auth/login',

    env: {
      user: {
        email: 'bahdan510@gmail.com',
        password: 'SchoolLviv22'
        
      },
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
