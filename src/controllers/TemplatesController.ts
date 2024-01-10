import 'dotenv/config';
import { Context } from "hono";
import BaseController from "./BaseController";
import { inject, injectable } from "inversify";
import { CREATE_TEMPLATE_FAIL, CREATE_TEMPLATE_SUCCESS, DELETE_TEMPLATE_FAIL, DELETE_TEMPLATE_SUCCESS, GET_TEMPLATES_FAIL, GET_TEMPLATES_SUCCESS } from "../constants/appMessages";
import TYPES from "../../inversify.types";
import HttpService from "../services/http/HttpService";
import { env } from "hono/adapter";

@injectable()
class TemplatesController extends BaseController {
  constructor(
    @inject(TYPES.HttpService) private httpService: HttpService
  ) {
    super();
  }

  createTemplate = async(c: Context) => {
    try {
      const reqBody = await c.req.json();
      return this._processRequest(c, 'message_templates', 'POST', CREATE_TEMPLATE_SUCCESS, CREATE_TEMPLATE_FAIL, reqBody);
    } catch (error: any) {
      console.log(error)
      return this.sendErrorResponse(c, error.status || 500, error, CREATE_TEMPLATE_FAIL);
      
    }
  }

  getTemplates = async(c: Context) => {

    try {
      return this._processRequest(c, 'message_templates', 'GET', GET_TEMPLATES_SUCCESS, GET_TEMPLATES_FAIL);
    } catch (error: any) {
      return this.sendErrorResponse(c, error.status || 500, error, GET_TEMPLATES_FAIL);
    }
    
  }

  deleteTemplate = async(c: Context) => {
    try {
      const templateName = c.req.query('template_name');
      const urlPath = `message_templates?name=${templateName}`;
      
      return this._processRequest(c, urlPath, 'DELETE', DELETE_TEMPLATE_SUCCESS, DELETE_TEMPLATE_FAIL);
      
    } catch (error: any) {
      return this.sendErrorResponse(c, error.status || 500, error, DELETE_TEMPLATE_FAIL);
      
    }
  }

  _processRequest = async(c: Context, urlPath: string, method: string, successMessage?: string, errorMessage?: string, reqBody?: any) => {

    const { WA_TOKEN, WA_BUSINESS_ID, WA_API_BASE_URL } = env(c);
    const url = `${WA_API_BASE_URL}/${WA_BUSINESS_ID}/${urlPath}`;
    
    const serviceResponse = await this.httpService.fetchService(WA_TOKEN, url, method, reqBody);
    const respData = await this.httpService.prepareResponseData(serviceResponse);

    const message = respData.success ? successMessage: errorMessage;

    return this.sendSuccessResponse(c, respData.status, respData.data, message);
    
  }
}

export default TemplatesController;