/*
    Test that we are calculating student loans correctly
*/

var sys = require('sys'),
    StudentLoanCalculator = require("../lib/student_loan"),
    testCase = require('nodeunit').testCase;

module.exports = {
    'Student Loan for 15000' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.studentLoanDeduction = StudentLoanCalculator(income);
            
            callback();
        },
        tearDown: function (callback) {
            delete this.studentLoanDeduction;
            
            callback();
        },
        
        testDeduction: function (test) {
            test.equals(this.studentLoanDeduction, 0);
            test.done();
        }
    }),
    
    'Student Loan for 22000' : testCase({
        setUp: function (callback) {
            var income = 22000;
            this.studentLoanDeduction = StudentLoanCalculator(income);
            
            callback();
        },
        tearDown: function (callback) {
            delete this.studentLoanDeduction;
            
            callback();
        },
        
        testDeduction: function (test) {
            test.equals(this.studentLoanDeduction, 90);
            test.done();
        }
    }),
    
    'Student Loan for 30000' : testCase({
        setUp: function (callback) {
            var income = 30000;
            this.studentLoanDeduction = StudentLoanCalculator(income);
            
            callback();
        },
        tearDown: function (callback) {
            delete this.studentLoanDeduction;
            
            callback();
        },
        
        testDeduction: function (test) {
            test.equals(this.studentLoanDeduction, 810);
            test.done();
        }
    }),
    
    'Student Loan for 120000' : testCase({
        setUp: function (callback) {
            var income = 120000;
            this.studentLoanDeduction = StudentLoanCalculator(income);
            
            callback();
        },
        tearDown: function (callback) {
            delete this.studentLoanDeduction;
            
            callback();
        },
        testDeduction: function (test) {
            test.equals(this.studentLoanDeduction, 8910);
            test.done();
        }
    })
}