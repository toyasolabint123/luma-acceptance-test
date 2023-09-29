package com.adlads.luma.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature",
        glue = {"com.adlads.luma.stepDefinition","com.adlads.luma.cucumber"},
        format = {"pretty","html:target/site/cucumber-pretty","json:target/site/cucumber-pretty/cucumberReport.json"},
        tags = {"@AccountManagement"}

)

public class TestRunner {
}