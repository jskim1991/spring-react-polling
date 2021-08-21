package io.jay.springbootpolling;

import lombok.Data;

import java.util.UUID;

@Data
public class SampleData {
    private String key;
    private String value;

    public static SampleData sample() {
        SampleData sampleData = new SampleData();
        sampleData.setKey(UUID.randomUUID().toString());
        sampleData.setValue(UUID.randomUUID().toString());
        return sampleData;
    }
}
