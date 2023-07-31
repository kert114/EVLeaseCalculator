let electricCarFuelCost = 0.3; // Average electricity cost in USD per mile
let petrolCost = 2.8; // Average petrol cost in USD per mile
document.getElementById('evCalculateBtn').addEventListener('click', calculateLeaseEV);
document.getElementById('gasCalculateBtn').addEventListener('click', calculateLeaseGAS);

function calculateLeaseEV() {
  const vehicleCostEV = parseFloat(
    document.getElementById("vehicleCostEV").value
  );
  const leaseTerm = parseInt(document.getElementById("leaseTermEV").value * 12);
  const downPayment = parseFloat(
    document.getElementById("downPaymentEV").value
  );
  const interestRate =
    parseFloat(document.getElementById("interestRateEV").value) / 100;
  const drivingDistance = parseFloat(
    document.getElementById("drivingDistanceEV").value
  );

  //   if (isNaN(vehicleCost) || isNaN(leaseTerm) || isNaN(downPayment) || isNaN(interestRate) || isNaN(drivingDistance)) {
  //     alert('Please enter valid numeric values for all fields.');
  //     return;
  //   }

  const monthlyInterestRate = interestRate / 12;
  const depreciationValue = vehicleCostEV - downPayment;
  const monthlyDepreciation = depreciationValue / leaseTerm;
  const monthlyInterest = depreciationValue * monthlyInterestRate;
  const monthlyLeaseCost = monthlyDepreciation + monthlyInterest;
  const annualFuelCostGas = petrolCost * drivingDistance;
  const annualFuelCostEV = electricCarFuelCost * drivingDistance;
  const annualFuelCostSavings = annualFuelCostGas - annualFuelCostEV;

  const totalLeaseCost = monthlyLeaseCost * leaseTerm;
  const totalLeaseCostWithFuelSavings = totalLeaseCost - annualFuelCostEV;
  const formattedTotalLeaseCost = totalLeaseCost.toLocaleString();
  const formattedTotalLeaseCostWithSavings = totalLeaseCostWithFuelSavings.toLocaleString();
  const formattedFuelCostSavings = annualFuelCostEV.toLocaleString();

  const resultElement = document.getElementById("resultEV");
  resultElement.innerHTML = `
    Total Lease Cost for Gas Car: $${formattedTotalLeaseCost}<br>
    Total Lease Cost for EV with Fuel Savings: $${formattedTotalLeaseCostWithSavings}<br>
    Annual Fuel Cost Savings with EV: $${formattedFuelCostSavings}
  `;
}

function calculateLeaseGAS() {
  const vehicleCostGAS = parseFloat(
    document.getElementById("vehicleCostGAS").value
  );
  const leaseTerm = parseInt(
    document.getElementById("leaseTermGas").value * 12
  );
  const downPayment = parseFloat(
    (vehicleCostGAS * document.getElementById("downPaymentGas").value) / 100
  );
  const interestRate =
    parseFloat(document.getElementById("interestRateGas").value) / 100;
  const drivingDistance = parseFloat(
    document.getElementById("drivingDistanceGas").value
  );

  //   if (isNaN(vehicleCost) || isNaN(leaseTerm) || isNaN(downPayment) || isNaN(interestRate) || isNaN(drivingDistance)) {
  //     alert('Please enter valid numeric values for all fields.');
  //     return;
  //   }

  const monthlyInterestRate = interestRate / 12;
  const depreciationValue = vehicleCostGAS - downPayment;
  const monthlyDepreciation = depreciationValue / leaseTerm;
  const monthlyInterest = depreciationValue * monthlyInterestRate;
  const monthlyLeaseCost = monthlyDepreciation + monthlyInterest;
  const annualFuelCostGas = petrolCost * drivingDistance;
  const totalFuelCostGas = (annualFuelCostGas * leaseTerm) / 12;
  const formattedTotalFuelCostGas = totalFuelCostGas.toLocaleString();
  const totalLeaseCost = monthlyLeaseCost * leaseTerm;
  const formattedTotalLeaseCost = totalLeaseCost.toLocaleString();

  const resultElement = document.getElementById("resultGAS");
  resultElement.innerHTML = `
      Total Lease Cost for Gas Car: $${formattedTotalFuelCostGas}<br>
      Total Fuel Cost Gas: $${formattedTotalFuelCostGas}<br>
      Total cost of Gas Car: $${formattedTotalLeaseCost}
    `;
}

function updateFuelCosts() {
  electricCarFuelCost = parseFloat(
    document.getElementById("electricCarFuelCostEV").value
  );
  petrolCost = parseFloat(document.getElementById("petrolCostGas").value);

  if (isNaN(electricCarFuelCost) || isNaN(petrolCost)) {
    alert(
      "Please enter valid numeric values for electric car fuel cost and petrol cost."
    );
    return;
  }
}

document
  .getElementById("electricCarFuelCostEV")
  .addEventListener("change", updateFuelCosts);
document
  .getElementById("petrolCost")
  .addEventListener("change", updateFuelCosts);

// Calculate the lease on page load
