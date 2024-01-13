
import css from '@modular-css/rollup';
import image from '@rollup/plugin-image';

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
        image({
            dom: true
        })
    ]
}