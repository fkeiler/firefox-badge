
import css from '@modular-css/rollup';
import url from '@rollup/plugin-url';

export default {
    input: 'src/firefox-badge.mjs',
    output: [
        {
            file: 'dist/firefox-badge.mjs',
            format: 'es'
        },
        {
            file: 'dist/firefox-badge.cjs',
            format: 'cjs'
        }
    ],
    plugins: [
        css({
            styleExport: true,
        }),
        url()
    ]
}