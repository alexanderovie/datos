# DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**seed_keyword** | **string** | keyword in a POST array |[optional]|
**seed_keyword_data** | **KeywordDataInfo** | keyword data for the seed keyword<br>fields in this object are identical to those of the items array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**total_count** | **number** | total amount of results in our database relevant to your request |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**offset** | **number** | current offset value |[optional]|
**offset_token** | **string** | offset token for subsequent requests<br>you can use the string provided in this field to get the subsequent results of the initial task;<br>note: offset_token values are unique for each subsequent task |[optional]|
**items** | **KeywordDataInfo[]** | contains keywords and related data |[optional]|