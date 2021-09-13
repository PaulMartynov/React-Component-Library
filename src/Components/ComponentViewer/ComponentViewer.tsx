import React from "react";
import { Header } from "../HeaderComponent/Header";
import { Paragraph } from "../PargraphComponent/Pargraph";
import { SpaceBlock } from "../SpaceBlockComponent/SpaceBlock";

export class ComponentViewer extends React.Component<
  Record<string, unknown>,
  { elements: React.ReactElement[] }
> {
  state = {
    elements: [] as React.ReactElement[],
  };

  findElement = (name: string, elements: React.ReactElement[]): void => {
    let params: string[] | undefined;
    let styles: string[];
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
      case "paragraph":
        params = prompt(
          "Введите текст и стиль: bold(жирный), italic(курсив)"
        )?.split(" ");
        if (params) {
          styles = [];
          params?.forEach((item) => {
            if (
              (item === "bold" || item === "жирный") &&
              !styles.includes("bold")
            ) {
              styles.push("bold");
            }
            if (
              (item === "italic" || item === "курсив") &&
              !styles.includes("italic")
            ) {
              styles.push("italic");
            }
          });
          elements.push(<Paragraph styles={styles} children={params[0]} />);
        }
        break;
      case "spaceblock":
        params = prompt("Введите высоту блока:")?.split(" ");
        if (params && !Number.isNaN(Number(params[0]))) {
          elements.push(<SpaceBlock blockHeight={Number(params[0])} />);
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
        "Введите название компонента или пустую строку для завершения, доступные компоненты: Header, Paragraph, SpaceBlock"
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
