export default class Section {
    constructor({ items, renderer }, selectorContainer) {
        this._items = items;
        this._renderer = renderer;
        this._сontainer = selectorContainer;
    }

    addItem(element) {
        this._сontainer.prepend(element)
    }
    renderer() {
        this._items.forEach(item => {
            this._renderer(item)
        })
    }
}