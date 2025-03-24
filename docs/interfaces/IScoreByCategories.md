[**Documentation**](../README.md)

***

[Documentation](../README.md) / IScoreByCategories

# Interface: IScoreByCategories

Defined in: main.ts:232348

## Indexable

\[`key`: `string`\]: `any`

## Properties

### airport\_access?

> `optional` **airport\_access**: `number`

Defined in: main.ts:232369

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

***

### overall?

> `optional` **overall**: `number`

Defined in: main.ts:232353

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

***

### restaurants?

> `optional` **restaurants**: `number`

Defined in: main.ts:232361

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

***

### things\_to\_do?

> `optional` **things\_to\_do**: `number`

Defined in: main.ts:232357

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

***

### transit?

> `optional` **transit**: `number`

Defined in: main.ts:232365

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options
