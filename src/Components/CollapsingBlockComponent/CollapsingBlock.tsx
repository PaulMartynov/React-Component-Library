import React from "react";
import "./style.css";

export class CollapsingBlock extends React.Component<
  CollapsingProps,
  CollapsingState
> {
  state: CollapsingState = {
    isHidden: false,
  };

  collapse = (): void => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render(): React.ReactElement {
    const hidden = this.state.isHidden;
    return (
      <>
        <p className={"blockHeader"}>
          {this.props.headerTxt}
          <button onClick={this.collapse}>
            {hidden ? "Скрыть" : "Показать"}
          </button>
        </p>
        {hidden && <p>{this.props.children}</p>}
      </>
    );
  }
}
