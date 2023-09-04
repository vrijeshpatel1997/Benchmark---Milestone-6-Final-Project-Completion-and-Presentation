package com.milestone4.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.milestone4.model.Product;
import com.milestone4.repository.ProductRepository;

import exception.ProductNotFoundException;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {

	@Autowired ProductRepository productRepository;

	@PostMapping("/product")
	Product newUser(@RequestBody Product newproduct) {
		return productRepository.save(newproduct);

	}

	@GetMapping("/products")
	List<Product> getallpProducts() {

		return productRepository.findAll();
	}

	@GetMapping("/product/{id}")
	Product getproductById(@PathVariable Long id) {

		return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
	}

	@PutMapping("/product/{id}")
	Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
		return productRepository.findById(id).map(product -> {
			product.setProductname(newProduct.getProductname());
			product.setProudctdescription(newProduct.getProudctdescription());
			product.setPrice(newProduct.getPrice());

			return productRepository.save(product);

		}).orElseThrow(() -> new ProductNotFoundException(id));
	}
	
	@RequestMapping(value="/products/{id}", method=RequestMethod.OPTIONS)
	public ResponseEntity<Void> options() {
		return ResponseEntity.ok().allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.OPTIONS).build();
	}

	@CrossOrigin(origins="*", methods=RequestMethod.DELETE)
	@DeleteMapping("/products/{id}")
	public String deleteProduct(@PathVariable Long id) {

		if (!productRepository.existsById(id)) {
			throw new ProductNotFoundException(id);

		}
		productRepository.deleteById(id);

		return "Product with id" + id + " has been deleted";

	}

}
