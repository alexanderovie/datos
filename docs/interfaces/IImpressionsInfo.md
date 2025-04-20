[**Documentation**](../README.md)

***

[Documentation](../README.md) / IImpressionsInfo

# Interface: IImpressionsInfo

Defined in: main.ts:104187

## Indexable

\[`key`: `string`\]: `any`

## Properties

### ad\_position\_average?

> `optional` **ad\_position\_average**: `number`

Defined in: main.ts:104207

the average ad position
represents the average position of the advertisement

***

### ad\_position\_max?

> `optional` **ad\_position\_max**: `number`

Defined in: main.ts:104204

the maximum ad position
represents the maximum position of the advertisement

***

### ad\_position\_min?

> `optional` **ad\_position\_min**: `number`

Defined in: main.ts:104201

the minimum ad position
represents the minimum position of the advertisement

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:104195

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

***

### cpc\_average?

> `optional` **cpc\_average**: `number`

Defined in: main.ts:104222

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### cpc\_max?

> `optional` **cpc\_max**: `number`

Defined in: main.ts:104217

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### cpc\_min?

> `optional` **cpc\_min**: `number`

Defined in: main.ts:104212

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### daily\_clicks\_average?

> `optional` **daily\_clicks\_average**: `number`

Defined in: main.ts:104240

the average value of daily clicks
represents the average number of daily clicks on the advertisement

***

### daily\_clicks\_max?

> `optional` **daily\_clicks\_max**: `number`

Defined in: main.ts:104237

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

***

### daily\_clicks\_min?

> `optional` **daily\_clicks\_min**: `number`

Defined in: main.ts:104234

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

***

### daily\_cost\_average?

> `optional` **daily\_cost\_average**: `number`

Defined in: main.ts:104249

the average daily charge value
represents the average daily cost of the advertisement (USD)

***

### daily\_cost\_max?

> `optional` **daily\_cost\_max**: `number`

Defined in: main.ts:104246

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

***

### daily\_cost\_min?

> `optional` **daily\_cost\_min**: `number`

Defined in: main.ts:104243

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

***

### daily\_impressions\_average?

> `optional` **daily\_impressions\_average**: `number`

Defined in: main.ts:104231

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### daily\_impressions\_max?

> `optional` **daily\_impressions\_max**: `number`

Defined in: main.ts:104228

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### daily\_impressions\_min?

> `optional` **daily\_impressions\_min**: `number`

Defined in: main.ts:104225

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:104192

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### match\_type?

> `optional` **match\_type**: `string`

Defined in: main.ts:104198

type of keyword match
can take the following values: exact, broad, phrase

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:104189

search engine type
