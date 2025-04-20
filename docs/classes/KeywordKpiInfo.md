[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordKpiInfo

# Class: KeywordKpiInfo

Defined in: main.ts:157026

## Implements

- [`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordKpiInfo**(`data?`): `KeywordKpiInfo`

Defined in: main.ts:157064

#### Parameters

##### data?

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md)

#### Returns

`KeywordKpiInfo`

## Properties

### ad\_position?

> `optional` **ad\_position**: `string`

Defined in: main.ts:157043

represents the position of the relevant ad in SERP
can take the following values:
FirstPage1: The first ad to appear on the right side of the first search results page
FirstPage2: The second ad to appear on the right side of the first search results page
FirstPage3: The third ad to appear on the right side of the first search results page
FirstPage4: The fourth ad to appear on the right side of the first search results page
FirstPage5: The fifth ad to appear on the right side of the first search results page
FirstPage6: The sixth ad to appear on the right side of the first search results page
FirstPage7: The seventh ad to appear on the right side of the first search results page
FirstPage8: The eighth ad to appear on the right side of the first search results page
FirstPage9: The ninth ad to appear on the right side of the first search results page
FirstPage10: The tenth ad to appear on the right side of the first search results page
MainLine1: The first ad to appear at the top of the search results page
MainLine2: The second ad to appear at the top of the search results page
MainLine3: The third ad to appear at the top of the search results page
MainLine4: The fourth ad to appear at the top of the search results page

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`ad_position`](../interfaces/IKeywordKpiInfo.md#ad_position)

***

### average\_bid?

> `optional` **average\_bid**: `number`

Defined in: main.ts:157060

average bid of the keyword

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`average_bid`](../interfaces/IKeywordKpiInfo.md#average_bid)

***

### average\_cpc?

> `optional` **average\_cpc**: `number`

Defined in: main.ts:157052

average cost per click, USD
calculated by dividing the cost of all clicks by the number of clicks

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`average_cpc`](../interfaces/IKeywordKpiInfo.md#average_cpc)

***

### clicks?

> `optional` **clicks**: `number`

Defined in: main.ts:157046

ad clicks
the number of clicks that the keyword and match type generated during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`clicks`](../interfaces/IKeywordKpiInfo.md#clicks)

***

### ctr?

> `optional` **ctr**: `number`

Defined in: main.ts:157055

click-through rate as a percentage
calculated by dividing the number of clicks by the number of impressions and multiplying the result by 100

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`ctr`](../interfaces/IKeywordKpiInfo.md#ctr)

***

### impressions?

> `optional` **impressions**: `number`

Defined in: main.ts:157049

ad impressions
the number of impressions that the keyword and match type generated during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`impressions`](../interfaces/IKeywordKpiInfo.md#impressions)

***

### total\_cost?

> `optional` **total\_cost**: `number`

Defined in: main.ts:157058

total cost of an ad, USD
the cost of using the specified keyword and match type during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`total_cost`](../interfaces/IKeywordKpiInfo.md#total_cost)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:157073

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:157096

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordKpiInfo`

Defined in: main.ts:157089

#### Parameters

##### data

`any`

#### Returns

`KeywordKpiInfo`
