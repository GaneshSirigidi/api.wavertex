import { Context } from "hono";
import BaseController from "./BaseController";
import {inject, injectable } from "inversify";
import TYPES from "../../inversify.types";
import ContactsService from "../services/database/contactsService";


@injectable()
class ContactsController extends BaseController {
  constructor(
    @inject(TYPES.ContactsService) private ContactsService: ContactsService
  ) {
    super();
  }

  addContact = async(c: Context) => {
    try {
      const reqBody = await c.req.json();
      await this.ContactsService.createContact(reqBody)
    } catch (error: any) {
      console.log(error)
      return this.sendErrorResponse(c, error.status || 500, error);   
    }
  }
  
}

export default ContactsController;