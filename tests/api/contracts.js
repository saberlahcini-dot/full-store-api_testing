import { expect } from '@playwright/test';

export function expectProduct(product) {
  expect(product).toEqual(expect.objectContaining({
    id: expect.any(Number),
    title: expect.any(String),
    price: expect.any(Number),
    description: expect.any(String),
    category: expect.any(String),
    image: expect.any(String)
  }));
  expect(product.title.length).toBeGreaterThan(0);
  expect(product.price).toBeGreaterThanOrEqual(0);
  expect(product.image).toMatch(/^https?:\/\//);
}

export function expectCart(cart) {
  expect(cart).toEqual(expect.objectContaining({
    id: expect.any(Number),
    userId: expect.any(Number),
    products: expect.any(Array)
  }));
  for (const product of cart.products) {
    expect(product).toEqual(expect.objectContaining({
      productId: expect.any(Number),
      quantity: expect.any(Number)
    }));
  }
}

export function expectUser(user) {
  expect(user).toEqual(expect.objectContaining({
    id: expect.any(Number),
    username: expect.any(String),
    email: expect.any(String)
  }));
  expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}