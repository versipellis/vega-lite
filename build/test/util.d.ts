import { ConcatModel } from '../src/compile/concat';
import { FacetModel } from '../src/compile/facet';
import { LayerModel } from '../src/compile/layer';
import { Model } from '../src/compile/model';
import { RepeatModel } from '../src/compile/repeat';
import { UnitModel } from '../src/compile/unit';
import { NormalizedConcatSpec, NormalizedFacetSpec, NormalizedLayerSpec, NormalizedRepeatSpec, NormalizedUnitSpec, TopLevel, TopLevelSpec } from '../src/spec';
export declare function parseModel(inputSpec: TopLevelSpec): Model;
export declare function parseModelWithScale(inputSpec: TopLevelSpec): Model;
export declare function parseUnitModel(spec: TopLevel<NormalizedUnitSpec>): UnitModel;
export declare function parseUnitModelWithScale(spec: TopLevel<NormalizedUnitSpec>): UnitModel;
export declare function parseUnitModelWithScaleAndLayoutSize(spec: TopLevel<NormalizedUnitSpec>): UnitModel;
export declare function parseLayerModel(spec: TopLevel<NormalizedLayerSpec>): LayerModel;
export declare function parseFacetModel(spec: TopLevel<NormalizedFacetSpec>): FacetModel;
export declare function parseFacetModelWithScale(spec: TopLevel<NormalizedFacetSpec>): FacetModel;
export declare function parseRepeatModel(spec: TopLevel<NormalizedRepeatSpec>): RepeatModel;
export declare function parseConcatModel(spec: TopLevel<NormalizedConcatSpec>): ConcatModel;