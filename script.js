
var tip;
var allTips = new Array();
var totalAmounts = new Array;

var tipCalculator = function(billAmount) {
	switch (true) {
		case billAmount < 50:
		  tip = billAmount * 0.2;
		  allTips.push(tip);
		  totalAmounts.push(billAmount + tip);
		  break;
		case billAmount >= 50 && billAmount <= 200:
		  tip = billAmount * 0.15;
		  allTips.push(tip);
		  totalAmounts.push(billAmount + tip);
		  break;
		default:
		  tip = billAmount * 0.1;
		  allTips.push(tip);
		  totalAmounts.push(billAmount + tip);
	}
}


tipCalculator(100);
tipCalculator(300);
tipCalculator(40);

console.log(allTips);
console.log(totalAmounts);