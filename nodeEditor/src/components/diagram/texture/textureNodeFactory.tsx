import { TextureNodeWidget } from "./textureNodeWidget";
import { TextureNodeModel } from "./textureNodeModel";
import * as React from "react";
import { GlobalState } from '../../../globalState';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

export class TextureNodeFactory extends AbstractReactFactory<TextureNodeModel, DiagramEngine> {
    private _globalState: GlobalState;

    constructor(globalState: GlobalState) {
        super("texture");

        this._globalState = globalState;
    }

    generateReactWidget(event: GenerateWidgetEvent<TextureNodeModel>): JSX.Element {
        return <TextureNodeWidget node={event.model} globalState={this._globalState} />;
    }

    generateModel() {
        return new TextureNodeModel();
    }
}