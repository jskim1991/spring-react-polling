package io.jay.springbootpolling;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SampleResponse {
    private String message;
    private String result;
    private List<SampleData> data;
}
