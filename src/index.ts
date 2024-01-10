import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import templateServiceRoutes from "./routes/templates";

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    status: 200,
    message: 'Service is up & running!' 
  });
});

app.route('/service/templates', templateServiceRoutes);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
})
