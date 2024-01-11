var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import BaseController from "./BaseController";
import { inject, injectable } from "inversify";
import TYPES from "../../inversify.types";
import ContactsService from "../services/database/contactsService";
import HttpService from "../services/http/HttpService";
let ContactsController = class ContactsController extends BaseController {
    constructor(contactsService, httpService) {
        super();
        this.contactsService = contactsService;
        this.httpService = httpService;
        this.addContact = (c) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqBody = yield c.req.json();
                const data = yield this.contactsService.createContact(reqBody);
                return this.sendSuccessResponse(c, 201, data, 'Contact added successfully');
            }
            catch (error) {
                console.log(error);
                return this.sendErrorResponse(c, error.status || 500, error);
            }
        });
        this.addContactGroup = (c) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqBody = yield c.req.json();
                const data = yield this.contactsService.createContactGroup(reqBody);
                return this.sendSuccessResponse(c, 201, data, 'Contact added successfully');
            }
            catch (error) {
                console.log(error);
                return this.sendErrorResponse(c, error.status || 500, error);
            }
        });
    }
};
ContactsController = __decorate([
    injectable(),
    __param(0, inject(TYPES.ContactsService)),
    __param(1, inject(TYPES.HttpService)),
    __metadata("design:paramtypes", [ContactsService,
        HttpService])
], ContactsController);
export default ContactsController;
