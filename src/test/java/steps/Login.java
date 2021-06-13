package steps;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DashboardPage;
import pages.ForgotPasswordPage;
import pages.HeadersPage;
import pages.LoginPage;

public class Login {

	LoginPage loginPage = new LoginPage();
	DashboardPage dashboardPage = new DashboardPage();
	ForgotPasswordPage forgotPasswordPage=new ForgotPasswordPage();

	@Given("^I moved to Login page$")
	public void i_moved_to_Login_page() throws Throwable {
		HeadersPage.clickMyAccountLink();
		HeadersPage.clickLoginLink();
	}

	@When("^I entered \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_entered_and(String un, String pw) throws Throwable {
		LoginPage.setUserNamePassword(un, pw);
	}

	@When("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
		LoginPage.clickLoginButton();
	}

	@Then("^I \"([^\"]*)\" to dashboard for \"([^\"]*)\"$")
	public void i_to_dashboard_for(String arg1, String status) throws Throwable {

		if (status.equalsIgnoreCase("pass")) {
			Assert.assertTrue(DashboardPage.verifyDashboardforValidCred());
		}

		else {
			Assert.assertTrue(DashboardPage.verifyDashboardforInvalidCred());
		}
	}
	
	@When("^I click forgot password link$")
	public void i_click_forgot_password_link() throws Throwable {
		LoginPage.clickForgetPasswordLink();
	}

	@When("^I entered \"([^\"]*)\" mail id$")
	public void i_entered_mail_id(String arg1) throws Throwable {
		ForgotPasswordPage.setEmailAddressForForgotPassword(arg1);
		ForgotPasswordPage.clickContinue();
	}

	@Then("^I should get sucess message$")
	public void i_should_get_sucess_message() throws Throwable {
		
		//Thread.sleep(20000);
	    Assert.assertTrue(LoginPage.verifyForgotPasswordConfirmationText());
	}


}
