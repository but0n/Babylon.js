import { NodeMaterial } from "babylonjs/Materials/Node/nodeMaterial"
import { Nullable } from "babylonjs/types"
import { Observable } from 'babylonjs/Misc/observable';
import { StandardNodeModel } from './components/diagram/standardNodeModel';
import { LogEntry } from './components/log/logComponent';
import { NodeModel, DiagramEngine } from "@projectstorm/react-diagrams";
import { INodeLocationInfo } from './nodeLocationInfo';
import { NodeMaterialBlock } from 'babylonjs/Materials/Node/nodeMaterialBlock';
import { PreviewMeshType } from './components/preview/previewMeshType';
import { DataStorage } from './dataStorage';

export class GlobalState {
    nodeMaterial: NodeMaterial;
    hostElement: HTMLElement;
    hostDocument: HTMLDocument;
    diagramEngine: DiagramEngine;
    onSelectionChangedObservable = new Observable<Nullable<StandardNodeModel>>();
    onRebuildRequiredObservable = new Observable<void>();
    onResetRequiredObservable = new Observable<Nullable<INodeLocationInfo[]>>();
    onUpdateRequiredObservable = new Observable<void>();
    onZoomToFitRequiredObservable = new Observable<void>();
    onReOrganizedRequiredObservable = new Observable<void>();
    onLogRequiredObservable = new Observable<LogEntry>();
    onErrorMessageDialogRequiredObservable = new Observable<string>();
    onPreviewMeshTypeChanged = new Observable<void>();
    onGetNodeFromBlock: (block: NodeMaterialBlock) => NodeModel;
    previewMeshType: PreviewMeshType;

    public constructor() {
        this.previewMeshType = DataStorage.ReadNumber("PreviewMeshType", PreviewMeshType.Box);
    }
}