define("fsm/FSM", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('FSM');
smalltalk.packages["FSM"].transport = {"type":"amd","amdNamespace":"fsm"};

smalltalk.addClass('FSM', smalltalk.Object, [], 'FSM');
smalltalk.FSM.comment="\x0a| backendConnection  it |\x0abackendConnection := FSM new.\x0ait := backendConnection .\x0a\x0ait when: 'idle' ;  on: 'connect' do: [...] ; on: 'close' do: [..] ; on: 'send' do: []; on: 'data' do: [..] ;\x0ait when 'connecting' ;\x0a\x09\x09on: 'connect' do: [...] ; on: 'close' do: [..].\x0ait when 'closing' ;\x0a\x09\x09                                                                 on: 'send' do: []; on: 'data' do: [..] .\x0ait when 'lost' ;\x0a\x09\x09on: 'connect' do: [...] ; on: 'close' do: [..] ; on: 'send' do: []; on: 'data' do: [..] .\x0a\x0a\x0abackendConnection trigger: 'connect'\x0a\x0a\x0a\x0astateTable                    on: 'connect' ; on: 'foo'; on: 'bar' ;\x0awhen: 'idle'                   do: [. 'idle' ]   ; do: [ 4 + 7   ]\x0awhen: 'connecting' ;     do: [ ]";


smalltalk.addClass('StateMachine', smalltalk.Object, ['currentState', 'stateTable', 'assigningState'], 'FSM');
smalltalk.addMethod(
smalltalk.method({
selector: "initialState:",
category: 'not yet classified',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentState"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"initialState:",{aString:aString},smalltalk.StateMachine)});},
args: ["aString"],
source: "initialState: aString\x0a\x09currentState := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@stateTable"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.StateMachine)});},
args: [],
source: "initialize\x0a\x09stateTable := Dictionary new.",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'not yet classified',
fn: function (anEvent, actions) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@stateTable"])._at_(self["@assigningState"]))._at_put_(anEvent,actions);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anEvent:anEvent,actions:actions},smalltalk.StateMachine)});},
args: ["anEvent", "actions"],
source: "on: anEvent do: actions\x0a\x09(stateTable at: assigningState)\x0a\x09\x09at: anEvent put: actions.",
messageSends: ["at:put:", "at:"],
referencedClasses: []
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentState"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.StateMachine)});},
args: [],
source: "state\x0a\x09^ currentState.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "trigger:",
category: 'not yet classified',
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@stateTable"])._at_(self["@currentState"]))._at_(anEvent);
$ctx1.sendIdx["at:"]=1;
self["@currentState"]=_st($1)._value();
return self}, function($ctx1) {$ctx1.fill(self,"trigger:",{anEvent:anEvent},smalltalk.StateMachine)});},
args: ["anEvent"],
source: "trigger: anEvent\x0a\x09currentState := ((stateTable at: currentState) at: anEvent) value.",
messageSends: ["value", "at:"],
referencedClasses: []
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "when:",
category: 'not yet classified',
fn: function (aState) {
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@assigningState"]=aState;
_st(self["@stateTable"])._at_put_(aState,_st($Dictionary())._new());
return self}, function($ctx1) {$ctx1.fill(self,"when:",{aState:aState},smalltalk.StateMachine)});},
args: ["aState"],
source: "when: aState\x0a\x09assigningState := aState.\x0a\x09stateTable at: aState put: Dictionary new.",
messageSends: ["at:put:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.StateMachine);


});
