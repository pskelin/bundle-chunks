// vite.config.js
export default {
    // config options
    build: {
        lib: {
            entry: ["entry-button.js", "entry-input.js", "entry-icon.js", "entry-label.js"],
            formats: ["es"]
        },
        minify: false,
    }
};