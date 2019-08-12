import { DefaultLinkFactory } from "@projectstorm/react-diagrams";
import * as React from 'react';
import { DefaultPortModel } from '../port/defaultPortModel';
import { AdvancedLinkModel } from './advancedLinkModel';
import { BlockTools } from '../../../blockTools';

export class AdvancedLinkFactory extends DefaultLinkFactory {
	constructor() {
		super();
		this.type = "advanced";
	}

	getNewInstance(initialConfig?: any): AdvancedLinkModel {
		return new AdvancedLinkModel();
	}

	generateLinkSegment(model: AdvancedLinkModel, selected: boolean, path: string) {
        const portModel = (model.getTargetPort() || model.getSourcePort()) as DefaultPortModel;
        const type = portModel.connection!.type;
		let color = BlockTools.GetColorFromConnectionNodeType(type);
		let width = 3;

		return (
			<S.Path
				selected={selected}
				strokeWidth={width}
				stroke={color}
				d={path}
			/>
		);
	}
}