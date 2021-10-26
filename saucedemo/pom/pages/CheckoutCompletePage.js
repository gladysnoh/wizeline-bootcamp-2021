import { Selector} from "testcafe";

class CheckoutCompletePage{

    constructor() {
        this.thankYouMessage = Selector('.complete-header');
    }

}

export default new CheckoutCompletePage()