# LocalPackSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the row |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**domain** | **string** | domain in the URL |[optional]|
**phone** | **string** | phone number |[optional]|
**url** | **string** | URL |[optional]|
**is_paid** | **boolean** | indicates whether the element is an ad |[optional]|
**rating** | **BusinessDataRatingInfo** | the element’s rating<br>the popularity rate based on reviews and displayed in SERP |[optional]|
**cid** | **string** | google-defined client id |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|