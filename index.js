const Client = require("./newsClient");
const Model = require("./newsModel");
const View = require("./newsView");

const client = new Client();
const model = new Model();
const view = new View(model, client);
view.display()