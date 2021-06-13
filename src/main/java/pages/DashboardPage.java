package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;

public class DashboardPage {

	public DashboardPage()
	{
		PageFactory.initElements(Base.driver, this);
	}
	@FindBy(xpath = "//h2[text()='My Account']")
	public static WebElement dashboardText;

	@FindBy(xpath = "//div[contains(text(),' Warning: No match')]")
	public static WebElement loginPageText;

	public static boolean verifyDashboardforValidCred() {
		return Elements.isDisplayed(dashboardText);
	}

	public static boolean verifyDashboardforInvalidCred() {
		return Elements.isDisplayed(loginPageText);
	}

}
