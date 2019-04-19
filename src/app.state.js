const appState = new Map();

export const getState = (stateKey) => {
    return appState.get(stateKey)
}

export const hasState = (stateKey) => {
    return appState.has(stateKey)
}

export const setState = (stateKey, value) => {
    return appState.set(stateKey, value)
}

// state keys
export const ITEMS = "ITEMS";