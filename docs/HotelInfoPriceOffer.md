# HotelInfoPriceOffer

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | title of the hotel |[optional]|
**price** | **number** | price per night |[optional]|
**currency** | **string** | price currency<br>USD is applied by default, unless specified in the POST array |[optional]|
**url** | **string** | url of the price offer<br>URL to the page of the website where price offer appears |[optional]|
**max_visitors** | **number** | the maximal number of visitors<br>the maximum number of visitors for which the price offer is valid |[optional]|
**offer_images** | **string[]** | price offer images<br>URLs of the images featured in the price offer |[optional]|
**free_cancellation_until** | **string** | date until free cancellation is available<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>equals null if free cancellation is not available for the selected dates |[optional]|