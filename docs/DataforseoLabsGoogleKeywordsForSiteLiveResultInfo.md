# DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**target** | **string** | target domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**total_count** | **number** | total number of results in our database relevant to your request |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**offset** | **number** | current offset value |[optional]|
**offset_token** | **string** | offset token for subsequent requests<br>you can use the string provided in this field to get the subsequent results of the initial task;<br>note: offset_token values are unique for each subsequent task |[optional]|
**items** | **KeywordDataInfo[]** | contains keyword ideas and related data |[optional]|