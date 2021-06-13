package config;

import java.io.IOException;
import java.util.Properties;

import util.PathHelper;

public class PropertyFileReader implements ConfigurationReader {

	Properties properties = null;

	public PropertyFileReader() {
		properties = new Properties();
		try {
			properties.load(
					PathHelper.getInputStreamResourcePath("/src/test/resources/configurationFiles/config.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public String getUrl() {
		return properties.getProperty("url");
	}

	public String getBrowser() {
		return properties.getProperty("browser");
	}

	public int getPageLoadTimeOut() {
		return Integer.parseInt(properties.getProperty("PageLoadTimeOut"));
	}

}