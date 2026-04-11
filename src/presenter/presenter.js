class Presenter {
    constructor() {
        // Initialize elements and event listeners
        this.tabs = document.querySelectorAll('.tab');
        this.contents = document.querySelectorAll('.tab-content');
        this.bindEvents();
    }

    bindEvents() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab));
        });
    }

    switchTab(tab) {
        // Hide all contents
        this.contents.forEach(content => content.classList.remove('active'));
        // Remove active class from all tabs
        this.tabs.forEach(t => t.classList.remove('active'));
        // Add active class to the current tab
        tab.classList.add('active');
        // Show the respective content
        const targetContent = document.getElementById(tab.dataset.target);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }
}

// Initialize Presenter
document.addEventListener('DOMContentLoaded', () => {
    new Presenter();
});
