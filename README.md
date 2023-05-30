# simplilearnproject1

Cypress tests
	Install Visual Studio Code: Download and install Visual Studio Code from the official website: https://code.visualstudio.com/
	Clone the repository: Open Visual Studio Code and open a new terminal.
	following command:
	git clone https://github.com/Simplilearn-Edu/ATE_PEP1_Testing_Using_Cypress.git
	navigate into the project folder by running the following command:
	cd ATE_PEP1_Testing_Using_Cypress
	install the required using npm:
	npm install
	After the installed
	npm start
	The application should start running on localhost:4200.
	Update the cypress.config.js file
	module. Exports = {
// ...
integration Folder: 'cypress/integration',
spec Pattern: '**/*.spec.js', // Adjust the pattern as needed
base URL: 'http://localhost:4200' // Adjust the URL if necessary
};
	Create a test file
	Create a new file with the name Test.spec.cy.ts
	Run Cypress test runner
	npx cypress open
