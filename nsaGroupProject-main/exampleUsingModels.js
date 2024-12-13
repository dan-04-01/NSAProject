// Importing all the classes. This is required for every class that you use.
const Banner = require('./models/Banner.js')
const Classification = require('./models/Classification.js')
const Sci = require('./models/Sci.js')
const Dissemination = require('./models/Dissemination.js')

// Instantiating a new banner
var banner = new Banner(new Classification("Top Secret"), [new Sci("Comint"), new Sci("-Gamma")], [new Dissemination("NOFORN"), new Dissemination("ORCON")]);

console.log(banner);