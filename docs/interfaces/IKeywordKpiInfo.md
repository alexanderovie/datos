[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordKpiInfo

# Interface: IKeywordKpiInfo

Defined in: main.ts:154580

## Indexable

\[`key`: `string`\]: `any`

## Properties

### ad\_position?

> `optional` **ad\_position**: `string`

Defined in: main.ts:154597

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

***

### average\_bid?

> `optional` **average\_bid**: `number`

Defined in: main.ts:154614

average bid of the keyword

***

### average\_cpc?

> `optional` **average\_cpc**: `number`

Defined in: main.ts:154606

average cost per click, USD
calculated by dividing the cost of all clicks by the number of clicks

***

### clicks?

> `optional` **clicks**: `number`

Defined in: main.ts:154600

ad clicks
the number of clicks that the keyword and match type generated during the last month

***

### ctr?

> `optional` **ctr**: `number`

Defined in: main.ts:154609

click-through rate as a percentage
calculated by dividing the number of clicks by the number of impressions and multiplying the result by 100

***

### impressions?

> `optional` **impressions**: `number`

Defined in: main.ts:154603

ad impressions
the number of impressions that the keyword and match type generated during the last month

***

### total\_cost?

> `optional` **total\_cost**: `number`

Defined in: main.ts:154612

total cost of an ad, USD
the cost of using the specified keyword and match type during the last month
