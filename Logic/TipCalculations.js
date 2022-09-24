export default function TipCalculations(
  bill = 1,
  tipInput = 1,
  numberOfPeople = 1
) {
  const tip = tipInput / 100;

  const tipAmount = bill * tip;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalAmount = (1 + tip) * bill;
  const totalAmountPerPerson = totalAmount / numberOfPeople;
  return [
    `$${tipAmountPerPerson.toFixed(2)}`,
    `$${totalAmountPerPerson.toFixed(2)}`,
  ];
}
