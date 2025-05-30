# BacklinksHistoryLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**date** | **string** | date and time when the data for the target was stored<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**rank** | **number** | domain rank on the given date<br>learn more about the metric and how it is calculated in this help center article |[optional]|
**backlinks** | **number** | number of backlinks |[optional]|
**new_backlinks** | **number** | number of new backlinks for the target<br>data is provided based in a comparison with the previous period<br>Note: this data is available from May 2021;<br>if the date range specified in the POST request precedes May 2021, the field will equal 0 |[optional]|
**lost_backlinks** | **number** | number of lost backlinks for the target<br>data is provided based in a comparison with the previous period<br>Note: this data is available from May 2021;<br>if the date range specified in the POST request precedes May 2021, the field will equal 0 |[optional]|
**new_referring_domains** | **number** | number of new referring domains for the target<br>data is provided based in a comparison with the previous period<br>Note: this data is available from May 2021;<br>if the date range specified in the POST request precedes May 2021, the field will equal 0 |[optional]|
**lost_referring_domains** | **number** | number of lost referring domains for the target<br>data is provided based in a comparison with the previous period<br>Note: this data is available from May 2021;<br>if the date range specified in the POST request precedes May 2021, the field will equal 0 |[optional]|
**crawled_pages** | **number** | number of crawled pages for the target |[optional]|
**info** | **TargetInfo** | information about the target |[optional]|
**internal_links_count** | **number** | number of internal links<br>calculated as the sum of internal links on the pages of the specified target |[optional]|
**external_links_count** | **number** | number of external links on the page<br>calculated as the sum of external links on the pages of the specified target |[optional]|
**broken_backlinks** | **number** | number of broken backlinks<br>number of broken backlinks pointing to the target |[optional]|
**broken_pages** | **number** | number of broken pages<br>number of pages that receive backlinks but respond with 4xx or 5xx status codes |[optional]|
**referring_domains** | **number** | number of referring domains<br>referring domains include subdomains that are counted as separate domains for this metric |[optional]|
**referring_domains_nofollow** | **number** | number of domains pointing at least one nofollow link to the target |[optional]|
**referring_main_domains** | **number** | number of referring main domains |[optional]|
**referring_main_domains_nofollow** | **number** | number of main domains pointing at least one nofollow link to the target |[optional]|
**referring_ips** | **number** | number of referring IP addresses<br>number of IP addresses pointing to this page |[optional]|
**referring_subnets** | **number** | number of referring subnetworks |[optional]|
**referring_pages** | **number** | number of pages pointing to the target |[optional]|
**referring_pages_nofollow** | **number** | number of referring pages pointing at least one nofollow link to the target |[optional]|
**referring_links_tld** | **{ [key: string]: number; }** | top-level domains of the referring links<br>contains top-level domains and referring link count per each |[optional]|
**referring_links_types** | **{ [key: string]: number; }** | types of referring links<br>indicates the types of the referring links and link count per each type<br>possible values:<br>anchor, image, link, meta, canonical, alternate, redirect |[optional]|
**referring_links_attributes** | **{ [key: string]: number; }** | link attributes of the referring links<br>indicates link attributes of the referring links and link count per each attribute |[optional]|
**referring_links_platform_types** | **{ [key: string]: number; }** | types of referring platforms<br>indicates referring platform types and and link count per each platform<br>possible values: cms, blogs, ecommerce, message-boards, wikis, news, organization |[optional]|
**referring_links_semantic_locations** | **{ [key: string]: number; }** | semantic locations of the referring links<br>indicates semantic elements in HTML where the referring links are located and link count per each semantic location<br>you can get the full list of semantic elements here<br>examples:<br>article, section, summary |[optional]|
**referring_links_countries** | **{ [key: string]: number; }** | ISO country codes of the referring links<br>indicates ISO country codes of the domains where the referring links are located and the link count per each country |[optional]|