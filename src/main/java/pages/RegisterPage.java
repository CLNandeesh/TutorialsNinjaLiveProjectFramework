package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;
import util.Utils;

public class RegisterPage {

	public RegisterPage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(xpath = "//input[@placeholder='First Name']")
	public static WebElement fnameTextBox;

	@FindBy(xpath = "//input[@placeholder='Last Name']")
	public static WebElement lnameTextBox;

	@FindBy(xpath = "//input[@placeholder='E-Mail']")
	public static WebElement emailTextBox;

	@FindBy(xpath = "//input[@placeholder='Telephone']")
	public static WebElement telephoneTextBox;

	@FindBy(xpath = "//input[@placeholder='Password']")
	public static WebElement passwordTextBox;

	@FindBy(xpath = "//input[@placeholder='Password Confirm']")
	public static WebElement confirmPasswordTextBox;

	@FindBy(xpath = "//b[text()='Privacy Policy']/parent::a/following-sibling::input[1]")
	public static WebElement policyCheckbox;

	@FindBy(xpath = "//input[@value='Continue']")
	public static WebElement continueButton;

	public static void enterDetails(String fn, String ln, String email, String telephone, String password) {
		Elements.TypeTextIfElementPresent(RegisterPage.fnameTextBox, fn);
		Elements.TypeTextIfElementPresent(RegisterPage.lnameTextBox, ln);
		Elements.TypeTextIfElementPresent(RegisterPage.emailTextBox, email+Utils.randomStringGeneartor());
		Elements.TypeTextIfElementPresent(RegisterPage.telephoneTextBox, telephone);
		Elements.TypeTextIfElementPresent(RegisterPage.passwordTextBox, password);
		Elements.TypeTextIfElementPresent(RegisterPage.confirmPasswordTextBox, password);
	}

	public static void acceptPolicy() {
		Elements.click(RegisterPage.policyCheckbox);

	}

	public static void clickContinue() throws InterruptedException {
		Elements.click(RegisterPage.continueButton);

		Thread.sleep(20000);
	}
	
	

}
