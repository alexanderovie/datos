# DataforseoLabsGoogleHistoricalKeywordDataLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**keyword** | **string** | keyword<br>keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**location_code** | **number** | location code in a POST array<br>if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**history** | **History[]** | array of objects with historical data for the keyword |[optional]|