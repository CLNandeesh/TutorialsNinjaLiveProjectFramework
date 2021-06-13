package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;

public class LoginPage {

	public LoginPage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(xpath = "//input[@placeholder='E-Mail Address']")
	public static WebElement userNameTextBox;
	
	@FindBy(xpath = "//input[@placeholder='Password']")
	public static WebElement passwordTextBox;
	
	@FindBy(xpath = "//input[@value='Login']")
	public static WebElement loginButton;
	
	@FindBy(xpath = "(//a[text()='Forgotten Password'])[1]")
	public static WebElement forgetPasswordLink;
	
	@FindBy(xpath="//div[contains(text(),'email address.')]")
	public static WebElement forgotPasswordConfirmationLabel;
	
	
	public static void setUserNamePassword(String un,String pw)
	{
		Elements.TypeTextIfElementPresent(userNameTextBox, un);
		Elements.TypeTextIfElementPresent(passwordTextBox, pw);
	}
	
	
	public static void clickLoginButton()
	{
		Elements.clickOnlyIfElementPresent(loginButton);
	}
	
	public static void clickForgetPasswordLink()
	{
		Elements.clickOnlyIfElementPresent(forgetPasswordLink);
	}
	
	public static boolean verifyForgotPasswordConfirmationText()
	{
		return Elements.isDisplayed(forgotPasswordConfirmationLabel);
	}
	
}
