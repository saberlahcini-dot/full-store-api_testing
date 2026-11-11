import 'dotenv/config';
import { test, expect } from '@playwright/test';

    test('POST /auth/login returns a token when credentials are configured', async ({ request }) => {
    const { API_USERNAME: username, API_PASSWORD: password } = process.env;
    test.skip(!username || !password, 'Set API_USERNAME and API_PASSWORD to run this test.');

    const response = await request.post('/auth/login', {
        data: { username, password }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toEqual(expect.any(String));
    expect(body.token.length).toBeGreaterThan(0);
    });