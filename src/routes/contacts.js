import { Hono } from 'hono';
import "reflect-metadata";
import container from '../../inversify.config';
import TYPES from '../../inversify.types';
const contactsServiceRoutes = new Hono();
const contactsController = container.get(TYPES.ContactsController);
contactsServiceRoutes.post('/add-contact', contactsController.addContact);
contactsServiceRoutes.post('/add-contact/group', contactsController.addContactGroup);
export default contactsServiceRoutes;
