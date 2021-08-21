package io.jay.springbootpolling;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Random;

@RestController
public class SampleController {

    @GetMapping("/test")
    public SampleResponse sample() {
        Random random = new Random();
        int i = random.nextInt();
        if (i % 2 == 0) {
            System.out.println("91 Processing");
            return SampleResponse.builder()
                    .result("91")
                    .message("Processing")
                    .build();
        } else {
            System.out.println("00 Ready");
            return SampleResponse.builder()
                    .result("00")
                    .message("Ready")
                    .data(Arrays.asList(SampleData.sample(), SampleData.sample(), SampleData.sample()))
                    .build();
        }
    }
}
