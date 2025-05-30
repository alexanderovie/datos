# ImagesSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the row |[optional]|
**url** | **string** | URL |[optional]|
**items** | **ImagesElement[]** | contains arrays of specific images |[optional]|
**related_image_searches** | **RelatedImageSearchesElement[]** | contains keywords and images related to the specified search term<br>if there are none, equals null |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|