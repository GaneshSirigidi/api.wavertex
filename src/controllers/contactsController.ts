import { Context } from "hono";
import BaseController from "./BaseController";
import {inject, injectable } from "inversify";
import TYPES from "../../inversify.types";
import ContactsService from "../services/database/contactsService";
import HttpService from "../services/http/HttpService";


@injectable()
class ContactsController extends BaseController {
  constructor(
    @inject(TYPES.ContactsService) private contactsService: ContactsService,
    @inject(TYPES.HttpService) private httpService: HttpService
  ) {
    super();
  }

  addContact = async (c: Context) => {
    try {
      const reqBody = await c.req.json();

      const data= await this.contactsService.createContact(reqBody)

      return this.sendSuccessResponse(c, 201,data, 'Contact added successfully')

    } catch (error: any) {
      console.log(error)
      return this.sendErrorResponse(c, error.status || 500, error);
    }
  }

  addContactGroup = async (c: Context) => {
    try {
      const reqBody = await c.req.json();
      const data= await this.contactsService.createContactGroup(reqBody)

      return this.sendSuccessResponse(c, 201,data, 'Contact added successfully')
    } catch (error: any) {
      console.log(error)
      return this.sendErrorResponse(c, error.status || 500, error);
    }
  }

  listContacts = async (c: Context) => {
    try {
      const data= await this.contactsService.listContacts()

      return this.sendSuccessResponse(c, 201,data, 'Contact added successfully')
    } catch (error: any) {
      console.log(error)
      return this.sendErrorResponse(c, error.status || 500, error);
    }
  }
  
}

export default ContactsController;