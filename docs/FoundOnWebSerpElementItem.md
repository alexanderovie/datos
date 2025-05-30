# FoundOnWebSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the row |[optional]|
**related_searches** | **string[]** | search queries related to the elment |[optional]|
**items** | **FoundOnWebElement[]** | contains arrays of specific images |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|