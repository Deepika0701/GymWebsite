<!-- To create react app -->
npx create-react-app GYMWEBSITE
cd GYMWEBSITE
cd client
npm start

<!-- for node modules -->

 If you want to install all the node_modules from the package.json file you simply put: npm install in terminal (on the same directory where the package.json exists) and it would install all the node modules in the folder called node_modules.

Generally, the node_modules folder is not uploaded in a git (by putting restriction at .gitignore) because it is essentially the same folders or packages that one would have to install, *hence installing it from package.json is simpler and it saves the internet bandwidth and time. 

<!-- contact page -->
For those who work with various modern frameworks, we suggest to install EmailJS SDK like a module.
This SDK fully supports TypeScript.
`npm install emailjs-com`
Then the module or the required method can be imported.
`import{ init } from 'emailjs-com'`