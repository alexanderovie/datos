# KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keywords** | **string[]** | keywords in a POST array |[optional]|
**type** | **string** | type of element |[optional]|
**location_code** | **number** | location code in a POST array<br>if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array<br>if there is no data, then the value is null |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **BaseDataforseoTrendsItem[]** | keyword popularity values per location<br>values in this array represent percentages relative to the maximum value within each region |[optional]|