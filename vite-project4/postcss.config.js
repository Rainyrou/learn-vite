import autoprefixer from "autoprefixer";
import tailwindcss from 'tailwindcss';
import tailwindConfig from "./tailwind.config.js";

export default {
    plugins: [
        tailwindcss(tailwindConfig),
        autoprefixer({
            overrideBrowserslist: ["> 1%", "last 2 versions"]
        })
    ]
}