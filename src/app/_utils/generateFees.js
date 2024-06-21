// Utility function for non-bulk pricing
const generateNonBulkFees = (startValue, endValue, step) => {
  const nonBulkFees = {};
  let standardBase = 20.0;
  let clubBase = 18.0;
  let premiumBase = 16.0;
  let dealersBase = 14.0;

  for (let value = startValue; value <= endValue; value += step) {
    if (value <= 500) {
      nonBulkFees[value] = {
        "Standard": standardBase,
        "CLUB": clubBase,
        "PREMIUM": premiumBase,
        "DEALER'S": dealersBase
      };
    } else {
      standardBase += 2.0;
      clubBase += 1.80;
      premiumBase += 1.60;
      dealersBase += 1.40;
      nonBulkFees[value] = {
        "Standard": round(standardBase, 2),
        "CLUB": round(clubBase, 2),
        "PREMIUM": round(premiumBase, 2),
        "DEALER'S": round(dealersBase, 2)
      };
    }
  }
  return nonBulkFees;
};

// Utility function for bulk pricing
const generateBulkFees = (startValue, endValue, step) => {
  const bulkFees = {};
  let standardBase = 18.00;
  let clubBase = 16.00;
  let premiumBase = 14.00;
  let dealersBase = 12.00;

  for (let value = startValue; value <= endValue; value += step) {
    bulkFees[value] = {
      "Standard": round(standardBase, 2),
      "CLUB": round(clubBase, 2),
      "PREMIUM": round(premiumBase, 2),
      "DEALER'S": round(dealersBase, 2)
    };

    standardBase += (2.0 - 0.2 * Math.floor((value - 500) / 100));
    clubBase += (1.8 - 0.18 * Math.floor((value - 500) / 100));
    premiumBase += (1.6 - 0.16 * Math.floor((value - 500) / 100));
    dealersBase += (1.4 - 0.14 * Math.floor((value - 500) / 100));
  }

  return bulkFees;
};

// Rounding function
const round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

// Main function to get the appropriate pricing
export const getPricing = (quantity, declaredValue, subscriptionLevel, isBulk) => {
  const fees = isBulk ? generateBulkFees(100, 25000, 100) : generateNonBulkFees(100, 25000, 100);
  const feeLevel = fees[declaredValue];
  return feeLevel ? feeLevel[subscriptionLevel] : null;
};
