import { Context } from "hono";
import BaseController from "./BaseController";
import {injectable } from "inversify";

@injectable()
class ContactsController extends BaseController {
  constructor() {
    super();
  }

}

export default ContactsController;