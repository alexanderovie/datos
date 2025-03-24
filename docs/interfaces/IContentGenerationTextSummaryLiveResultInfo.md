[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationTextSummaryLiveResultInfo

# Interface: IContentGenerationTextSummaryLiveResultInfo

Defined in: main.ts:195306

## Indexable

\[`key`: `string`\]: `any`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Defined in: main.ts:195327

Automated Readability Index

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

Defined in: main.ts:195320

average number of characters per word in the target text

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

Defined in: main.ts:195316

number of characters with spaces found in the target text

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

Defined in: main.ts:195314

number of characters without spaces found in the target text

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Defined in: main.ts:195329

Coleman–Liau Index

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Defined in: main.ts:195331

Flesch–Kincaid Readability Index

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

Defined in: main.ts:195337

number of grammar errors found in the target text

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

Defined in: main.ts:195325

keyword density of the target text
contains most common words and their count

#### Index Signature

\[`key`: `string`\]: `number`

***

### paragraphs?

> `optional` **paragraphs**: `number`

Defined in: main.ts:195310

number of paragraphs found in the target text

***

### sentences?

> `optional` **sentences**: `number`

Defined in: main.ts:195308

number of sentences found in the target text

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

Defined in: main.ts:195333

SMOG Readability Index

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

Defined in: main.ts:195335

number of spelling errors found in the target text

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

Defined in: main.ts:195322

vocabulary density of the target text

***

### words?

> `optional` **words**: `number`

Defined in: main.ts:195312

number of words found in the target text

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

Defined in: main.ts:195318

average number of words per sentence in the target text
