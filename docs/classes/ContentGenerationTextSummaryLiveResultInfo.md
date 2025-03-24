[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLiveResultInfo

# Class: ContentGenerationTextSummaryLiveResultInfo

Defined in: main.ts:195194

## Implements

- [`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationTextSummaryLiveResultInfo**(`data`?): `ContentGenerationTextSummaryLiveResultInfo`

Defined in: main.ts:195229

#### Parameters

##### data?

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

#### Returns

`ContentGenerationTextSummaryLiveResultInfo`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Defined in: main.ts:195215

Automated Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`automated_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

Defined in: main.ts:195208

average number of characters per word in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_per_word`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

Defined in: main.ts:195204

number of characters with spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_with_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

Defined in: main.ts:195202

number of characters without spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_without_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Defined in: main.ts:195217

Coleman–Liau Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`coleman_liau_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Defined in: main.ts:195219

Flesch–Kincaid Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`flesch_kincaid_grade_level`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

Defined in: main.ts:195225

number of grammar errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`grammar_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

Defined in: main.ts:195213

keyword density of the target text
contains most common words and their count

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`keyword_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#keyword_density)

***

### paragraphs?

> `optional` **paragraphs**: `number`

Defined in: main.ts:195198

number of paragraphs found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`paragraphs`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#paragraphs)

***

### sentences?

> `optional` **sentences**: `number`

Defined in: main.ts:195196

number of sentences found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`sentences`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#sentences)

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

Defined in: main.ts:195221

SMOG Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`smog_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

Defined in: main.ts:195223

number of spelling errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`spelling_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

Defined in: main.ts:195210

vocabulary density of the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`vocabulary_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)

***

### words?

> `optional` **words**: `number`

Defined in: main.ts:195200

number of words found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words)

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

Defined in: main.ts:195206

average number of words per sentence in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words_per_sentence`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:195238

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:195275

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationTextSummaryLiveResultInfo`

Defined in: main.ts:195268

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationTextSummaryLiveResultInfo`
