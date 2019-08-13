import * as React from 'react';
import { Nullable } from 'babylonjs/types';
import { Light } from 'babylonjs/Lights/light';
import { StandardNodeModel } from '../standardNodeModel';
import { GlobalState } from '../../../globalState';
import { LightPropertyTabComponent } from './lightPropertyTabComponent';
import { NodeCreationOptions, GraphEditor } from '../../../graphEditor';
import { LightBlock } from 'babylonjs/Materials/Node/Blocks/Dual/lightBlock';
import { DiagramModel } from '@projectstorm/react-diagrams';

/**
 * Light node model which stores information about a node editor block
 */
export class LightNodeModel extends StandardNodeModel {
    private _block: LightBlock;

	/**
	 * Light for the node if it exists
	 */
    public get light(): Nullable<Light> {
        return this._block.light;
    }

    public set light(value: Nullable<Light>) {
        this._block.light = value;
    }

	/**
	 * Constructs the node model
	 */
    constructor() {
        super("light");
    }

    renderProperties(globalState: GlobalState) {
        return (
            <LightPropertyTabComponent globalState={globalState} node={this} />
        );
    }

    prepare(options: NodeCreationOptions, nodes: Array<StandardNodeModel>, model: DiagramModel, graphEditor: GraphEditor) {
        this._block = options.nodeMaterialBlock as LightBlock;

        super.prepare(options, nodes, model, graphEditor);
    }

}