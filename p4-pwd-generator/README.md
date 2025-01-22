# Password Generator App

This React application generates a random password based on user-selected criteria such as length, inclusion of numbers, and special characters. The generated password can be copied to the clipboard with a single click.

## Hooks Used

### `useRef`
The `useRef` hook is used to create a reference to a DOM element. In this app, it is used to reference the password input field so that it can be selected and copied to the clipboard.

**Syntax:**
```javascript
const refContainer = useRef(initialValue);
```

### `useState`
The `useState` hook is used to add state to a functional component. In this app, it is used to manage the state of the password length, inclusion of numbers, special characters, copy status, and the generated password.

**Syntax:**
```javascript
const [state, setState] = useState(initialState);
```

### `useCallback`
The `useCallback` hook returns a memoized callback function. In this app, it is used to memoize the password generation and copy functions to prevent unnecessary re-renders.

**Syntax:**
```javascript
const memoizedCallback = useCallback(() => {
    // function logic
}, [dependencies]);
```

### `useEffect`
The `useEffect` hook is used to perform side effects in functional components. In this app, it is used to regenerate the password whenever the length, inclusion of numbers, or special characters change.

**Syntax:**
```javascript
useEffect(() => {
    // side effect logic
}, [dependencies]);
```

## How It Works

1. **Password Generation**: The `pwdGenerator` function generates a random password based on the selected criteria (length, numbers, special characters) and updates the `password` state.
2. **Copy to Clipboard**: The `copyInput` function selects the password input field and copies its value to the clipboard. It also updates the `copyStatus` state to provide feedback to the user.
3. **State Management**: The app uses multiple `useState` hooks to manage the state of the password length, inclusion of numbers, special characters, copy status, and the generated password.
4. **Effect Handling**: The `useEffect` hook ensures that the password is regenerated whenever the length, inclusion of numbers, or special characters change.

This app demonstrates the use of React hooks to manage state, handle side effects, and optimize performance with memoized functions.