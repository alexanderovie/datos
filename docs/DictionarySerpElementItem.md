# DictionarySerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the result in SERP |[optional]|
**url** | **string** | relevant URL of the Ad element in SERP |[optional]|
**domain** | **string** | domain in SERP |[optional]|
**breadcrumb** | **string** | breadcrumb of the Ad element in SERP |[optional]|
**keyword** | **string** | keyword highlighted in the result |[optional]|
**snippet** | **string** | snippet of the element |[optional]|
**text** | **string** | description of the results element in SERP |[optional]|
**links** | **LinkElement[]** | sitelinks<br>the links shown below some of search results<br>if there are none, equals null |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null |[optional]|