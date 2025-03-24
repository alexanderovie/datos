[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisPhraseTrendsLiveResultInfo

# Class: ContentAnalysisPhraseTrendsLiveResultInfo

Defined in: main.ts:191814

## Implements

- [`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentAnalysisPhraseTrendsLiveResultInfo**(`data`?): `ContentAnalysisPhraseTrendsLiveResultInfo`

Defined in: main.ts:191857

#### Parameters

##### data?

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Returns

`ContentAnalysisPhraseTrendsLiveResultInfo`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:191834

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`connotation_types`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#connotation_types)

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:191849

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`countries`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#countries)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:191818

date for which the data is provided

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`date`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#date)

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:191853

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`languages`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#languages)

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:191842

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`page_categories`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_categories)

***

### page\_types?

> `optional` **page\_types**: `object`

Defined in: main.ts:191845

page types
contains page types and citation count per each page type

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`page_types`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_types)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:191823

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`rank`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#rank)

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:191830

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#sentiment_connotations)

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:191838

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`text_categories`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#text_categories)

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

Defined in: main.ts:191826

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`top_domains`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#top_domains)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:191820

total number of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#total_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:191816

type of element

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:191866

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:191936

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentAnalysisPhraseTrendsLiveResultInfo`

Defined in: main.ts:191929

#### Parameters

##### data

`any`

#### Returns

`ContentAnalysisPhraseTrendsLiveResultInfo`
