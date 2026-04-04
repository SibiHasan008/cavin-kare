/**
 * Rounded “gradient border” via double background layers (inner solid fill + outer gradient).
 * @param {string} innerVarName CSS custom property name including leading `--`, e.g. `--nav-bg`
 * @param {string} borderGradientVarName e.g. `--nav-search-ring-gradient`
 */
export function twFillGradientBorder(innerVarName, borderGradientVarName) {
  return [
    'border-2 border-transparent',
    `[background:linear-gradient(var(${innerVarName}),var(${innerVarName}))_padding-box,var(${borderGradientVarName})_border-box]`,
    '[background-clip:padding-box,border-box]',
  ].join(' ')
}
