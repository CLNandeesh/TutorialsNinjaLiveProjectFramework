package util;

import org.apache.commons.lang3.RandomStringUtils;

public class Utils {
	
	public static String randomStringGeneartor() {
		String s= RandomStringUtils.randomAlphanumeric(3, 5);
		return s+"@gmail.com";
	}

}
