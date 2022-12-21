package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.model.Vendor;
import com.ecommerce.backend.services.VendorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin({"http://localhost:3000", "http://localhost:3001"})
@AllArgsConstructor
@RequestMapping("/vendor")
public class VendorController {
	VendorService vendorService;

	@PostMapping
	public ResponseEntity<APIResponse> createVendor(@RequestBody Vendor vendor) {
		APIResponse apiResponse = new APIResponse();
		Vendor response = vendorService.createVendor(vendor);
		apiResponse.setData(response);
		return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
	}

	@GetMapping("/")
	public ResponseEntity<APIResponse> getVendor() {
		APIResponse response = new APIResponse();
		List<Vendor> vendors = vendorService.fetchVendor();
		response.setData(vendors);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<APIResponse> getVendor(@PathVariable long id) {
		APIResponse response = new APIResponse();
		Vendor vendor = vendorService.fetchVendor(id);
		response.setData(vendor);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<APIResponse> updateVendor(@RequestBody Vendor vendor) {
		APIResponse response = new APIResponse();
		Vendor vendor1 = vendorService.updateVendor(vendor);
		response.setData(vendor1);
		return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<APIResponse> deleteVendor(@PathVariable long id) {
		APIResponse response = new APIResponse();
		boolean b = vendorService.deleteVendor(id);
		response.setData(b);
		return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
	}

}
