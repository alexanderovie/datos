[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

# Interface: IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

Defined in: main.ts:160181

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_distribution?

> `optional` **country\_distribution**: [`CountryDistribution`](../classes/CountryDistribution.md)[]

Defined in: main.ts:160191

distribution of clickstream by countries
represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:160184

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:160188

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article
