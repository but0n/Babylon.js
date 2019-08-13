import * as React from "react";
import { GlobalState } from '../../../globalState';
import { InputNodeModel } from './inputNodeModel';
import { InputNodeWidget } from './inputNodeWidget';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

export class InputNodeFactory extends AbstractReactFactory<InputNodeModel, DiagramEngine> {
    private _globalState: GlobalState;

    constructor(globalState: GlobalState) {
        super("input");

        this._globalState = globalState;
    }
    generateReactWidget(event:  GenerateWidgetEvent<InputNodeModel>): JSX.Element {
        return <InputNodeWidget node={event.model} globalState={this._globalState} />;
    }

    generateModel() {
        return new InputNodeModel();
    }
}
