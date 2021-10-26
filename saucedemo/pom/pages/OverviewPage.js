import {Selector} from "testcafe";

class OverviewPage {
    constructor() {
        this.finishButton = Selector('#finish')
    }
}

export default new OverviewPage()
