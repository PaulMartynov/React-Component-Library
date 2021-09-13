import React from "react";
import { Header } from "../HeaderComponent/Header";

export class ComponentViewer extends React.Component<
  Record<string, unknown>,
  { elements: React.ReactElement[] }
> {
  state = {
    elements: [] as React.ReactElement[],
  };

  findElement = (name: string, elements: React.ReactElement[]): void => {
    let params: string[] | undefined;
    switch (name) {
      case "header":
        params = prompt(
          "Введите уровень (1 - 6) и текст заголовка через пробел"
        )?.split(" ");
        if (
          params &&
          !Number.isNaN(Number(params[0])) &&
          Number(params[0]) >= 1 &&
          Number(params[0]) <= 6
        ) {
          elements.push(
            <Header level={Number(params[0])} children={params[1]} />
          );
          break;
        }
        alert("Введены недопустимые параметры");
        break;
      default:
        alert(`Данный компонент недоступен`);
    }
  };

  requestUserForRenderElements(): void {
    let componentName;
    const elements: React.ReactElement[] = [];
    do {
      componentName = prompt(
        "Введите название компонента или пустую строку для завершения, доступные компоненты: Header"
      )
        ?.trim()
        .toLowerCase();
      if (!componentName || componentName === "") {
        break;
      }
      this.findElement(componentName, elements);
    } while (componentName);
    this.setState({ elements });
  }

  componentDidMount(): void {
    this.requestUserForRenderElements();
  }

  render(): JSX.Element {
    return <>{this.state.elements}</>;
  }
}
