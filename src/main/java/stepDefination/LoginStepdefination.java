package stepDefination;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
//import org.openqa.selenium.interactions.Actions;

//import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
public class LoginStepdefination {

	 WebDriver dr;
	 
	 	
	 @Given("^user is already on Login Page$")
	 public void user_is_already_on_Login_Page() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 System.setProperty("webdriver.chrome.driver","G:\\Driver Source Path\\newdriver\\chromedriver.exe");
	 	 dr = new ChromeDriver();
	 	 dr.get("https://www.freecrm.com/index.html");
	     throw new PendingException();
	 }

	 @When("^title of login page is Free CRM$")
	 public void title_of_login_page_is_Free_CRM() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 String title = dr.getTitle();
		 System.out.println(title);
		 Assert.assertEquals("Free CRM in the cloud software boosts sales", title);
	     throw new PendingException();
	 }

	 @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_enters_and(String arg1, String arg2) throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 dr.findElement(By.name("username")).sendKeys("demo");
		 dr.findElement(By.xpath("//input[@type='password']")).sendKeys("1234");
	     throw new PendingException();
	 }

	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 dr.findElement(By.xpath("//input[@class='btn btn-small']")).click();
			Thread.sleep(2000);
	     throw new PendingException();
	 }

	 @Then("^Verify logout link$")
	 public void verify_logout_link() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 assertTrue(dr.findElement(By.linkText("Logout")).isDisplayed());
		    // Click on Logout
		    dr.findElement(By.xpath("//a[@href='https://www.freecrm.com/index.cfm?logout=1']")).click();
		    Thread.sleep(2000);
		    // Close browser
		    dr.quit();
	     throw new PendingException();
	 }

	 
//	 	 @Given("^user is already on Login Page$")
//	 	 public void user_already_on_login_page(){
//	 	 System.setProperty("webdriver.chrome.driver","G:\\Driver Source Path\\newdriver\\chromedriver.exe");
//	 	 dr = new ChromeDriver();
//	 	 dr.get("https://www.freecrm.com/index.html");
//	 	 }
//	 	
//		
//		
//		 @When("^title of login page is Free CRM$")
//		 public void title_of_login_page_is_free_CRM(){
//		 String title = dr.getTitle();
//		 System.out.println(title);
//		 Assert.assertEquals("Free CRM in the cloud software boosts sales", title);
//		 }
//		
//		 //Reg Exp:
//		 //1. \"([^\"]*)\"
//		 //2. \"(.*)\"
//		 
//		 @Then("^user enters username and password $")
//		 public void user_enters_username_and_password()throws Throwable{
//		 dr.findElement(By.name("username")).sendKeys("demo");
//		 dr.findElement(By.xpath("//input[@type='password']")).sendKeys("1234");
//		 }
//		
//		 @Then("^user clicks on login button$")
//		 public void user_clicks_on_login_button() throws Exception {
//			 //dr.findElement(By.cssSelector("button.actionButton")).click();
//			 dr.findElement(By.xpath("//input[@class='btn btn-small']")).click();
//			Thread.sleep(2000);
//		 }
//		 
//		
//
//		
//		 @Then("^Verify logout link$")
//			public void verify_logout_link() throws Throwable {
//			    assertTrue(dr.findElement(By.linkText("Logout")).isDisplayed());
//			    // Click on Logout
//			    dr.findElement(By.xpath("//a[@href='https://www.freecrm.com/index.cfm?logout=1']")).click();
//			    Thread.sleep(2000);
//			    // Close browser
//			    dr.quit();
//		 }


		
		
		
	
	}

