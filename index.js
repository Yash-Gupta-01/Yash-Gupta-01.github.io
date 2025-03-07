const data = {
  "11": 'Good family support',
  "12": 'Good support of family',
  "16": 'Relationship issue, Issue with Spouse, Expense more, less income',
  "17": 'More profit from lying, Money related issue, Chance of 2 marriage',
  "18": 'Spouse health issues, issues related to government, chance to change job frequently',
  "19": 'Always on high place, good manifest, professional person , high respected person',
  "21": 'Good Support of Family',
  "23": 'More enemies., stay away from children',
  "25": 'Successful, self property,',
  "26": 'Neutral',
  "27": 'Urine related problem, Joint pain, Leg shivring',
  "28": 'Depression, highly caring',
  "29": 'Person have decent amount of money, live happily on money of someone else,,native might become egoistic',
  "32": 'More enemies., stay away from children',
  "34": 'Good Spouse Support',
  "36": 'Native gets success when they stay away from home, good economical condition, liquid money problem',
  "37": 'Complete personality, person would able to take benefit from knowledge',
  "39": 'Nuetral',
  "43": 'Good Spouse Support',
  "44": 'Court Case Involved',
  "45": 'Loan, health issues, enemies, litigation, egostick',
  "49": 'Mentally distubed, court, restless,',
  "52": 'Successful, self property,',
  "54": 'Loan, health issues, enemies, litigation, egostick',
  "58": 'Neutral',
  "59": 'Sharp mind, money minded',
  "61": 'Relationship issue ,Issue with Spouse,Expense more, less income',
  "62": 'Neutral',
  "63": 'Native gets success when they stay away from home, good economical condition, liquid money problem',
  "69": 'Scandal prone, extra marital affair,',
  "71": 'More profit from lying, Money related issue, Chance of 2 marriage',
  "72": 'Urine related problem, Joint pain, Leg shivring',
  "73": 'Complete personality, person would able to take benefit from knowledge',
  "79": 'Loyal, highly energetic',
  "81": 'Spouse health issues, issues related to government, chance to change job frequently',
  "82": 'Depression, highly caring',
  "85": 'Neutral',
  "88": 'Court Case Involved',
  "89": 'Earthquake in life, littigation',
  "91": 'Always on high place, good manifest, professional person , high respected person',
  "92": 'Person have decent amount of money, live happily on money of someone else,native might become egoistic',
  "93": 'Nuetral',
  "94": 'Mentally distubed, court, restless,',
  "95": 'Sharp mind, money minded',
  "96": 'Scandal prone, extra marital affair,',
  "97": 'Loyal, highly energetic',
  "98": 'Earthquake in life, littigation'
};

const nameInput = document.getElementById('fname');
const numberInput = document.getElementById('phone');
const dobInput = document.getElementById('birthday');
const submitBtn = document.getElementById('submit');
const predictionArea = document.getElementById('predictionarea');

document.addEventListener('DOMContentLoaded', function() {
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const phoneNumber = numberInput.value; // Get the phone number
        showPredictions(phoneNumber); // Call the function to show predictions
    });
});

function showPredictions(phoneNumber) {
  const predictionArea = document.getElementById('predictionarea');
  predictionArea.innerHTML = ''; // Clear previous predictions

  for (let i = 0; i < phoneNumber.length - 1; i++) {
    const pair = phoneNumber.substring(i, i + 2); // Get the pair of digits
    const predictionText = data[pair] ? `Prediction for ${pair}: ${data[pair]}` : `Neutral for ${pair}`;
    
    const predictionElement = document.createElement('p'); // Create a new paragraph element
    predictionElement.textContent = predictionText; // Set the text content
    predictionArea.appendChild(predictionElement); // Append to the prediction area
  }

  // Calculate the sum of the digits in the phone number
  const sum = phoneNumber.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  const sumPredictionText = data[sum] ? `Prediction for Total sum ${sum}: ${data[sum]}` : `No prediction found for Total sum ${sum}`;
  
  const sumPredictionElement = document.createElement('p'); // Create a new paragraph element for the sum prediction
  sumPredictionElement.textContent = sumPredictionText; // Set the text content
  predictionArea.appendChild(sumPredictionElement); // Append to the prediction area
}


