package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.Base;
import framework.Elements;

public class HeadersPage {

	public HeadersPage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(xpath = "//span[text()='My Account']")
	public static WebElement myAccountLink;

	@FindBy(xpath = "//a[text()='Register']")
	public static WebElement registerLink;

	@FindBy(xpath = "(//a[text()='Login'])[1]")
	public static WebElement loginLink;

	public static void clickMyAccountLink() {
		Elements.click(HeadersPage.myAccountLink);
	}

	public static void clickRegisterLink() {
		Elements.click(HeadersPage.registerLink);
	}

	public static void clickLoginLink() {
		Elements.click(HeadersPage.loginLink);
	}

}
