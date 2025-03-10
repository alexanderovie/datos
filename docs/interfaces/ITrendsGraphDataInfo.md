[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITrendsGraphDataInfo

# Interface: ITrendsGraphDataInfo

Defined in: main.ts:143482

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:143485

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:143488

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

***

### missing\_data?

> `optional` **missing\_data**: `boolean`

Defined in: main.ts:143493

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: main.ts:143490

a point in time in the Unix time format

***

### values?

> `optional` **values**: `number`[]

Defined in: main.ts:143498

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term
