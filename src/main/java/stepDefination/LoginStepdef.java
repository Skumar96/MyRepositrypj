package stepDefination;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.*;

public class LoginStepdef {
	WebDriver d;
	
	@Given("^User is on the home page$")
	public void if_user_is_on_home_page() {
		System.setProperty("webdriver.chrome.driver", "G:\\Driver Source Path\\chromedriver.exe");
		d=new ChromeDriver();
		d.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
	    // Load Web page
		d.get("https://demo.cyclos.org/");
	}

@When("^Navigate to sign in$")
public void navigate_to_sign_in() throws Exception  {
   //click on sign in
	d.findElement(By.linkText("Sign in")).click();
Thread.sleep(1000);
}

@Then("^Verify sign in page$")
public void verify_sign_in_page() {
    System.out.println(d.getTitle());
    //Assert.assertEquals("System login - Cyclos4 Communities", d.getTitle());
    Assert.assertTrue(d.getTitle().contains("System login"));
}

//@Then ("^Enter username and password$")
//	public void enter_username_password() throws Exception {
//	d.findElement(By.xpath("//span[text()='Login name']//parent::div//following::input[@type='text']")).sendKeys("demo");
//	d.findElement(By.xpath("//input[@type='password']")).sendKeys("1234");
//	Thread.sleep(1000);
//	d.findElement(By.xpath("//div[text()='Sign in']")).click();
//	Thread.sleep(2000);
//	
//	
//  }

//@Then("^user(\\d+) enters\"([^\"]*)\" and \"([^\"]*)\"$")
//public void user_enters_and(int arg1, String arg2, String arg3) throws Exception{
//   
//    ;
//}
@And ("^user1 enters \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_username_and_password(String username, String password) throws Exception{
	//dr.findElement(By.xpath("//input[@name='username']")).clear();
	d.findElement(By.name("username")).sendKeys(username);
	//dr.findElement(By.xpath("//input[@name='password']")).clear();
   d.findElement(By.name("password")).sendKeys(password);
   Thread.sleep(2000);
	d.findElement(By.xpath("//div[text()='Sign in']")).click();
	Thread.sleep(2000);
 }

@And("^Click on Account info page$")
 public void click_account_info() throws Exception {
	d.findElement(By.xpath("//div[text()='Account info']")).click();
	Thread.sleep(1000);
	//Actions action = new Actions(d);
//	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
 }
@Then("^Verify the Account info Page$")
public void verify_Account_info_page() throws Throwable {
    System.out.println("Verify a/c info page");
    //d.quit();
}
@Then("^Logout and Close the Browser$")
public void close_the_Browser() throws Exception  {
	 assertTrue(d.findElement(By.linkText("Logout")).isDisplayed());
     //Click on Logout
	d.findElement(By.linkText("Logout")).click();
    Thread.sleep(2000);
    d.quit();
  }
}

//	@When("^Navigate to Sign in Page$")
//	public void navigate_to_Sign_in_Page() throws Throwable {
//	    // Click on Sign in
//		d.findElement(By.linkText("Sign in")).click();
//		Thread.sleep(2000);
//	}
//
//	@When("^Enter user name and password$")
//	public void enter_user_name_and_password() throws Throwable {
//	    // Enter user name
//		d.findElement(By.cssSelector("input.inputField.medium")).sendKeys("demo");
//		// Enter password
//		d.findElement(By.xpath("//input[@type='password']")).sendKeys("1234");
//		// Click on Sign In
//		d.findElement(By.cssSelector("button.actionButton")).click();
//		Thread.sleep(2000);
//		
//	}
//
//	@Then("^Verify logout link$")
//	public void verify_logout_link() throws Throwable {
//	    assertTrue(d.findElement(By.linkText("Logout")).isDisplayed());
//	    // Click on Logout
//	    d.findElement(By.linkText("Logout")).click();
//	    Thread.sleep(2000);
//	    // Close browser
//	    d.quit();
//	}
//
//}
//
