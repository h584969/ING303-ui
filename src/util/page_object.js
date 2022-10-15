export default class PageObject{
    /**
     * 
     * @param {() => JSX.Element} page_constructor 
     */
    constructor(page_constructor){
        this.page_constructor = page_constructor;
    }

    get page() {
        return this.page_constructor();
    }
}