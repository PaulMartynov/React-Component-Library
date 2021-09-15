import React from "react";
import { Header } from "../HeaderComponent/Header";
import { Paragraph } from "../PargraphComponent/Paragraph";
import { SpaceBlock } from "../SpaceBlockComponent/SpaceBlock";
import { Image } from "../ImageComponent/Image";
import { CollapsingBlock } from "../CollapsingBlockComponent/CollapsingBlock";
import { Column } from "../ColumnComponent/Column";

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
        params = prompt(
          "Выберите стиль (можно несколько через пробел): bold(жирный), italic(курсив)"
        )?.split(" ");
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
          <CollapsingBlock headerTxt={param ?? ""} children={param2 ?? ""} />
        );
        break;
      case "column":
        param = prompt("Введите количество колонок");
        if (Number.isNaN(Number(param))) {
          alert("Введены недопустимые параметры");
          break;
        }
        param2 = prompt("Введите текст содержимого");
        elements.push(<Column count={Number(param)} children={param2 ?? ""} />);
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
        "Введите название компонента или пустую строку для завершения, доступные компоненты: Header, Paragraph, SpaceBlock, Image, CollapsingBlock, Column"
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

  render(): JSX.Element[] {
    return this.state.elements.map((element: JSX.Element, index) => (
      <React.Fragment key={`el-${index}`}>{element}</React.Fragment>
    ));
  }
}
