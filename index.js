const data = {
  "11": 'Good family support',
  "12": 'Saving person, helpful life partner, glowing face',
  "13": 'Highly knowledgeable, powerful speech, popular',
  "14": 'Government related issue, loan, debt, health issues',
  "15": 'Good brain, benefit from father side, famous father recognition',
  "16": 'Married life issues, spouse health issues, unsatisfied income',
  "17": 'Government job, solid contact from highly placed people',
  "18": 'Father health issues, government job issues, bad relation with father',
  "19": 'Freedom lover, don\'t like restrictions',
  "21": 'Saving person, helpful life partner, glowing face',
  "22": 'Emotional weak, sleeping issues',
  "23": 'More enemies, stay away from children',
  "24": 'Patience to achieve something, destructive thinking',
  "25": 'Successful, self property, Sleeping issues, multiple source of income',
  "26": 'Neutral',
  "27": 'Urine related problem, Joint pain, Leg shivering',
  "28": 'Depression, highly caring',
  "29": 'Person has a decent amount of money, lives happily on money of someone else, native might become egoistic',
  "31": 'Highly knowledgeable, powerful speech, popular',
  "32": 'More enemies, stay away from children',
  "33": 'Knowledgeable, growth, liver-related problem',
  "34": 'Good Spouse Support',
  "36": 'Native gets success when they stay away from home, good economical condition, liquid money problem',
  "37": 'Complete personality, person would be able to take benefit from knowledge',
  "39": 'More effort, less money',
  "41": 'Government related issue, loan, debt, health issues',
  "42": 'Patience to achieve something, destructive thinking',
  "43": 'Good Spouse Support',
  "44": 'Court Case Involved',
  "45": 'Hospital rounds',
  "46": 'Multiple affairs, skin issues, bad compound',
  "47": 'Honest, brilliant',
  "48": 'Incurable problem, deficiency of sexual pleasure, blood disease',
  "49": 'Do risky work, uniform work, criminal mind',
  "51": 'Good brain, benefit from father side, famous father recognition',
  "52": 'Successful, self property, Sleeping issues, multiple source of income',
  "54": 'Hospital rounds',
  "56": 'Hurry to ask for money, business mind, temple or superstore near house as a landmark',
  "57": 'Speaker, writer, public relation, good expressive person, lots of people come to them for advice, good consultant',
  "58": 'Money stuck, calculator mind, person doing work related to money/finance',
  "59": 'Straightforward, sharp mind, blunt language (outspoken)',
  "61": 'Married life issues, spouse health issues, unsatisfied income',
  "62": 'Neutral',
  "63": 'Native gets success when they stay away from home, good economical condition, liquid money problem',
  "64": 'Multiple affairs, skin issues, bad compound',
  "65": 'Hurry to ask for money, business mind, temple or superstore near house as a landmark',
  "67": 'Chance of love marriage, issue in spouse health, chance of disturbed married life',
  "68": 'Eye issues, knee pain, disease in any body organ',
  "69": 'Good management skills, good planner, opposite sex involvement',
  "71": 'Government job, solid contact from highly placed people',
  "72": 'Urine related problem, Joint pain, Leg shivering',
  "73": 'Complete personality, person would be able to take benefit from knowledge',
  "74": 'Honest, brilliant',
  "75": 'Speaker, writer, public relation, good expressive person, lots of people come to them for advice, good consultant',
  "76": 'Chance of love marriage, issue in spouse health, chance of disturbed married life',
  "78": 'Healer, sad, idealistic, solves any problem by own power',
  "79": 'Success after separation from father, good for occult',
  "81": 'Father health issues, government job issues, bad relation with father',
  "82": 'Depression, highly caring',
  "84": 'Incurable problem, deficiency of sexual pleasure, blood disease',
  "85": 'Money stuck, calculator mind, person doing work related to money/finance',
  "86": 'Eye issues, knee pain, disease in any body organ',
  "87": 'Healer, sad, idealistic, solves any problem by own power',
  "88": 'Court Case Involved',
  "89": 'Argumentative, works with principles, person might get chronic health issues in later part of life',
  "91": 'Freedom lover, don\'t like restrictions',
  "92": 'Person has a decent amount of money, lives happily on money of someone else, native might become egoistic',
  "93": 'More effort, less money',
  "94": 'Do risky work, uniform work, criminal mind',
  "95": 'Good communication, destroys relationships due to bad speech, person of science or commerce stream',
  "96": 'Good management skills, good planner, opposite sex involvement',
  "97": 'Success after separation from father, good for occult',
  "98": 'Argumentative, works with principles, person might get chronic health issues in later part of life',
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