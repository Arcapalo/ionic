/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './toolbar';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../navigation/view-controller';
import * as import9 from '../../config/config';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/metadata/view';
var renderType_Toolbar_Host:import0.RenderComponentType = null;
class _View_Toolbar_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Toolbar_0_4:import3.Toolbar;
  private _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Toolbar_Host0,renderType_Toolbar_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-toolbar',rootSelector,null);
    this.renderer.setElementAttribute(this._el_0,'class','toolbar');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_Toolbar0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Toolbar_0_4 = new import3.Toolbar(this.parentInjector.get(import8.ViewController,null),this.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0));
    this._appEl_0.initComponent(this._Toolbar_0_4,[],compView_0);
    compView_0.create(this._Toolbar_0_4,this.projectableNodes,null);
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Toolbar) && (0 === requestNodeIndex))) { return this._Toolbar_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Toolbar_0_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Toolbar_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Toolbar_Host === null)) { (renderType_Toolbar_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_Toolbar_Host0(viewUtils,parentInjector,declarationEl);
}
export const ToolbarNgFactory:import11.ComponentFactory<import3.Toolbar> = new import11.ComponentFactory<import3.Toolbar>('ion-toolbar',viewFactory_Toolbar_Host0,import3.Toolbar);
const styles_Toolbar:any[] = [];
var renderType_Toolbar:import0.RenderComponentType = null;
class _View_Toolbar0 extends import1.AppView<import3.Toolbar> {
  _el_0:any;
  _el_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Toolbar0,renderType_Toolbar,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','toolbar-background');
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[1]));
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[2]));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_1,'class','toolbar-content');
    this.renderer.projectNodes(this._el_1,import4.flattenNestedViewRenderNodes(this.projectableNodes[3]));
    this.init([],[
      this._el_0,
      this._el_1
    ]
    ,[],[]);
    return null;
  }
}
export function viewFactory_Toolbar0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Toolbar> {
  if ((renderType_Toolbar === null)) { (renderType_Toolbar = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/toolbar/toolbar.ts class Toolbar - inline template',4,import12.ViewEncapsulation.None,styles_Toolbar,{})); }
  return new _View_Toolbar0(viewUtils,parentInjector,declarationEl);
}