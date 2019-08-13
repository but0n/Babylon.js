import { LightNodeWidget } from "./lightNodeWidget";
import { LightNodeModel } from "./lightNodeModel";
import * as React from "react";
import { GlobalState } from '../../../globalState';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

export class LightNodeFactory extends AbstractReactFactory<LightNodeModel, DiagramEngine> {
    private _globalState: GlobalState;

    constructor(globalState: GlobalState) {
        super("light");

        this._globalState = globalState;
    }

    generateReactWidget(event:  GenerateWidgetEvent<LightNodeModel>): JSX.Element {
        return <LightNodeWidget node={event.model} globalState={this._globalState} />;
    }

    generateModel() {
        return new LightNodeModel();
    }
}