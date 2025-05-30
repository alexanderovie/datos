# ContentAnalysisSummaryInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**total_count** | **number** | total amount of results in our database relevant to your request |[optional]|
**rank** | **number** | rank of all URLs citing the keyword<br>normalized sum of ranks of all URLs citing the target keyword |[optional]|
**top_domains** | **TopDomainCountInfo[]** | top domains citing the target keyword<br>contains objects with top domains citing the target keword and citation count per each domain |[optional]|
**sentiment_connotations** | **{ [key: string]: number; }** | sentiment connotations<br>contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment<br>possible sentiment connotations: anger, happiness, love, sadness, share, fun |[optional]|
**connotation_types** | **{ [key: string]: number; }** | connotation types<br>contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type<br>possible sentiment connotation types: positive, negative, neutral |[optional]|
**text_categories** | **ContentAnalysisCategoriesInfo[]** | text categories<br>contains objects with text categories and citation count in each text category<br>to obtain a full list of available categories, refer to the Categories endpoint |[optional]|
**page_categories** | **ContentAnalysisCategoriesInfo[]** | page categories<br>contains objects with page categories and citation count in each page category<br>to obtain a full list of available categories, refer to the Categories endpoint |[optional]|
**page_types** | **{ [key: string]: number; }** | page types<br>contains page types and citation count per each page type |[optional]|
**countries** | **{ [key: string]: number; }** | countries<br>contains countries and citation count in each country<br>to obtain a full list of available countries, refer to the Locations endpoint |[optional]|
**languages** | **{ [key: string]: number; }** | languages<br>contains languages and citation count in each language<br>to obtain a full list of available languages, refer to the Languages endpoint |[optional]|