# Notes

Don't be too smart! Make it clear to the user what is occurring behind the scenes. Layer should be as minimal as possible.

## Design

### Index

- need at least record ids
- support queries with only index data

### Joins

#### When?

Depends on adapter. Can be upfront for fewer I/O calls or consistent snapshots. Or can be later if an I/O call is unavoidable (i.e. Workers KV).

## API

### Iterator

Use iterators to limit memory impact to what is needed. Mimic helpers in the [iterator helpers proposal](https://github.com/tc39/proposal-iterator-helpers).

### Selection

How to design initial selection? This portion can only include index info.
How to include join information?
How to handle eager joins?
How to handle lazy joins?

### Patterns

A function(s?) that returns an iteration of records.

#### Select-style

`select(fn, options = {})`
`fn` - function for selecting records with index values as input
`options` - possible config for eager joins, etc.

Pros: simple, clear when the selection phase occurs
Cons: don't like having an options object, is not very pretty/readable

select(fn)
join(Meme, Tag)
filter()
map()
...
toArray()

Collectable<T=model, J=[model, ...]>
include
select

### Adapters

Would like to support any key-value storage. Initially would like support for:

- memory-based store
- Workers KV
- RocksDB

Do not want a v1 until at least these three.
