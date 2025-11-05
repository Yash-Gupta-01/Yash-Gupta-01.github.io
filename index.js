const data = {
  "11": 'Good family support',
  "12": 'Saving person, helpful life partner, glowing face',
  "13": 'Highly knowledgeable, powerful speech, popular, good adviser, respectful, good for students, good for MNCs',
  "14": 'Government related issue, loan, debt, health issues',
  "15": 'Good brain, benefit from father side, famous father recognition',
  "16": 'Troublesome, Married life issues, spouse health issues, unsatisfied income, job loss, instability in career, less income, heart related/kidney, dialysis',
  "17": 'Money related work is never stopped, Chance of 2 marriage, more profit from lying, there is someone in close who is doing govt job, solid contact from highly peoples, good in network and mlm',
  "18": 'Father health issues, government job issues, bad relation with father, spouse health issues, need to change job frequently',
  "19": 'Freedom lover, don\'t like restrictions, you own what you want, always a high place, leadership type',
  "21": 'Over expenses, helpful life partner, glowing face',
  "22": 'Emotional weak, sleeping issues',
  "23": 'Win over enemies, extra marital affairs/multiple relationship, child happiness issues, child birth issues, baby conceive issues, late marriage',
  "24": 'Patience to achieve something, destructive thinking, depression tendency, negative thoughts, moody nature, suicide, addiction, brain is working almost 24 hours',
  "25": 'Interested in occult science (astrology/numerology/healing/tarot/PLR), Healing in hand, blessed with magical power, air travelling',
  "26": 'Never give to students, destruction, hurdles gap in education problem with mother in law, childbirth issues, super convincing power, ran after money, formula imbalance, auto new disease, multiple relationship chance, less sperm count, period disturbance in females',
  "27": 'Joints pain, muscle/back/neck problems, Problems in profession ups and down, reproductive organ related disease, urine disease/UTI',
  "28": 'Partnership not suitable, depression, mental problem, suicide tendency, inferior feeling, jealous, need to spend money on medicine hospital, 2 marriage is in a family',
  "29": 'Person has a decent amount of money, lives happily on money of someone else, native might become egoistic',
  "31": 'Highly knowledgeable, powerful speech, popular, good adviser, respectful, good for students, good for MNCs',
  "32": 'Win over enemies, extra marital affairs/multiple relationship, child happiness issues, child birth issues, baby conceive issues, late marriage',
  "33": 'Knowledgeable, growth, liver-related problem',
  "34": 'Breathing respiration problems like asthma bronchitis and lungs, children who have issue with parents are related disease, paralysis, paralysis in the family, less confidence, stubborn',
  "35": 'Super intelligent, wise, social, traveler, stay away from first home/native land, online work, work from home',
  "36": 'Multi talented, religious, follow strict rule and regulations, good deep knowledge, self respect is very important',
  "37": 'Bring you on the top in your field, financial support sources, good for education, strong intention for work, good for Uppal sign, research field, ph.d, doctorate, scientist',
  "38": 'Property and sales fields would be beneficial, real estate, counselor, astrologer, radiator, stigmature, Ziddi, high moral values, married life unsatisfactory, divorce, early death of life partner',
  "39": 'Active, energetic, intelligent, hard workers, social service, NGOs, charity, man Samman, engineers, IT sector, technical field',
  "41": 'Government related issue, loan, debt, health issues',
  "42": 'Patience to achieve something, destructive thinking, depression tendency, negative thoughts, moody nature, suicide, addiction, brain is working almost 24 hours',
  "43": 'Breathing respiration problems like asthma bronchitis and lungs, children who have issue with parents are related disease, paralysis, paralysis in the family, less confidence, stubborn',
  "44": 'Court Case Involved',
  "45": 'Intelligent, wise, clever, sister daughter health issues, life mein problem se karni padati hai, hospital, medicine frequency',
  "46": 'Patches on skin, psoriasis, extra marital affair, many affairs relationship, childbirth issue, UTI, kidney, intercaste marriage, Avoid strictly for children',
  "47": 'Clever, smart personality, service providers, strong determination, strong will power, honest, brilliant, jugaadu, regular disappointment, frustration, cheating in relationship',
  "48": 'Incurable problem, deficiency of sexual pleasure, blood disease',
  "49": 'Uniform job, criminal minded, receptor nature, do receiver, success after hard work, bold, dabang nature',
  "51": 'Good brain, benefit from father side, famous father recognition',
  "52": 'Interested in occult science (astrology/numerology/healing/tarot/PLR), Healing in hand, blessed with magical power, air travelling',
  "53": 'Super intelligent, wise, social, traveler, stay away from first home/native land, online work, work from home',
  "54": 'Intelligent, wise, clever, sister daughter health issues, life mein problem se karni padati hai, hospital, medicine frequency',
  "56": 'Hurry to ask for money, business mind, temple or superstore near house as a landmark',
  "57": 'Speaker, writer, public relations, good expressive person, lots of people come to them for advice, good for businessman, good combination',
  "58": 'Finance loss, money stuck, calculator mind, person doing work related to money/finance',
  "59": 'Straightforward, destroy relationship through bad speech, person of science commerce stream, less relations but good once, successful businessman, technical knowledge',
  "61": 'Troublesome, Married life issues, spouse health issues, unsatisfied income, job loss, instability in career, less income, heart related/kidney, dialysis',
  "62": 'Never give to students, destruction, hurdles gap in education problem with mother in law, childbirth issues, super convincing power, ran after money, formula imbalance, auto new disease, multiple relationship chance, less sperm count, period disturbance in females',
  "63": 'Multi talented, religious, follow strict rule and regulations, good deep knowledge, self respect is very important',
  "64": 'Patches on skin, psoriasis, extra marital affair, many affairs relationship, childbirth issue, UTI, kidney, intercaste marriage, Avoid strictly for children',
  "65": 'Hurry to ask for money, business mind, temple or superstore near house as a landmark',
  "67": 'Chance of love marriage, issue in spouse health, married life not satisfaction, music lover, luxury lovers, artist, perfectionist, late marriage/homely',
  "68": 'Eye, chest, breast, heart related problem, issue in any one organ in body, health problem, suitable for surgeon, doctor, medical staff',
  "69": 'Creative mind, talented, dance choreographer, artist, good management skills, good planner, opposite sex environment, food sciences, A1 planner, party organiser, threading planner, designer',
  "71": 'Money related work is never stopped, Chance of 2 marriage, more profit from lying, there is someone in close who is doing govt job, solid contact from highly peoples, good in network and mlm',
  "72": 'Joints pain, muscle/back/neck problems, Problems in profession ups and down, reproductive organ related disease, urine disease/UTI',
  "73": 'Bring you on the top in your field, financial support sources, good for education, strong intention for work, good for Uppal sign, research field, ph.d, doctorate, scientist',
  "74": 'Clever, smart personality, service providers, strong determination, strong will power, honest, brilliant, jugaadu, regular disappointment, frustration, cheating in relationship',
  "75": 'Speaker, writer, public relations, good expressive person, lots of people come to them for advice, good for businessman, good combination',
  "76": 'Chance of love marriage, issue in spouse health, married life not satisfaction, music lover, luxury lovers, artist, perfectionist, late marriage/homely',
  "78": 'Spiritual healer, social worker, idealist, follows value, honesty, love, respect traditions, loneliness, solve any problem by their only part, not good for materialistic married life',
  "79": 'Success after separation from father, good for occult',
  "81": 'Father health issues, government job issues, bad relation with father, spouse health issues, need to change job frequently',
  "82": 'Partnership not suitable, depression, mental problem, suicide tendency, inferior feeling, jealous, need to spend money on medicine hospital, 2 marriage is in a family',
  "83": 'Property and sales fields would be beneficial, real estate, counselor, astrologer, radiator, stigmature, Ziddi, high moral values, married life unsatisfactory, divorce, early death of life partner',
  "84": 'Incurable problem, deficiency of sexual pleasure, blood disease',
  "85": 'Finance loss, money stuck, calculator mind, person doing work related to money/finance',
  "86": 'Eye, chest, breast, heart related problem, issue in any one organ in body, health problem, suitable for surgeon, doctor, medical staff',
  "87": 'Spiritual healer, social worker, idealist, follows value, honesty, love, respect traditions, loneliness, solve any problem by their only part, not good for materialistic married life',
  "88": 'Court Case Involved',
  "89": 'Argumentative but in logical way, principle is last digit, more dangerous, astrologers, consultant, service provider, advocate, brokers',
  "91": 'Freedom lover, don\'t like restrictions, you own what you want, always a high place, leadership type',
  "92": 'Person has a decent amount of money, lives happily on money of someone else, native might become egoistic',
  "93": 'Active, energetic, intelligent, hard workers, social service, NGOs, charity, man Samman, engineers, IT sector, technical field',
  "94": 'Uniform job, criminal minded, receptor nature, do receiver, success after hard work, bold, dabang nature',
  "95": 'Straightforward, destroy relationship through bad speech, person of science commerce stream, less relations but good once, successful businessman, technical knowledge',
  "96": 'Creative mind, talented, dance choreographer, artist, good management skills, good planner, opposite sex environment, food sciences, A1 planner, party organiser, threading planner, designer',
  "97": 'Success after separation from father, good for occult',
  "98": 'Argumentative but in logical way, principle is last digit, more dangerous, astrologers, consultant, service provider, advocate, brokers',
};

const mobileNumberEffect = {
  "1": 'Ego, attitude, communication',
  "2": 'Emotional, sensitive, anxiety',
  "3": 'Intelligent, knowledgeable',
  "4": 'Obstacles, gastric issues, change, Prankish Mind',
  "5": 'Stability, business mind, Good for all',
  "6": 'Luxury, travel, beauty',
  "7": 'Relationship issues, overthinking, Good for Occult',
  "8": 'Responsibility, delays, disturbance, Judgemental',
  "9": 'Anger, blood issues, good at rough work Occult, NGO, IT sector'
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
  
  // First prediction: Direct sum from data object
  const sumHeading = document.createElement('h3');
  sumHeading.textContent = 'Total Sum Prediction:';
  sumHeading.style.marginTop = '20px';
  predictionArea.appendChild(sumHeading);
  
  const sumPredictionText = data[sum] ? `Sum ${sum}: ${data[sum]}` : `No prediction found for sum ${sum}`;
  const sumPredictionElement = document.createElement('p');
  sumPredictionElement.textContent = sumPredictionText;
  predictionArea.appendChild(sumPredictionElement);
  
  // Second prediction: Reduce sum to single digit
  let reducedSum = sum;
  while (reducedSum > 9) {
    reducedSum = reducedSum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  const mobileHeading = document.createElement('h3');
  mobileHeading.textContent = 'Mobile Total Number Effect:';
  mobileHeading.style.marginTop = '20px';
  predictionArea.appendChild(mobileHeading);
  
  const mobilePredictionText = mobileNumberEffect[reducedSum] ? `Number ${reducedSum}: ${mobileNumberEffect[reducedSum]}` : `No prediction found for number ${reducedSum}`;
  const mobilePredictionElement = document.createElement('p');
  mobilePredictionElement.textContent = mobilePredictionText;
  predictionArea.appendChild(mobilePredictionElement);
}


//New code push to handle dependency issue
