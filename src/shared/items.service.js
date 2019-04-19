import { hasState, getState, setState, ITEMS } from "./state";

const fetchItems = () => {
    return window.fetch("server/demo-items.json")
        .then((resp)=> {
            if(!resp.ok) {
                throw(new Error(resp));
            }
            return resp.json()
        }).then((resp) => {
            return resp.items;
        })
}

export const getItems = async () => {
    if (hasState(ITEMS)) {
        return getState(ITEMS)
    }
    try {
        const items = await fetchItems();
        setState(ITEMS, items);
        return getState(ITEMS); 
    } catch (err) {
        // log error
        return [];
    } 
}