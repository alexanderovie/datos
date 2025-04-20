[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITargetInfo

# Interface: ITargetInfo

Defined in: main.ts:162334

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cms?

> `optional` **cms**: `string`

Defined in: main.ts:162338

content management system

***

### country?

> `optional` **country**: `string`

Defined in: main.ts:162344

country code that the target domain is determined to belong to

***

### ip\_address?

> `optional` **ip\_address**: `string`

Defined in: main.ts:162342

IP address of the target

***

### is\_ip?

> `optional` **is\_ip**: `boolean`

Defined in: main.ts:162347

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

Defined in: main.ts:162340

platform type

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:162336

server

***

### target\_spam\_score?

> `optional` **target\_spam\_score**: `number`

Defined in: main.ts:162351

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page
