package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;

public class ForgotPasswordPage {
	
	public ForgotPasswordPage()
	{
		PageFactory.initElements(Base.driver, this);
	}
	
	@FindBy(id="input-email")
	public static WebElement emailAddressTextBox;
	
	@FindBy(xpath="//input[@value='Continue']")
	public static WebElement continueButton;
	
	
	public static void setEmailAddressForForgotPassword(String email)
	{
		Elements.TypeTextIfElementPresent(emailAddressTextBox, email);
	}
	
	public static void clickContinue()
	{
		Elements.click(continueButton);
	}

}
