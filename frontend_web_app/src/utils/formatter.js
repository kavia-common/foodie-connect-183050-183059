export function currencyINR(amount) {
  /** PUBLIC_INTERFACE: Format number into INR currency string */
  return new Intl.NumberFormat('en-IN', { style:'currency', currency:'INR' }).format(amount);
}
