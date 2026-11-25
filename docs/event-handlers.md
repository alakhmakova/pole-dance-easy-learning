# Event handlers: passing a function, not calling it

My notes for the Buy button and the Mastered checkbox in `ElementRow`.

## Three ways to write onClick

The example is a "like" button on a recipe card. `likeRecipe(id)` is a
function that saves the like.

### 1. With parentheses: wrong

```jsx
<button onClick={likeRecipe(recipe.id)}>Like</button>
```

Parentheses mean "call it right now". The function runs **during render**,
without any click, and `onClick` gets its result instead of a function.
If the function changes state, the state change causes a new render, the new
render calls the function again, and so on: an endless loop. React stops it
with the error "Too many re-renders".

### 2. The function itself: no id

```jsx
<button onClick={likeRecipe}>Like</button>
```

Here the function itself is passed, without parentheses, so it runs on click.
But React calls it with the **event object**, not with the recipe's id, so the
function can't know which recipe was liked.

### 3. A wrapper arrow function: right

```jsx
<button onClick={() => likeRecipe(recipe.id)}>Like</button>
```

`() => likeRecipe(recipe.id)` is a new small function with no parameters.
Nothing is called while rendering. On click, React calls the wrapper, and the
wrapper calls `likeRecipe` with the right id. It is the same as:

```js
function () {
    return likeRecipe(recipe.id);
}
```

**Rule:** use a wrapper arrow function when the handler needs an argument.
Without an argument, pass the function name without parentheses.

## onChange on a checkbox

```jsx
<input type="checkbox" checked={done} onChange={() => toggleDone(task.id)} />
```

- `onChange` runs when the checkbox's state changes. That happens with a mouse
  click, with the Space key (keyboard and screen reader users), or with a
  click on the text of its `label`. `onClick` is about the mouse action;
  `onChange` is about the result, so it catches all of them.
- When an input gets its value from React (`checked={...}` or `value={...}`),
  React expects `onChange`. Without it React shows a warning in the console
  and the input can't be changed.
- On a text input, React's `onChange` runs on every typed letter.

## Reading

- [Responding to Events](https://react.dev/learn/responding-to-events#adding-event-handlers) (react.dev), especially the Pitfall box in "Adding event handlers"
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (MDN)
- [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable) (react.dev)
