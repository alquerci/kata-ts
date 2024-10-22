import { PluginKind, declareValuePlugin } from '@stryker-mutator/api/plugin'

const IGNORE_REASON = "We're not interested in testing declaration of esmodule."

export const strykerPlugins = [declareValuePlugin(PluginKind.Ignore, 'esmodule', {
  shouldIgnore(path) {
    if (shouldIgnoreMutantsOnPath(path)) {
      return IGNORE_REASON
    }
  }
})]

const shouldIgnoreMutantsOnPath = path => {
  return path.isExpressionStatement() &&
    path.node.expression.type === 'CallExpression' &&
    path.node.expression.callee.type === 'MemberExpression' &&
    path.node.expression.callee.object.type === 'Identifier' &&
    path.node.expression.callee.object.name === 'Object' &&
    path.node.expression.callee.property.type === 'Identifier' &&
    path.node.expression.callee.property.name === 'defineProperty' &&
    path.node.expression.arguments[0]?.type === 'Identifier' &&
    path.node.expression.arguments[0]?.name === 'exports' &&
    path.node.expression.arguments[1]?.type === 'StringLiteral' &&
    path.node.expression.arguments[1]?.value === '__esModule' &&
    path.node.expression.arguments[2]?.type === 'ObjectExpression' &&
    path.node.expression.arguments[2]?.properties[0]?.type === 'ObjectProperty' &&
    path.node.expression.arguments[2]?.properties[0]?.key.name === 'value' &&
    path.node.expression.arguments[2]?.properties[0]?.value.value === true

}
