# DataforseoLabsAppleAppIntersectionLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**keyword_data** | **KeywordDataInfo** | keyword data for the returned keyword |[optional]|
**intersection_result** | **{ [key: string]: AppStoreSearchOrganic; }** | contains SERP data for the returned keyword<br>data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;<br>depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively |[optional]|