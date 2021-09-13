import React from "react";
import { Header } from "../HeaderComponent/Header";
import { Paragraph } from "../PargraphComponent/Pargraph";
import { SpaceBlock } from "../SpaceBlockComponent/SpaceBlock";
import { Image } from "../ImageComponent/Image";
import { CollapsingBlock } from "../CollapsingBlockComponent/CollapsingBlock";

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
    let param: string | null;
    let param2: string | null;
    switch (name) {
      case "header":
        param = prompt("Введите текст");
        param2 = prompt("Введите уровень заголовка (1 - 6)");
        if (
          param2 &&
          !Number.isNaN(Number(param2)) &&
          Number(param2) >= 1 &&
          Number(param2) <= 6
        ) {
          elements.push(
            <Header level={Number(param2)} children={param ?? ""} />
          );
          break;
        }
        alert("Введены недопустимые параметры");
        break;
      case "paragraph":
        param = prompt("Введите текст");
        params = prompt("Выбирите стиль: bold(жирный), italic(курсив)")?.split(
          " "
        );
        styles = [];
        if (params) {
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
          elements.push(<Paragraph styles={styles} children={param ?? ""} />);
        }
        break;
      case "spaceblock":
        param = prompt("Введите высоту блока:");
        if (param && !Number.isNaN(Number(param))) {
          elements.push(<SpaceBlock blockHeight={Number(param)} />);
          break;
        }
        alert("Введены недопустимые параметры");
        break;
      case "image":
        param = prompt("(Опционально) Введите адрес картинки");
        param2 = prompt(
          "(Опционально) Выберите вариант обтекания ( left | right )"
        );
        elements.push(
          <Image
            source={param ?? ""}
            floatStyle={param2 ? param2.toLowerCase() : ""}
          />
        );
        break;
      case "collapsingblock":
        param = prompt("Введите текст заголовка");
        param2 = prompt("Введите текст содержимого");
        elements.push(
          <CollapsingBlock headerTxt={param ?? ""} innerTxt={param2 ?? ""} />
        );
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
        "Введите название компонента или пустую строку для завершения, доступные компоненты: Header, Paragraph, SpaceBlock, Image, CollapsingBlock"
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
