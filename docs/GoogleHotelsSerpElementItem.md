# GoogleHotelsSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**hotel_identifier** | **string** | unique hotel identifier<br>unique hotel identifier assigned by Google;<br>example: 'CgoIjaeSlI6CnNpVEAE' |[optional]|
**url** | **string** | URL |[optional]|
**cid** | **string** | google-defined client id |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|