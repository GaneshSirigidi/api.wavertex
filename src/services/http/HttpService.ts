import { injectable } from "inversify";

@injectable()
class HttpService {

  async fetchService(authKey: string, url: string, method: string, body?: any): Promise<Response> {
    const response = await fetch(url, {
      body: JSON.stringify(body),
      headers: {
        'Authorization': `Bearer ${authKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method
    });
    return response;
  }

  async prepareResponseData(serviceResponse: Response, fetchRespData: boolean = true): Promise<any>{
    
    if(serviceResponse.status >= 400 && serviceResponse.status <= 511) {
      return {
        status: serviceResponse.status,
        success: false,
        data: await serviceResponse.json()
      }
    }

    return {
      status: serviceResponse.status,
      success: true,
      data: fetchRespData ? await serviceResponse.json() : undefined
    }
  }

}

export default HttpService;