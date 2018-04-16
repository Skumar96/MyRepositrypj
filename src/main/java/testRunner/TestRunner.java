package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "G:\\Seleniu_Scripts_feb18\\CucumberAid\\src\\main\\java\\features\\login1.feature", //the path of the feature files
			glue={"stepDefination"}, //the path of the step definition files
			plugin= {"pretty","html:test-outout"},
			//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}
			tags = {"~@RegressionTest"}
			//			plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
//			monochrome = true, //display the console output in a proper readable format
//			strict = true, //it will check if any step is not defined in step definition file
			//dryRun = true //to check the mapping is proper between feature file and step def file
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)

public class TestRunner {
	
}

	//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
		//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest