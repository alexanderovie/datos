# DataforseoLabsPageIntersectionLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**keyword_data** | **KeywordDataInfo** | keyword data for the returned keyword |[optional]|
**intersection_result** | **{ [key: string]: BaseDataforseoLabsSerpElementItem; }** | contains data on the SERP elements found for the returned keyword<br>data will be provided in separate arrays for each URL you specified in the pages object when setting a task;<br>depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively |[optional]|