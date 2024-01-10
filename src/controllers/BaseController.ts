import { Context } from "hono";
import { injectable } from "inversify";

@injectable()
class BaseController {
  sendSuccessResponse(c: Context, statusCode: number, respData?: any, message?: string, ) {
    const response = {
      status: statusCode,
      data: respData,
      message: message || 'Success'
    }
    c.status(statusCode);
    return c.json(response);
  }

  sendErrorResponse(c: Context, statusCode: number, errorData?: any, message?: string) {
    const response = {
      status: statusCode,
      error_data: errorData,
      message: message || 'Error'
    }
    c.status(statusCode);
    return c.json(response);
  }
}

export default BaseController;