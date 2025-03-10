[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHistoricalMetricsInfo

# Interface: IHistoricalMetricsInfo

Defined in: main.ts:120858

## Indexable

\[`key`: `string`\]: `any`

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:120874

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:120869

total count of organic SERPs that contain the domain

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:120867

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:120862

month for which the data is provided

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:120860

year for which the data is provided
