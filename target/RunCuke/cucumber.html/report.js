$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Login with valid and invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@one"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I entered \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I \"\u003cnavigate\u003e\" to dashboard for \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status",
        "navigate"
      ],
      "line": 13,
      "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com",
        "admin",
        "pass",
        "navigate"
      ],
      "line": 14,
      "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com",
        "admin123",
        "fail",
        "not navigate"
      ],
      "line": 15,
      "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12760508500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Login with valid and invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@one"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I \"navigate\" to dashboard for \"pass\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 6376639400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 810345000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 45
    }
  ],
  "location": "Login.i_entered_and(String,String)"
});
formatter.result({
  "duration": 352100200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_Login_button()"
});
formatter.result({
  "duration": 481931200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "navigate",
      "offset": 3
    },
    {
      "val": "pass",
      "offset": 31
    }
  ],
  "location": "Login.i_to_dashboard_for(String,String)"
});
formatter.result({
  "duration": 74882800,
  "status": "passed"
});
formatter.after({
  "duration": 909129300,
  "status": "passed"
});
formatter.before({
  "duration": 5966517700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Login with valid and invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;validate-login-with-valid-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@one"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I \"not navigate\" to dashboard for \"fail\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 4610257800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 669617400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    },
    {
      "val": "admin123",
      "offset": 45
    }
  ],
  "location": "Login.i_entered_and(String,String)"
});
formatter.result({
  "duration": 306421800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_Login_button()"
});
formatter.result({
  "duration": 314501400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not navigate",
      "offset": 3
    },
    {
      "val": "fail",
      "offset": 35
    }
  ],
  "location": "Login.i_to_dashboard_for(String,String)"
});
formatter.result({
  "duration": 43970500,
  "status": "passed"
});
formatter.after({
  "duration": 761114200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate user cannot able to login without username and/or password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I \"\u003cnavigate\u003e\" to dashboard for \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status",
        "navigate"
      ],
      "line": 26,
      "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;1"
    },
    {
      "cells": [
        "",
        "admin",
        "fail",
        "not navigate"
      ],
      "line": 27,
      "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;2"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com",
        "",
        "fail",
        "not navigate"
      ],
      "line": 28,
      "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;3"
    },
    {
      "cells": [
        "",
        "",
        "fail",
        "not navigate"
      ],
      "line": 29,
      "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4837352100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate user cannot able to login without username and/or password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@two"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered \"\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I \"not navigate\" to dashboard for \"fail\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 5531236700,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 689538100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "Login.i_entered_and(String,String)"
});
formatter.result({
  "duration": 260249500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_Login_button()"
});
formatter.result({
  "duration": 366605500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not navigate",
      "offset": 3
    },
    {
      "val": "fail",
      "offset": 35
    }
  ],
  "location": "Login.i_to_dashboard_for(String,String)"
});
formatter.result({
  "duration": 53285900,
  "status": "passed"
});
formatter.after({
  "duration": 759255900,
  "status": "passed"
});
formatter.before({
  "duration": 2244837100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate user cannot able to login without username and/or password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@two"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I \"not navigate\" to dashboard for \"fail\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1290207200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 667234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "Login.i_entered_and(String,String)"
});
formatter.result({
  "duration": 298124900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_Login_button()"
});
formatter.result({
  "duration": 363689000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not navigate",
      "offset": 3
    },
    {
      "val": "fail",
      "offset": 35
    }
  ],
  "location": "Login.i_to_dashboard_for(String,String)"
});
formatter.result({
  "duration": 51715200,
  "status": "passed"
});
formatter.after({
  "duration": 1164320500,
  "status": "passed"
});
formatter.before({
  "duration": 1889287500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate user cannot able to login without username and/or password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-cannot-able-to-login-without-username-and/or-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@two"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I \"not navigate\" to dashboard for \"fail\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1546845300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 729510400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "Login.i_entered_and(String,String)"
});
formatter.result({
  "duration": 268831500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_Login_button()"
});
formatter.result({
  "duration": 333188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not navigate",
      "offset": 3
    },
    {
      "val": "fail",
      "offset": 35
    }
  ],
  "location": "Login.i_to_dashboard_for(String,String)"
});
formatter.result({
  "duration": 42014000,
  "status": "passed"
});
formatter.after({
  "duration": 1133906900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Validate user can able to reset password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@login"
    },
    {
      "line": 31,
      "name": "@three"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I entered \"\u003cusername\u003e\" mail id",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should get sucess message",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 40,
      "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;1"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com"
      ],
      "line": 41,
      "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;2"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com"
      ],
      "line": 42,
      "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;3"
    },
    {
      "cells": [
        "nandeesh.apjkalam@gmail.com"
      ],
      "line": 43,
      "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1972542000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Validate user can able to reset password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 31,
      "name": "@three"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" mail id",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should get sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1619753300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 614339200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_forgot_password_link()"
});
formatter.result({
  "duration": 343746500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_mail_id(String)"
});
formatter.result({
  "duration": 624739600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_get_sucess_message()"
});
formatter.result({
  "duration": 43409300,
  "status": "passed"
});
formatter.after({
  "duration": 1171832700,
  "status": "passed"
});
formatter.before({
  "duration": 1712540300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate user can able to reset password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 31,
      "name": "@three"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" mail id",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should get sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1315223600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 744577900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_forgot_password_link()"
});
formatter.result({
  "duration": 373686400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_mail_id(String)"
});
formatter.result({
  "duration": 559829400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_get_sucess_message()"
});
formatter.result({
  "duration": 42738900,
  "status": "passed"
});
formatter.after({
  "duration": 1140160300,
  "status": "passed"
});
formatter.before({
  "duration": 2275972300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate user can able to reset password",
  "description": "",
  "id": "login-functionality-scenarios;validate-user-can-able-to-reset-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 31,
      "name": "@three"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I moved to Login page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click forgot password link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I entered \"nandeesh.apjkalam@gmail.com\" mail id",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should get sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1629848800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_moved_to_Login_page()"
});
formatter.result({
  "duration": 605516300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_forgot_password_link()"
});
formatter.result({
  "duration": 296836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandeesh.apjkalam@gmail.com",
      "offset": 11
    }
  ],
  "location": "Login.i_entered_mail_id(String)"
});
formatter.result({
  "duration": 619109500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_get_sucess_message()"
});
formatter.result({
  "duration": 40790600,
  "status": "passed"
});
formatter.after({
  "duration": 728918200,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 2,
  "name": "Register functionality scenarios",
  "description": "",
  "id": "register-functionality-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate new user can be registered with all details",
  "description": "",
  "id": "register-functionality-scenarios;validate-new-user-can-be-registered-with-all-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I moved to Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cfn\u003e\" \"\u003cln\u003e\" \"\u003cemail\u003e\" \"\u003ctelephone\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select policy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new user \"should\" be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "register-functionality-scenarios;validate-new-user-can-be-registered-with-all-details;",
  "rows": [
    {
      "cells": [
        "fn",
        "ln",
        "email",
        "telephone",
        "password"
      ],
      "line": 13,
      "id": "register-functionality-scenarios;validate-new-user-can-be-registered-with-all-details;;1"
    },
    {
      "cells": [
        "appu",
        "rajkumar",
        "appu",
        "805577545",
        "appu123"
      ],
      "line": 14,
      "id": "register-functionality-scenarios;validate-new-user-can-be-registered-with-all-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2220072800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate new user can be registered with all details",
  "description": "",
  "id": "register-functionality-scenarios;validate-new-user-can-be-registered-with-all-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I moved to Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"appu\" \"rajkumar\" \"appu\" \"805577545\" \"appu123\"",
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
  "name": "I select policy",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "new user \"should\" be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1202753100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_moved_to_Registration_page()"
});
formatter.result({
  "duration": 828390800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appu",
      "offset": 9
    },
    {
      "val": "rajkumar",
      "offset": 16
    },
    {
      "val": "appu",
      "offset": 27
    },
    {
      "val": "805577545",
      "offset": 34
    },
    {
      "val": "appu123",
      "offset": 46
    }
  ],
  "location": "Register.i_enter(String,String,String,String,String)"
});
formatter.result({
  "duration": 824917100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_policy()"
});
formatter.result({
  "duration": 152064100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_continue_button()"
});
formatter.result({
  "duration": 20587823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 10
    }
  ],
  "location": "Register.new_user_be_created(String)"
});
formatter.result({
  "duration": 136098700,
  "status": "passed"
});
formatter.after({
  "duration": 812747100,
  "status": "passed"
});
formatter.before({
  "duration": 2020053700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate new user cannot be registered without mandatory inputs",
  "description": "",
  "id": "register-functionality-scenarios;validate-new-user-cannot-be-registered-without-mandatory-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I moved to Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select policy",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "new user \"should not\" be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_Application()"
});
formatter.result({
  "duration": 1854644600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_moved_to_Registration_page()"
});
formatter.result({
  "duration": 817620200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_policy()"
});
formatter.result({
  "duration": 103654000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_continue_button()"
});
formatter.result({
  "duration": 20545274600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should not",
      "offset": 10
    }
  ],
  "location": "Register.new_user_be_created(String)"
});
formatter.result({
  "duration": 101076700,
  "status": "passed"
});
formatter.after({
  "duration": 797311300,
  "status": "passed"
});
});