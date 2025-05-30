# KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword<br>keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**spell** | **string** | correct spelling of the keyword<br>Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;<br>we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link |[optional]|
**location_code** | **number** | location code in a POST array<br>if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array<br>if there is no data, then the value is null |[optional]|
**search_partners** | **boolean** | indicates whether data from partner networks included in the response |[optional]|
**competition** | **string** | competition<br>represents the relative amount of competition associated with the given keyword in paid SERP only;<br>this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;<br>if there is no data the value is null;<br>learn more about the metric in this help center article |[optional]|
**competition_index** | **number** | competition<br>represents the relative amount of competition associated with the given keyword in paid SERP only;<br>this value is based on Google Ads data and can be between 0 and 100 (inclusive);<br>if there is no data the value is null;<br>learn more about the metric in this help center article |[optional]|
**search_volume** | **number** | monthly average search volume rate |[optional]|
**low_top_of_page_bid** | **number** | minimum bid for the ad to be displayed at the top of the first page<br>indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);<br>the value may differ depending on the location specified in a POST request |[optional]|
**high_top_of_page_bid** | **number** | maximum bid for the ad to be displayed at the top of the first page<br>indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);<br>the value may differ depending on the location specified in a POST request |[optional]|
**cpc** | **number** | cost per click<br>indicates the amount paid for each click on the ad displayed for a given keyword |[optional]|
**monthly_searches** | **MonthlySearches[]** | monthly searches<br>represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;<br>if there is no data then the value is null |[optional]|