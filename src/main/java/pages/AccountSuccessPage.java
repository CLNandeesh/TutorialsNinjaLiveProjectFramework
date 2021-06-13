package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;

public class AccountSuccessPage {

	public AccountSuccessPage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(xpath = "//a[text()='Success']")
	public static WebElement sucessLink;

	@FindBy(xpath = "//div[text()='First Name must be between 1 and 32 characters!']")
	public static WebElement errorLink;

	public static boolean verifyDashboard() {
		return Elements.isDisplayed(sucessLink);

	}

	public static boolean verifyNotDashboard()
	{
		return Elements.isDisplayed(errorLink);
	}

}
