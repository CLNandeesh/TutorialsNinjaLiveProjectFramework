package steps;

import org.testng.Assert;

import base.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.Elements;
import pages.AccountSuccessPage;
import pages.HeadersPage;
import pages.RegisterPage;

public class Register {

	HeadersPage headersPage = new HeadersPage();
	RegisterPage registerPage = new RegisterPage();
	AccountSuccessPage accountSuccessPage = new AccountSuccessPage();

	@Given("^I launch Application$")
	public void i_launch_Application() throws Throwable {

		Base.driver.get(Base.reader.getUrl());

	}

	@Given("^I moved to Registration page$")
	public void i_moved_to_Registration_page() throws Throwable {
		HeadersPage.clickMyAccountLink();
		HeadersPage.clickRegisterLink();

	}

	@When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_enter(String fn, String ln, String email, String telephone, String password) throws Throwable {
		RegisterPage.enterDetails(fn, ln, email, telephone, password);

	}

	@When("^I select policy$")
	public void i_select_policy() throws Throwable {
		RegisterPage.acceptPolicy();
	}

	@When("^I click on continue button$")
	public void i_click_on_continue_button() throws Throwable {
		RegisterPage.clickContinue();
	}

	@Then("^new user \"([^\"]*)\" be created$")
	public void new_user_be_created(String status) throws Throwable {

		if (status.equalsIgnoreCase("should")) {
			Assert.assertTrue(AccountSuccessPage.verifyDashboard());
		} else if (status.equalsIgnoreCase("should not")) {
			Assert.assertTrue(AccountSuccessPage.verifyNotDashboard());
		}
	}

}
