package com.ecommerce.backend.controller.test;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.apiResponse.ApiResponseError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController
{
    @GetMapping
    public ResponseEntity<APIResponse> hello()
    {
        APIResponse response = null;
        try
        {
            response = new APIResponse();
			response.setPayload(new String("Hello World"));
        }
        catch (Exception e)
        {
            e.printStackTrace();
            ApiResponseError.returnApiResponse(response, e);
        }
        return new ResponseEntity<>(response, response.getIsError() ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
    }


}
