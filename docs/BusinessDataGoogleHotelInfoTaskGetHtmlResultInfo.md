# BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | identifier received in a POST array<br>this field will contain the hotel_identifier parameter specified when setting a task;<br>example:<br>CgoI-KWyzenM_MV3EAE |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **SerpHtmlItemInfo[]** | HTML pages |[optional]|
**type** | **string** |  |[optional]|
**se_domain** | **string** |  |[optional]|