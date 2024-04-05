/**
 *Calcula o valor após aplicado um desconto,
 * por exemplo, amountTotal: 1000, percent: 10%
 * Return 900
 */
export function DiscountValue(amountTotal: number, percent: number) {
  if (amountTotal && amountTotal > 0 && percent && percent > 0) {
    return amountTotal - (amountTotal * percent) / 100;
  }
  return amountTotal;
}

/**
 *Calcula o percentual de desconto passando o valor total e o valor com o desconto
 * Por exemplo: Valor Total:  1000, valor com desconto: 900
 * Return: 10%
 */
export function Discount(amount: number, totalAmount: number) {
  if (amount === 0) return 100;
  return 100 - (amount / totalAmount) * 100;
}
