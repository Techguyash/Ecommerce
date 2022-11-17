package com.ecommerce.backend.apiResponse;

public class ApiResponseError
{
    public synchronized static APIResponse returnApiResponse(APIResponse response, Throwable e)
    {

        if (response == null || response.getIsError())
        {
            if (response == null)
            {
                response = new APIResponse();
            }
            response.setIsError(Boolean.TRUE);
            response.setIsSuccess(Boolean.FALSE);
            response.setErrorMessage(e.getMessage());
            response.setDebugMessage(e.getLocalizedMessage());

        }
        return response;
    }
}
