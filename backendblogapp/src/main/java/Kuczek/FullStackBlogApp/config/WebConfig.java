package Kuczek.FullStackBlogApp.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class to set up CORS Blog Application.
 *
 * This class configures the CORS settings to allow requests from a specific front-end application
 *
 * @author marcelkuczek
 */
@Configuration
public class WebConfig {

    /**
     * Bean definition for configuring CORS.
     *
     * This method allows the front-end application (running on http://localhost:5173) to communicate with the back-end API
     *
     * @return A WebMvcConfigurer with the necessary CORS configuration.
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}

