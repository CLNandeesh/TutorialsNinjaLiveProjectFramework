package steps;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import base.Base;
import config.PropertyFileReader;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import framework.Browser;
import util.PathHelper;

public class Hooks {

	private static Logger log = Logger.getLogger(Hooks.class);

	@Before
	public void setUp(Scenario scenario) {
		log.info("Scenario Started: " + scenario.getName());
		PropertyConfigurator
				.configure(PathHelper.getResourcePath("/src/test/resources/configurationFiles/log4j.properties"));
		Base.reader = new PropertyFileReader();
		Browser.startBrowser();
		Browser.maximize();
	}

	@After
	public void closeBrowser(Scenario scenario) {
		if (scenario.isFailed()) {
			scenario.embed(Browser.takeScreenshot(), "image/png");
		}
		log.info("Scenario Completed: " + scenario.getName());
		log.info("Scenario Status is: " + scenario.getStatus());
		Base.driver.quit();
	}

}