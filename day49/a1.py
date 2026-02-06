from decimal import Decimal, ROUND_HALF_UP


wrong_price = 19.99
wrong_total = wrong_price * 2.9

price = Decimal("19.99")
quantity = Decimal("2.9")
correct_total = price * quantity


print(f"Total: ${correct_total}")

tax =  total * Decimal("0.12")
tax = tax.quantize(Decimal("0.01"), ROUND_HALF_UP)

print(f"Tax (12%): ${tax}")