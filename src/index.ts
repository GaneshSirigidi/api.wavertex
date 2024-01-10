import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import templateServiceRoutes from "./routes/templates";
import contactsServiceRoutes from './routes/contacts';

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    status: 200,
    message: 'Service is up & running!' 
  });
});

app.route('/service/templates', templateServiceRoutes);
app.route('/contacts',contactsServiceRoutes)

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
})
