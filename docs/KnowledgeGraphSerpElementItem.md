# KnowledgeGraphSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the result in SERP |[optional]|
**subtitle** | **string** | subtitle of the item |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**card_id** | **string** | card id |[optional]|
**url** | **string** | relevant URL in SERP |[optional]|
**image_url** | **string** | URL of the image<br>the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) |[optional]|
**logo_url** | **string** | URL of the logo from knowledge graph |[optional]|
**cid** | **string** | google-defined client id<br>unique id of a local establishment;<br>can be used with Google Reviews API to get a full list of reviews |[optional]|
**items** | **BaseSerpElementItem[]** | contains results featured in the ‘hotels_pack’ element of SERP |[optional]|
**rectangle** | **Rectangle** | rectangle parameters<br>contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP<br>equals null if calculate_rectangles in the POST request is not set to true |[optional]|