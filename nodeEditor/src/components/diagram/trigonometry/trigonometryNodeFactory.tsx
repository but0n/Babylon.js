import * as React from "react";
import { GlobalState } from '../../../globalState';
import { TrigonometryNodeModel } from './trigonometryNodeModel';
import { TrigonometryNodeWidget } from './trigonometryNodeWidget';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

/**
 * Node factory which creates editor nodes
 */
export class TrigonometryNodeFactory extends AbstractReactFactory<TrigonometryNodeModel, DiagramEngine> {
    private _globalState: GlobalState;

	/**
	 * Constructs a GenericNodeFactory
	 */
    constructor(globalState: GlobalState) {
        super("trigonometry");

        this._globalState = globalState;
    }

	/**
	 * Generates a node widget
	 * @param diagramEngine diagram engine
	 * @param node node to generate
	 * @returns node widget jsx
	 */
    generateReactWidget(event: GenerateWidgetEvent<TrigonometryNodeModel>): JSX.Element {
        return <TrigonometryNodeWidget node={event.model} globalState={this._globalState} />;
    }

	/**
	 * Gets a new instance of a node model
	 * @returns input node model
	 */
    generateModel() {
        return new TrigonometryNodeModel();
    }
}