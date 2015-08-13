# RestEmulator

## Getting Started
It contains only Jasmine spec for now with JSON Server is started within the spec (/spec/services/services_spec.js)
About JSON Service module: [https://github.com/typicode/json-server]

### Installation
```
git clone git@github.com:gvozdikov/RestEmulator.git
cd RestEmulator
```
### Run specs
```
npm install
jasmine-node spec/services/
```
## How to use REST emulator
Go to [http://localhost:3000/api/]
Examples
* http://localhost:3000/api/services/ - list of all services
* http://localhost:3000/api/services/0 - service with id=0
* http://localhost:3000/api/services?name=A - services with the name A
