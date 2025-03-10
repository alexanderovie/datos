[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoryTrendsLiveResultInfo

# Class: ContentAnalysisCategoryTrendsLiveResultInfo

Defined in: main.ts:189961

## Implements

- [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoryTrendsLiveResultInfo()

> **new ContentAnalysisCategoryTrendsLiveResultInfo**(`data`?): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

Defined in: main.ts:190004

#### Parameters

##### data?

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:189981

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`connotation_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:189996

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`countries`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#countries)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:189965

date for which the data is provided

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`date`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#date)

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:190000

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`languages`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#languages)

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:189989

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)

***

### page\_types?

> `optional` **page\_types**: `object`

Defined in: main.ts:189992

page types
contains page types and citation count per each page type

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:189970

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`rank`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#rank)

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:189977

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:189985

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`text_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

Defined in: main.ts:189973

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`top_domains`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:189967

total number of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:189963

type of element

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190013

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:190083

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

Defined in: main.ts:190076

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)
