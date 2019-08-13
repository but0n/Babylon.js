import { NodeModel, PortWidget, DiagramEngine } from "@projectstorm/react-diagrams";
import * as React from 'react';


export interface IDefaultPortWidgetProps {
	name: string;
    node: NodeModel;
    engine: DiagramEngine;
    style: any;
    direction: string;
}

export class DefaultPortWidget extends React.Component<IDefaultPortWidgetProps, {selected: boolean}> {
    constructor(props: IDefaultPortWidgetProps) {
		super(props);
		this.state = {
			selected: false
		};
	}

	render() {
		return (
            <PortWidget
                port={this.props.node.getPort(this.props.direction)!}
                engine={this.props.engine} >
			<div
                className="srd-port"
                style={this.props.style}
				onMouseEnter={() => {
					this.setState({ selected: true });
				}}
				onMouseLeave={() => {
					this.setState({ selected: false });
				}}
			/>
            </PortWidget>
		);
	}
}