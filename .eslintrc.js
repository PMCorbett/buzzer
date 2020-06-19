module.exports = {
  extends: ['crowdlab', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    /**
     * @see https://github.com/crowdlab-uk/cl-ui/issues/219
     */
    'valid-jsdoc': 'off',
    'flowtype/no-flow-fix-me-comments': 'warn',
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'no-confusing-arrow': [0],
  },
  globals: {
    globalThis: 'readonly',
  },
};
