import { test, expect } from '@playwright/test';
import { expectProduct } from './contracts.js';

test.describe('Products', () => {
  test('GET /products returns products with the expected contract @smoke', async ({ request }) => {
    const response = await request.get('/products?limit=5');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const products = await response.json();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
    for (const product of products) expectProduct(product);
  });

  test('GET /products/1 returns a single product @smoke', async ({ request }) => {
    const response = await request.get('/products/1');

    expect(response.status()).toBe(200);
    const product = await response.json();
    expectProduct(product);
    expect(product.id).toBe(1);
  });

  test('GET /products/categories returns category names @smoke', async ({ request }) => {
    const response = await request.get('/products/categories');

    expect(response.status()).toBe(200);
    const categories = await response.json();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    for (const category of categories) expect(typeof category).toBe('string');
  });
});