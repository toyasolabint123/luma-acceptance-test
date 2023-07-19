$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create  account using valid email",
  "description": "",
  "id": "account-management;create--account-using-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the Create New Customer Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Create an Account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "my Account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "account-management;create--account-using-valid-email;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 12,
      "id": "account-management;create--account-using-valid-email;;1"
    },
    {
      "cells": [
        "Nike",
        "Olabintan",
        "toyasolabint2@yahoo.com",
        "Abc12345",
        "Abc12345"
      ],
      "line": 13,
      "id": "account-management;create--account-using-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Create  account using valid email",
  "description": "",
  "id": "account-management;create--account-using-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the Create New Customer Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Nike\" \"Olabintan\" \"toyasolabint2@yahoo.com\" \"Abc12345\" \"Abc12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Create an Account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "my Account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnTheCreateNewCustomerAccountPage()"
});
formatter.result({
  "duration": 8362193300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 13
    },
    {
      "val": "Olabintan",
      "offset": 20
    },
    {
      "val": "toyasolabint2@yahoo.com",
      "offset": 32
    },
    {
      "val": "Abc12345",
      "offset": 58
    },
    {
      "val": "Abc12345",
      "offset": 69
    }
  ],
  "location": "AccountManagementSteps.userEnters(String,String,String,String,String)"
});
formatter.result({
  "duration": 712159200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksOnCreateAnAccount()"
});
formatter.result({
  "duration": 2239109200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 21308400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Create account using duplicate email",
  "description": "",
  "id": "account-management;create-account-using-duplicate-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@DuplicateCreateAccount"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the Create New Customer Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Create an Account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "my Account page is not displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "account-management;create-account-using-duplicate-email;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 23,
      "id": "account-management;create-account-using-duplicate-email;;1"
    },
    {
      "cells": [
        "Nike",
        "Olabintan",
        "toyasolabint2@yahoo.com",
        "Abc12345",
        "Abc12345"
      ],
      "line": 24,
      "id": "account-management;create-account-using-duplicate-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Create account using duplicate email",
  "description": "",
  "id": "account-management;create-account-using-duplicate-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@DuplicateCreateAccount"
    },
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the Create New Customer Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters \"Nike\" \"Olabintan\" \"toyasolabint2@yahoo.com\" \"Abc12345\" \"Abc12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Create an Account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "my Account page is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnTheCreateNewCustomerAccountPage()"
});
formatter.result({
  "duration": 4411484400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 13
    },
    {
      "val": "Olabintan",
      "offset": 20
    },
    {
      "val": "toyasolabint2@yahoo.com",
      "offset": 32
    },
    {
      "val": "Abc12345",
      "offset": 58
    },
    {
      "val": "Abc12345",
      "offset": 69
    }
  ],
  "location": "AccountManagementSteps.userEnters(String,String,String,String,String)"
});
formatter.result({
  "duration": 819313900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksOnCreateAnAccount()"
});
formatter.result({
  "duration": 1395263200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsNotDisplayed()"
});
formatter.result({
  "duration": 71147600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Sign in using valid email",
  "description": "",
  "id": "account-management;sign-in-using-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user is on the Customer Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"\u003cEmail\u003e\" \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Logged in page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "account-management;sign-in-using-valid-email;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 34,
      "id": "account-management;sign-in-using-valid-email;;1"
    },
    {
      "cells": [
        "toyasolabint2@yahoo.com",
        "Abc12345"
      ],
      "line": 35,
      "id": "account-management;sign-in-using-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Sign in using valid email",
  "description": "",
  "id": "account-management;sign-in-using-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 26,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user is on the Customer Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"toyasolabint2@yahoo.com\" \"Abc12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Logged in page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnTheCustomerLoginPage()"
});
formatter.result({
  "duration": 6292563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toyasolabint2@yahoo.com",
      "offset": 13
    },
    {
      "val": "Abc12345",
      "offset": 39
    }
  ],
  "location": "AccountManagementSteps.userEnters(String,String)"
});
formatter.result({
  "duration": 276019000,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1299668900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.loggedInPageIsDisplayed()"
});
formatter.result({
  "duration": 58537700,
  "status": "passed"
});
});