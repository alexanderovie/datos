# StocksBoxSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the row |[optional]|
**source** | **string** | reference source name or title |[optional]|
**snippet** | **string** | text alongside the link title |[optional]|
**price** | **PriceInfo** | price indicated in the element |[optional]|
**url** | **string** | URL |[optional]|
**domain** | **string** | domain in the URL |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|
**table** | **Table** | results table<br>if there are none, equals null |[optional]|
**graph** | **Graph** | contains data provided in the graph of the element |[optional]|