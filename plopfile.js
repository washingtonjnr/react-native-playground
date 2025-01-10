const camelCase = require("camelcase");

module.exports = function (plop) {
  plop.setGenerator("element", {
    description: "Cria uma Page ou um Component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Você quer criar uma Page ou um Component?",
        choices: ["Page", "Component"],
      },
      {
        type: "input",
        name: "name",
        message: "Qual o nome?",
      },
    ],
    actions: function (data) {
      const actions = [];

      if (data.type === "Page") {
        actions.push(
          {
            type: "add",
            path: "app/{{dashCase name}}/index.tsx",
            templateFile: "plop-templates/page-index.hbs",
          },
          {
            type: "add",
            path: "app/{{dashCase name}}/style.ts",
            templateFile: "plop-templates/page-style.hbs",
          }
        );
      } else {
        actions.push(
          {
            type: "add",
            path: "components/{{camelCase name}}/index.tsx",
            templateFile: "plop-templates/component-index.hbs",
          },
          {
            type: "add",
            path: "components/{{camelCase name}}/style.ts",
            templateFile: "plop-templates/component-style.hbs",
          },
          {
            type: "add",
            path: "components/{{camelCase name}}/components/README.md",
            template: "# Componente interno para {{name}}",
          }
        );
      }

      return actions;
    },
  });
};
