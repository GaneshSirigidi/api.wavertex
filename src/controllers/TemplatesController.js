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
import 'dotenv/config';
import BaseController from "./BaseController";
import { inject, injectable } from "inversify";
import { CREATE_TEMPLATE_FAIL, CREATE_TEMPLATE_SUCCESS, DELETE_TEMPLATE_FAIL, DELETE_TEMPLATE_SUCCESS, GET_TEMPLATES_FAIL, GET_TEMPLATES_SUCCESS } from "../constants/appMessages";
import TYPES from "../../inversify.types";
import HttpService from "../services/http/HttpService";
import { env } from "hono/adapter";
let TemplatesController = class TemplatesController extends BaseController {
    constructor(httpService) {
        super();
        this.httpService = httpService;
        this.createTemplate = (c) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqBody = yield c.req.json();
                return this._processRequest(c, 'message_templates', 'POST', CREATE_TEMPLATE_SUCCESS, CREATE_TEMPLATE_FAIL, reqBody);
            }
            catch (error) {
                console.log(error);
                return this.sendErrorResponse(c, error.status || 500, error, CREATE_TEMPLATE_FAIL);
            }
        });
        this.getTemplates = (c) => __awaiter(this, void 0, void 0, function* () {
            try {
                return this._processRequest(c, 'message_templates', 'GET', GET_TEMPLATES_SUCCESS, GET_TEMPLATES_FAIL);
            }
            catch (error) {
                return this.sendErrorResponse(c, error.status || 500, error, GET_TEMPLATES_FAIL);
            }
        });
        this.deleteTemplate = (c) => __awaiter(this, void 0, void 0, function* () {
            try {
                const templateName = c.req.query('template_name');
                const urlPath = `message_templates?name=${templateName}`;
                return this._processRequest(c, urlPath, 'DELETE', DELETE_TEMPLATE_SUCCESS, DELETE_TEMPLATE_FAIL);
            }
            catch (error) {
                return this.sendErrorResponse(c, error.status || 500, error, DELETE_TEMPLATE_FAIL);
            }
        });
        this._processRequest = (c, urlPath, method, successMessage, errorMessage, reqBody) => __awaiter(this, void 0, void 0, function* () {
            const { WA_TOKEN, WA_BUSINESS_ID, WA_API_BASE_URL } = env(c);
            const url = `${WA_API_BASE_URL}/${WA_BUSINESS_ID}/${urlPath}`;
            const serviceResponse = yield this.httpService.fetchService(WA_TOKEN, url, method, reqBody);
            const respData = yield this.httpService.prepareResponseData(serviceResponse);
            const message = respData.success ? successMessage : errorMessage;
            return this.sendSuccessResponse(c, respData.status, respData.data, message);
        });
    }
};
TemplatesController = __decorate([
    injectable(),
    __param(0, inject(TYPES.HttpService)),
    __metadata("design:paramtypes", [HttpService])
], TemplatesController);
export default TemplatesController;
