package com.ecommerce.backend.apiResponse;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class APIResponse
{
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;

    private Boolean isSuccess = true;

    private Boolean isError = false;

    private String errorMessage = null;

    private String debugMessage = null;

    private Object data;

    public APIResponse(Object data)
    {
        this();
        this.data = data;
    }

    public APIResponse()
    {
        this.timestamp = LocalDateTime.now();
    }
}
