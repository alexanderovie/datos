# StocksBoxSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**title** | **string** | reference page title |[optional]|
**source** | **string** | name of the source of the video |[optional]|
**snippet** | **string** | text alongside the link title |[optional]|
**price** | **PriceInfo** | price indicated in the element |[optional]|
**url** | **string** | URL |[optional]|
**domain** | **string** | domain in the URL |[optional]|
**table** | **Table** | results table<br>if there are none, equals null |[optional]|
**graph** | **Graph** | contains data provided in the graph of the element |[optional]|