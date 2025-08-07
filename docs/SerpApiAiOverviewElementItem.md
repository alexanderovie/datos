# SerpApiAiOverviewElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of a given link element |[optional]|
**text** | **string** | reference text<br>text snippet from the page that was used to generate the ai_overview_element |[optional]|
**markdown** | **string** | content of the element in markdown format |[optional]|
**links** | **LinkElement[]** | website links featured in the element |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the component<br>if there are none, equals null |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | references relevant to the element<br>includes references to webpages that were used to generate the ai_overview_element |[optional]|