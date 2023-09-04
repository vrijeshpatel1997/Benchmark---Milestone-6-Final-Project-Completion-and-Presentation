package com.milestone4.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import com.milestone4.model.Product;

import exception.ProductNotFoundException;

public class ProductControllerTest {

    @Test
    public void testGetproductById() {
        ProductController productController = new ProductController();
        
       
        Long productId = 1L;

     
        Product product = productController.getproductById(productId);
        assertEquals(productId, product.getId());
    }

    @Test
    public void testDeleteProduct() {
        ProductController productController = new ProductController();
        

        Long productId = 1L;

        String response = productController.deleteProduct(productId);
        assertEquals("Product with id" + productId + " has been deleted", response);
    }
    
    @Test
    public void testUpdateProduct() {
        ProductController productController = new ProductController();
        
    
        Long productId = 1L;
        Product updatedProduct = new Product();

     
        Product result = productController.updateProduct(updatedProduct, productId);

        assertEquals(updatedProduct.getProductname(), result.getProductname());
        assertEquals(updatedProduct.getProudctdescription(), result.getProudctdescription());
        assertEquals(updatedProduct.getPrice(), result.getPrice());
    }
    @Test
    public void testOptionsRequest() {
        ProductController productController = new ProductController();
        
        ResponseEntity<Void> response = productController.options();
        
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(
            "GET, POST, PUT, DELETE, OPTIONS",
            response.getHeaders().getAccessControlAllowMethods().get(0)
        );
    }
 
}

