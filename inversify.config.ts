import { Container } from "inversify";
import TYPES from "./inversify.types";
import TemplatesController from "./src/controllers/TemplatesController";
import HttpService from "./src/services/http/HttpService";
import ContactsController from "./src/controllers/contactsController";
import ContactsService from "./src/services/database/contactsService";

var container = new Container();
container.bind<TemplatesController>(TYPES.TemplatesController).to(TemplatesController).inSingletonScope();
container.bind<HttpService>(TYPES.HttpService).to(HttpService).inSingletonScope();
container.bind<ContactsController>(TYPES.ContactsController).to(ContactsController).inSingletonScope()
container.bind<ContactsService>(TYPES.ContactsService).to(ContactsService).inSingletonScope()

export default container;