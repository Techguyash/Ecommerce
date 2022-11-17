package com.ecommerce.backend;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Ecommerce API",
		contact = @Contact(name = "Techguyash",email = "techguyash@gmail.com"),
		description = "App to serve for the ecommerce application request",
version = "1.0",termsOfService = "Not for commercial or personal use. Privately owned")
)
@CrossOrigin("http://localhost:3000")
public class ECommerceBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceBackendApplication.class, args);
	}


	@Bean
	public ModelMapper modelMapper()
	{
		return new ModelMapper();
	}

}
