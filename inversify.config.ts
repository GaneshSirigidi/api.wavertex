import { Container } from "inversify";
import TYPES from "./inversify.types";
import TemplatesController from "./src/controllers/TemplatesController";
import HttpService from "./src/services/http/HttpService";

var container = new Container();
container.bind<TemplatesController>(TYPES.TemplatesController).to(TemplatesController).inSingletonScope();
container.bind<HttpService>(TYPES.HttpService).to(HttpService).inSingletonScope();

export default container;