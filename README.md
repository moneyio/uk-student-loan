UK Student Loan Calculator
=============

[![Build Status](https://travis-ci.org/moneyio/uk-student-loan.png?branch=master)](https://travis-ci.org/moneyio/uk-student-loan)

A standalone UK student loan calculator. See https://www.gov.uk/student-finance/repayments for more details (notice Money IO has no affiliation).

Usage options:

    var StudentLoanCalculator = require('uk-student-loan');
    var annualStudentLoanRepayment = StudentLoanCalculator(40000);

Resulting in `annualStudentLoanRepayment`:

    1710
