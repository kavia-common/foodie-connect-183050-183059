import { getEnv } from '../utils/env';

/**
 * PUBLIC_INTERFACE
 * initiatePayment
 * A provider-agnostic placeholder. When mocks enabled or provider unspecified, simulates success.
 * Returns boolean for success.
 */
export async function initiatePayment({ amount, currency='INR', orderId }) {
  const provider = getEnv('REACT_APP_PAYMENT_PROVIDER') || 'mock';
  const sandbox = (getEnv('REACT_APP_PAYMENT_SANDBOX') || 'true') === 'true';

  if (provider === 'mock' || sandbox) {
    await new Promise(r=>setTimeout(r, 600));
    return true;
  }
  // Placeholder for real integrations (Razorpay/Stripe/Paytm)
  console.warn('Payment provider configured but not implemented, falling back to mock success');
  await new Promise(r=>setTimeout(r, 600));
  return true;
}
