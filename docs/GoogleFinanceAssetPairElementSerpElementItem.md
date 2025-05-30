# GoogleFinanceAssetPairElementSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**base_symbol** | **string** | identifier of the base asset in a pair<br>example: EUR |[optional]|
**quote_symbol** | **string** | identifier of the quote asset in a pair<br>example: USD |[optional]|
**base_display_name** | **string** | full name of the base asset in a pair<br>example: Euro |[optional]|
**quote_display_name** | **string** | full name of the base asset in a pair<br>example: Euro |[optional]|
**price** | **number** | value of the base asset compared to the quote asset |[optional]|
**price_delta** | **number** | change in price<br>change in price at a given timestamp |[optional]|
**identifier** | **string** | identifier of the element<br>full identifier of the element that consists from ticker and market_identifier<br>example: PX1:INDEXDB |[optional]|
**displayed_name** | **string** | name of the market index as displayed on Google Finance<br>example: CAC 40 |[optional]|
**url** | **string** | URL to the page of the market index on Google Finance |[optional]|
**location** | **string** | location of the market index<br>example: Europe/Paris |[optional]|
**trend** | **string** | growth trend of the market index<br>possible values: up, down, stable |[optional]|
**timestamp** | **string** | date and time of the value readout<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2025-02-10 09:40:00 +00:00 |[optional]|
**percentage_delta** | **number** | percentage of change in value of the market index |[optional]|