[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelAboutInfo

# Interface: IHotelAboutInfo

Defined in: main.ts:231022

## Indexable

\[`key`: `string`\]: `any`

## Properties

### amenities?

> `optional` **amenities**: [`HotelAmenityInfo`](../classes/HotelAmenityInfo.md)[]

Defined in: main.ts:231046

hotel amenities
information about hotel amenities

***

### check\_in\_time?

> `optional` **check\_in\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

Defined in: main.ts:231031

hotel check-in time
check-in time indicated in the hotel listing

***

### check\_out\_time?

> `optional` **check\_out\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

Defined in: main.ts:231034

hotel check-out time
check-out time indicated in the hotel listing

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:231025

description of the hotel
the description of the hotel entity for which the results are collected

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:231040

hotel domain
domain of the hotel’s website

***

### full\_address?

> `optional` **full\_address**: `string`

Defined in: main.ts:231037

full address of the hotel
address of the hotel indicated in the standardised format

***

### popular\_amenities?

> `optional` **popular\_amenities**: [`HotelAmenityItemInfo`](../classes/HotelAmenityItemInfo.md)[]

Defined in: main.ts:231049

hotel amenities
information about hotel amenities labelled as “popular”

***

### sub\_descriptions?

> `optional` **sub\_descriptions**: `string`[]

Defined in: main.ts:231028

additional description of the hotel
details about the hotel provided in addition to the description

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:231043

hotel url
URL to the hotel’s website indicated in the listing
