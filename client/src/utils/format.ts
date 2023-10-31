export function formatCurrency(number: number): string {
  // Convert the number to a string and split it into parts for digits and decimals
  const [digits] = number.toFixed(2).split(".");

  // Format the digits part with thousand separators
  const formattedDigits = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Combine the formatted digits and add the currency symbol
  return `${formattedDigits} ₫`;
}

// Example usage
// const amount: number = 100000;
// const formattedAmount: string = formatCurrency(amount);
// console.log(formattedAmount); // Output: "100.000 ₫"
