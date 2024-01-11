import { Hono } from 'hono';
import "reflect-metadata";
import container from '../../inversify.config';
import TYPES from '../../inversify.types';
import ContactsController from "../controllers/contactsController";

const contactsServiceRoutes = new Hono();
const contactsController = container.get<ContactsController>(TYPES.ContactsController);

contactsServiceRoutes.post('/add-contact', contactsController.addContact);
contactsServiceRoutes.post('/add-contact/group', contactsController.addContactGroup)
contactsServiceRoutes.get('/list',contactsController.listContacts)


export default contactsServiceRoutes;