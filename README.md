# Kill `antialiased`: Restore Native macOS Font Rendering

On macOS, many frontend frameworks and websites abuse `-webkit-font-smoothing: antialiased;`, resulting in skinny, faint text that causes severe eye strain. 

Designed specifically for **macOS** and **Chromium-based browsers**, this extension overrides this forced CSS property via injection, restoring font rendering back to its naturally crisp, default macOS state.

# 📢 A Plea to Frontend Developers & AI Generators

Stop abusing font-smoothing! Leave font rendering to the operating system.

Whether you are writing CSS yourself, relying on AI code generation, or copying snippets from somewhere else: -webkit-font-smoothing: antialiased is NOT a universal best practice. It strips away subpixel rendering, making fonts thin, weak, and hard to read on many macOS setups.

For a deeper dive into why this practice is harmful, check out this classic article from 2012:
👉 [Stop Fixing Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)

# how to use

Since publishing on the Chrome Web Store requires a paid developer account, this extension is distributed directly via GitHub. You can easily install it in 3 simple steps:

1. **Download the project**
   * Click the green **`Code`** button at the top right of this page and select **`Download ZIP`**.
   * Unzip the downloaded file onto your Mac (e.g., in your `Downloads` or `Documents` folder).

2. **Open Extensions in your Browser**
   * Open your Chromium-based browser (Chrome, Edge, Brave, Arc, etc.).
   * Navigate to `chrome://extensions/` in the address bar.
   * Enable **Developer mode** using the toggle switch in the top right corner.

3. **Load the Extension**
   * Click the **`Load unpacked`** button in the top left.
   * Select the unzipped folder containing this project.
   * Done! Refresh your open web pages to enjoy native macOS font rendering.

# 💡 Tips for Safari & Firefox Users

If you are using **Safari** or **Firefox**, you don't actually need an extension to fix this! You can solve it natively:

## Safari
1. Create a local CSS file (e.g., `custom.css`) with the following content:
```css
* {
   -webkit-font-smoothing: auto !important;
}
```
2. Go to Safari > Settings > Advanced > Style Sheet, and select the CSS file you just created.

## Firefox
If you have custom themes enabled, add the following to your chrome/userContent.css:
```css
* {
    -webkit-font-smoothing: auto !important;
}
```
