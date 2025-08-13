# `Nullable<T>`

`Nullable<T>` is a C++ified implementation of TypeScript's `T?` type and `T | undefined` return type.

#### _Purpose & Problems Solved_

- Using a `Nullable<T>` object indicates that the object may or may not be "null" at any point in time.
- Allows for a return type similar to TypeScript's `T | Undefined`
- Designed to place less responsibility on clients to do safety checks on the object (compared to something like `std::optional`)

To resolve a Nullable<T> object into it' non-null T equivalent, a Resolve() method has been provided, among others.

## API Reference

[ Doxy Link Space ]  
This space will be linked to the doxygen page for this API as soon as it's created.

<br>

## Key Features

#### _Features + Performance + Ergonomics_

- `Resolve()` and `TryUse()` make using the underlying data a smooth process.
- `constexpr` method signatures optimize move semantics for std containers.
- The API is minimal for a clutter-free experience befitting this kind of wrapper.

<br>

## Usage Scenarios

**(A) Return value for functions to return on fail**  
Sometimes there is no good "default" value in a given context. In these cases, it is recommended to return `Nullable<T>` to prevent confusion.

- This also makes functions more robust by enabling them to work with types without default constructor support.

<br>

**(B) Data type to convey possible nullness**  
Many cases involve data that necessarily lacks nullness guarantees at some point (e.g. external queries, creation based on conditions, etc.). Storing such data as `Nullable<T>` is beneficial in 2 ways.

1. Anyone seeing the type will immediately know that it's potentially null.
2. It is a simple way of representing the information, not having the caveats of the T\* / nullptr method.
   - No worries about someone deleting the data using the pointer
   - No need to directly handle using move semantics or smart pointer logic just to achieve possible nullness  
     (Neither of these are bad, of course. There's just no need to buy a new car if all you really need is a new back wheel.)

<br>

## Quirks & Limitations

### Initialize Destination Variable Beforehand

`Resolve()` and `TryUse()` help you safely unwrap a Nullable<T>, but they don’t magically initialize your variables.

Given a Nullable<T> in a null state, `Resolve()` simply returns false without making any update to the destination variable.

But if destination was never initialized before it was given to `Resolve()`, then it is still uninitialized after execution. This is a classic recipe for undefined behavior, not specific to `Nullable<T>` or `C-Script`, but rather inherent to programming.

Therefore, to prevent falling into that trap, **always initialize variables before they are used** -- even variables used as input params to callables like `Resolve()`.

<br>

## Design Decisions

I knew that I wanted 2 things to come from this class:

1. A convenient way to convey "possibly null" types in C++
2. A smooth way to resolve a possibly-null object into a hard type.

C++ doesn't have a `?` overload for nullness like TypeScript's `T?`. In fact, it's not even possible to write one, since the ternary operator is forbidden for custom overloading in C++. Additionally, C++ functions can't really return different hard (definite) types.
(Returning Derived* as a Base* does not achieve this, since the compiler still isn't actually resolving the base --> derived).

For design problems like this one, I like to use the responsibility inversion method. In some cases, I find that you can invert the responsibility of two parties and achieve your desired result without introducing much boilerplate or verbosity.

In this case, I specifically noticed that I could invert the responsibility of providing a valid object to hold the resolved data. Instead of the normal apporach of having the function be responsibile for returning a valid T object and making the client store it, I flipped it. Now the client must give `Resolve()` the valid T object, and the function only cares about receiving the storage variable.

This inversion of responsibility means:

- Developers stay in control of variable initialization and lifetime
- The API stays clean and minimal — no mystery magic, just clear contracts
- Positive safety and DX implications follow
  - Removing the possibility of nullptr dereferences and hidden heap allocations makes working with `Nullable<T>` straighforward and safety-conscious.

<br>

## Examples

[ Example Space ]
