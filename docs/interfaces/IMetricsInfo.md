[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMetricsInfo

# Interface: IMetricsInfo

Defined in: main.ts:100718

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:100754

total count of organic SERPs that contain the domain

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:100759

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:100747

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:100752

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

***

### is\_down?

> `optional` **is\_down**: `number`

Defined in: main.ts:100768

rank went down
indicates how many ranked elements of this domain went down in Google Search

***

### is\_lost?

> `optional` **is\_lost**: `number`

Defined in: main.ts:100771

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

***

### is\_new?

> `optional` **is\_new**: `number`

Defined in: main.ts:100762

number of new ranked elements
indicates how many new ranked elements were found for this domain

***

### is\_up?

> `optional` **is\_up**: `number`

Defined in: main.ts:100765

rank went up
indicates how many ranked elements of this domain went up in Google Search

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:100720

number of organic SERPs where the domain ranks #1

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

Defined in: main.ts:100726

number of organic SERPs where the domain ranks #11-20

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:100722

number of organic SERPs where the domain ranks #2-3

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

Defined in: main.ts:100728

number of organic SERPs where the domain ranks #21-30

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

Defined in: main.ts:100730

number of organic SERPs where the domain ranks #31-40

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:100724

number of organic SERPs where the domain ranks #4-10

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

Defined in: main.ts:100732

number of organic SERPs where the domain ranks #41-50

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

Defined in: main.ts:100734

number of organic SERPs where the domain ranks #51-60

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

Defined in: main.ts:100736

number of organic SERPs where the domain ranks #61-70

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

Defined in: main.ts:100738

number of organic SERPs where the domain ranks #71-80

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

Defined in: main.ts:100740

number of organic SERPs where the domain ranks #81-90

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

Defined in: main.ts:100742

number of organic SERPs where the domain ranks #91-100
