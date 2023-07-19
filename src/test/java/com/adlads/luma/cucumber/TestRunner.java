package com.adlads.luma.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature",
        glue = {"com.adlads.luma.stepDefinition"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@AccountManagement"}

)

public class TestRunner {
}
