package com.milestone4.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ProductTest {

    private Product product;

    @BeforeEach
    public void setUp() {
        product = new Product();
    }

    @Test
    public void testId() {
        product.setId(1L);
        assertEquals(1L, product.getId());
    }

    @Test
    public void testProductName() {
        product.setProductname("Test Product");
        assertEquals("Test Product", product.getProductname());
    }

    @Test
    public void testProductDescription() {
        product.setProudctdescription("This is a test product description.");
        assertEquals("This is a test product description.", product.getProudctdescription());
    }

    @Test
    public void testPrice() {
        product.setPrice(19.99);
        assertEquals(19.99, product.getPrice(), 0.001); // Using delta for double comparison
    }

    @Test
    public void testProductCreation() {
        product.setId(1L);
        product.setProductname("Test Product");
        product.setProudctdescription("This is a test product description.");
        product.setPrice(19.99);

        assertNotNull(product);
        assertEquals(1L, product.getId());
        assertEquals("Test Product", product.getProductname());
        assertEquals("This is a test product description.", product.getProudctdescription());
        assertEquals(19.99, product.getPrice(), 0.001);
    }
}
