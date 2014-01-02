define("fsm/FSM", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('FSM');
smalltalk.packages["FSM"].transport = {"type":"amd","amdNamespace":"fsm"};

smalltalk.addClass('StateMachine', smalltalk.Object, ['currentState', 'stateTable', 'assigningState'], 'FSM');
smalltalk.StateMachine.comment="A Finite State Machine Example. \x0a\x0a| door |\x0a\x0adoor := (StateMachine new) \x0a\x09when: 'closed' ;\x0a\x09\x09on: 'open' do: [window alert: 'opening'. 'open' ] ;\x0a\x09\x09on: 'lock' do: [window alert: 'locked door.'. 'locked'] ;\x0a\x09\x09on: 'unlock' do: [window alert: 'already unlocked'. 'closed' ] ;\x0a\x09\x09on: 'close' do: [window alert: 'already closed'. 'closed'] ;\x0a\x09\x09\x0a\x09when: 'locked' ;\x0a\x09\x09on: 'open' do: [window alert: 'Door is locked, sorry'. 'locked' ] ;\x0a\x09\x0a\x09initialState: 'closed' ;\x0a\x09\x0a\x09yourself.\x0a\x09\x0awindow alert: 'Door is ', door state.\x0a\x09\x0adoor trigger: 'lock' ; trigger: 'open'; trigger: 'unlock'.\x0a\x0awindow alert: 'Door is ', door state.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialState:",
protocol: 'not yet classified',
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
protocol: 'not yet classified',
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
protocol: 'not yet classified',
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
protocol: 'not yet classified',
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
protocol: 'not yet classified',
fn: function (anEvent) {
var self=this;
var targetState;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self["@stateTable"])._at_(self["@currentState"]))._at_(anEvent);
$ctx1.sendIdx["at:"]=1;
targetState=_st($1)._value();
$2=_st(_st(self["@stateTable"])._keys())._includes_(targetState);
if(smalltalk.assert($2)){
self["@currentState"]=targetState;
self["@currentState"];
} else {
$3=_st("Block returned '".__comma(_st(targetState)._asString())).__comma("', but must return one of the valid states configured by #when.");
$ctx1.sendIdx[","]=1;
_st($Object())._throw_($3);
};
return self}, function($ctx1) {$ctx1.fill(self,"trigger:",{anEvent:anEvent,targetState:targetState},smalltalk.StateMachine)});},
args: ["anEvent"],
source: "trigger: anEvent\x0a\x09| targetState |\x0a\x09\x0a\x09targetState := ((stateTable at: currentState) at: anEvent) value.\x0a\x09(stateTable keys includes: targetState) \x0a\x09\x09ifTrue: [ currentState := targetState ]\x0a\x09\x09ifFalse: [ Object throw: 'Block returned ''', targetState asString, ''', but must return one of the valid states configured by #when.'] ",
messageSends: ["value", "at:", "ifTrue:ifFalse:", "includes:", "keys", "throw:", ",", "asString"],
referencedClasses: ["Object"]
}),
smalltalk.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "when:",
protocol: 'not yet classified',
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
