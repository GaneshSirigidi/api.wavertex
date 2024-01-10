import "reflect-metadata";
import { Hono } from 'hono';
import container from '../../inversify.config';
import TemplatesController from '../controllers/TemplatesController';
import TYPES from '../../inversify.types';

const templateServiceRoutes = new Hono();
const templatesController = container.get<TemplatesController>(TYPES.TemplatesController);

templateServiceRoutes.post('/create-template', templatesController.createTemplate);
templateServiceRoutes.get('/list', templatesController.getTemplates);
templateServiceRoutes.delete('/delete', templatesController.deleteTemplate);

export default templateServiceRoutes;