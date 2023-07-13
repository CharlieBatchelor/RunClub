import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("CurrentMonth");
    }

    async getHtml() {
        return `
            <h2>Current Month Pie</h2>
            <p>
                Watch this space! Here we'll put the current month pie with some graphs of current progress.       
            </p>
            <img src="images/pie.png" alt="Current Pie" style="max-width: 100%; height: auto;">
            <p>
                <a href="/lastMonth" data-link>View previous month winners...</a>.
            </p>
        `;
    }
}