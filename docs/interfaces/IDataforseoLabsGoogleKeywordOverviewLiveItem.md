[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordOverviewLiveItem

# Interface: IDataforseoLabsGoogleKeywordOverviewLiveItem

Defined in: main.ts:123535

## Indexable

\[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

Defined in: main.ts:123566

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](../classes/ClickstreamKeywordInfo.md)

Defined in: main.ts:123558

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:123540

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

Defined in: main.ts:123551

keyword data for the returned keyword

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:123553

contains keyword search volume normalized with Bing search volume

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:123555

contains keyword search volume normalized with clickstream data

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

Defined in: main.ts:123560

additional information about the keyword

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123545

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123543

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123537

search engine type

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

Defined in: main.ts:123569

search intent info for the returned keyword
learn about search intent in this help center article

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:123549

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

Defined in: main.ts:123563

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database
