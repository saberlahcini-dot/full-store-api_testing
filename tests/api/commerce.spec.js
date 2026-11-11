import { test, expect } from '@playwright/test';
import { expectCart, expectUser } from './contracts.js';

test.describe('Carts', () => {
  test('GET /carts returns carts with the expected contract', async ({ request }) => {
    const response = await request.get('/carts');

    expect(response.status()).toBe(200);
    const carts = await response.json();
    expect(Array.isArray(carts)).toBe(true);
    expect(carts.length).toBeGreaterThan(0);
    for (const cart of carts) expectCart(cart);
  });

  test('GET /carts/1 returns a single cart', async ({ request }) => {
    const response = await request.get('/carts/1');

    expect(response.status()).toBe(200);
    const cart = await response.json();
    expectCart(cart);
    expect(cart.id).toBe(1);
  });
});

test.describe('Users', () => {
  test('GET /users returns users with the expected contract', async ({ request }) => {
    const response = await request.get('/users');

    expect(response.status()).toBe(200);
    const users = await response.json();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    for (const user of users) expectUser(user);
  });

  test('GET /users/1 returns a single user', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);
    const user = await response.json();
    expectUser(user);
    expect(user.id).toBe(1);
  });
});