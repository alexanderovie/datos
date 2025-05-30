# DomainAnalyticsTechnologiesTechnologyStatsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**date** | **string** | date for which the data is provided |[optional]|
**domains_count** | **number** | number of domains that use the specified technology |[optional]|
**countries** | **{ [key: string]: number; }** | distribution of websites by country<br>contains country codes and number of websites per country |[optional]|
**languages** | **{ [key: string]: number; }** | distribution of websites by language<br>contains language codes and number of websites per language |[optional]|
**domains_rank** | **{ [key: string]: number; }** | distribution of websites by backlink rank<br>contains domain rank ranges and number of websites per range<br>learn more about rank and how it is calculated in this help center article |[optional]|