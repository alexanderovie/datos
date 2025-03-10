[**Documentation**](../README.md)

***

[Documentation](../README.md) / IImpressionsInfo

# Interface: IImpressionsInfo

Defined in: main.ts:102172

## Indexable

\[`key`: `string`\]: `any`

## Properties

### ad\_position\_average?

> `optional` **ad\_position\_average**: `number`

Defined in: main.ts:102192

the average ad position
represents the average position of the advertisement

***

### ad\_position\_max?

> `optional` **ad\_position\_max**: `number`

Defined in: main.ts:102189

the maximum ad position
represents the maximum position of the advertisement

***

### ad\_position\_min?

> `optional` **ad\_position\_min**: `number`

Defined in: main.ts:102186

the minimum ad position
represents the minimum position of the advertisement

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:102180

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

***

### cpc\_average?

> `optional` **cpc\_average**: `number`

Defined in: main.ts:102207

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### cpc\_max?

> `optional` **cpc\_max**: `number`

Defined in: main.ts:102202

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### cpc\_min?

> `optional` **cpc\_min**: `number`

Defined in: main.ts:102197

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

***

### daily\_clicks\_average?

> `optional` **daily\_clicks\_average**: `number`

Defined in: main.ts:102225

the average value of daily clicks
represents the average number of daily clicks on the advertisement

***

### daily\_clicks\_max?

> `optional` **daily\_clicks\_max**: `number`

Defined in: main.ts:102222

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

***

### daily\_clicks\_min?

> `optional` **daily\_clicks\_min**: `number`

Defined in: main.ts:102219

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

***

### daily\_cost\_average?

> `optional` **daily\_cost\_average**: `number`

Defined in: main.ts:102234

the average daily charge value
represents the average daily cost of the advertisement (USD)

***

### daily\_cost\_max?

> `optional` **daily\_cost\_max**: `number`

Defined in: main.ts:102231

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

***

### daily\_cost\_min?

> `optional` **daily\_cost\_min**: `number`

Defined in: main.ts:102228

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

***

### daily\_impressions\_average?

> `optional` **daily\_impressions\_average**: `number`

Defined in: main.ts:102216

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### daily\_impressions\_max?

> `optional` **daily\_impressions\_max**: `number`

Defined in: main.ts:102213

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### daily\_impressions\_min?

> `optional` **daily\_impressions\_min**: `number`

Defined in: main.ts:102210

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:102177

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### match\_type?

> `optional` **match\_type**: `string`

Defined in: main.ts:102183

type of keyword match
can take the following values: exact, broad, phrase

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:102174

search engine type
