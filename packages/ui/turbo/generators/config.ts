import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A generator to add a new React component with proper folder structure
  plop.setGenerator('react-component', {
    description: 'Adds a new React component with tests and stories',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component is this?',
        choices: ['core', 'smart'],
      },
    ],
    actions: [
      // Create the main component file
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      // Create a test file
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component.test.hbs',
      },
      // Create a story file
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component.stories.hbs',
      },
      // Create an index file for clean exports
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component.index.hbs',
      },
      // Update index.ts with new component export
      {
        type: 'modify',
        path: 'index.ts',
        pattern: /([\r\n]*)$/,
        template: "\nexport * from './src/components/{{componentType}}/{{pascalCase name}}';\n",
      },
    ],
  });
}
