// Allow us to call JSON files
require('./json_include');

var studentLoanRates = require('./data/student_loan_rates.json'),
    StudentLoanCalculator;

StudentLoanCalculator = function(income){
    if(isNaN(parseFloat(income))){
        throw new Error('Specify an income to calculate Student Loan');
    }
    
    var studentLoanRatePercent = studentLoanRates.ratePercent;
    var studentLoanStartingLimit = studentLoanRates.startingLimit;
    var deduction = 0;
    
    if(income >= studentLoanStartingLimit){
        deductableAmount = income - studentLoanStartingLimit;
        deduction = deductableAmount * studentLoanRatePercent / 100;
    }
    return deduction;
};

module.exports = StudentLoanCalculator;