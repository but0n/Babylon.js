import { LinkModel, PortModel } from "@projectstorm/react-diagrams";
import { Nullable } from 'babylonjs/types';
import { NodeMaterialConnectionPoint } from 'babylonjs/Materials/Node/nodeMaterialBlockConnectionPoint';
import { DefaultNodeModel } from '../defaultNodeModel';
import { AdvancedLinkModel } from '../link/advancedLinkModel';

/**
 * Port model
 */
export class DefaultPortModel extends PortModel {
	/**
	 * If the port is input or output
	 */
    public portPosition: string | "input" | "output";
	/**
	 * What the port is connected to
	 */
    public connection: Nullable<NodeMaterialConnectionPoint> = null;

    public defaultValue: any;

    static idCounter = 0;

    constructor(name: string, type: string = "input") {
        super({name: name});
        this.portPosition = type;
        DefaultPortModel.idCounter++;
    }

    canLinkToPort(port: DefaultPortModel): boolean {
        if (!this.connection || !port.connection) {
            return true;
        }

        return this.connection.canConnectTo(port.connection);
    }

    syncWithNodeMaterialConnectionPoint(connection: NodeMaterialConnectionPoint) {
        this.connection = connection;
        this.options.name = connection.name;
    }

    getNodeModel() {
        return this.parent as DefaultNodeModel
    }

    link(outPort: DefaultPortModel) {
        var link = this.createLinkModel()
        link.setSourcePort(this)
        link.setTargetPort(outPort)
        return link;
    }

    createLinkModel(): LinkModel {
        return new AdvancedLinkModel();
    }

    static SortInputOutput(a: Nullable<DefaultPortModel>, b: Nullable<DefaultPortModel>) {
        if (!a || !b) {
            return null;
        } else if (a.portPosition == "output" && b.portPosition == "input") {
            return {
                input: b,
                output: a
            }
        } else if (b.portPosition == "output" && a.portPosition == "input") {
            return {
                input: a,
                output: b
            }
        } else {
            return null;
        }
    }
}