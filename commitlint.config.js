/**
 * Commitlint configuration for enforcing conventional commit messages
 *
 * This configuration ensures commit messages follow the Conventional Commits format:
 * <type>: <description>
 *
 * Example valid commit messages:
 * - feat: add new login feature
 * - fix: resolve issue with payment processing
 * - docs: update README installation instructions
 *
 * For more details on Conventional Commits: https://www.conventionalcommits.org/
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Error level: 0=disabled, 1=warning, 2=error
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only changes
        'style', // Changes that do not affect the meaning of the code (formatting, etc)
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf', // A code change that improves performance
        'test', // Adding missing tests or correcting existing tests
        'build', // Changes that affect the build system or external dependencies
        'ci', // Changes to CI configuration files and scripts
        'cd', // Changes to CD configuration files and scripts
        'chore', // Other changes that don't modify src or test files
        'revert', // Reverts a previous commit
      ],
    ],
    // Ensure type is not empty
    'type-empty': [2, 'never'],
    // Ensure subject (commit message) is not empty
    'subject-empty': [2, 'never'],
    // Enforce a maximum length for the header
    'header-max-length': [2, 'always', 100],
  },
};
