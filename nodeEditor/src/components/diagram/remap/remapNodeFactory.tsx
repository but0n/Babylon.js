import * as React from "react";
import { GlobalState } from '../../../globalState';
import { RemapNodeModel } from './remapNodeModel';
import { RemapNodeWidget } from './remapNodeWidget';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

export class RemapNodeFactory extends AbstractReactFactory<RemapNodeModel, DiagramEngine> {
    private _globalState: GlobalState;

    constructor(globalState: GlobalState) {
        super("remap");

        this._globalState = globalState;
    }

    generateReactWidget(event: GenerateWidgetEvent<RemapNodeModel>): JSX.Element {
        return <RemapNodeWidget node={event.model} globalState={this._globalState} />;
    }

    generateModel() {
        return new RemapNodeModel();
    }
}