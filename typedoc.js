module.exports = {
    src: [
        './src/pot-odds-calculator.ts',
    ],
    exclude: [
        './node_modules/**/*',
        './dist/**/*'
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: './readme.md',
    name: 'pot-odds-calculator',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
