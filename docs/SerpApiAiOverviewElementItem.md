# SerpApiAiOverviewElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of a given link element |[optional]|
**text** | **string** | reference text<br>text snippet from the page that was used to generate the ai_overview_element |[optional]|
**markdown** | **string** | text of the component in the markdwon format |[optional]|
**links** | **LinkElement[]** | sitelinks<br>the links shown below some of Google’s search results<br>if there are none, equals null |[optional]|
**images** | **AiModeImagesElement[]** | images of the element<br>if there are none, equals null |[optional]|
**references** | **AiAiOverviewReferenceInfo[]** | additional references relevant to the item<br>includes references to webpages that may have been used to generate the product_considerations_ai_overview_expanded_element |[optional]|