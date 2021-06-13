package base;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import config.ConfigurationReader;

public class Base {
	
	public static Logger log=Logger.getLogger(Base.class);
	
	public static WebDriver driver;
	public static ConfigurationReader reader;
	


}
